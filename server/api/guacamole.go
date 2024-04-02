package api

import (
	"context"
	"fmt"
	"net/http"
	"next-terminal/server/common/guacamole"
	"next-terminal/server/common/nt"
	"path"
	"strconv"

	"next-terminal/server/config"
	"next-terminal/server/global/session"
	"next-terminal/server/log"
	"next-terminal/server/model"
	"next-terminal/server/repository"
	"next-terminal/server/service"
	"next-terminal/server/utils"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

const (
	TunnelClosed             int = -1
	Normal                   int = 0
	NotFoundSession          int = 800
	NewTunnelError           int = 801
	ForcedDisconnect         int = 802
	AccessGatewayUnAvailable int = 803
	AccessGatewayCreateError int = 804
	AssetNotActive           int = 805
	NewSshClientError        int = 806
)

var UpGrader = websocket.Upgrader{
	ReadBufferSize:  4096,
	WriteBufferSize: 4096,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
	Subprotocols: []string{"guacamole"},
}

// VNC 连接API接口对象
type GuacamoleApi struct {
}

// 创建VNC连接
func (api GuacamoleApi) Guacamole(c echo.Context) error {
	// 创建websocket连接
	ws, err := UpGrader.Upgrade(c.Response().Writer, c.Request(), nil)
	if err != nil {
		log.Warn("升级为WebSocket协议失败", log.NamedError("err", err))
		return err
	}
	ctx := context.TODO()
	// 获取宽度
	width := c.QueryParam("width")
	// 获取高度
	height := c.QueryParam("height")
	// dpi
	dpi := c.QueryParam("dpi")
	sessionId := c.Param("id")

	intWidth, _ := strconv.Atoi(width)
	intHeight, _ := strconv.Atoi(height)
	// 创建新的配置信息
	configuration := guacamole.NewConfiguration()
	// 获取数据源map
	propertyMap := repository.PropertyRepository.FindAllMap(ctx)
	// 设置宽度
	configuration.SetParameter("width", width)
	configuration.SetParameter("height", height)
	configuration.SetParameter("dpi", dpi)
	// 查询对应的session 信息
	s, err := service.SessionService.FindByIdAndDecrypt(ctx, sessionId)
	if err != nil {
		return err
	}
	// 设置对应配置--将属性map转换为config 配置
	api.setConfig(propertyMap, s, configuration)
	// 如果存在gateway 直接进行返回
	if s.AccessGatewayId != "" && s.AccessGatewayId != "-" {
		g, err := service.GatewayService.GetGatewayById(s.AccessGatewayId)
		if err != nil {
			guacamole.Disconnect(ws, AccessGatewayUnAvailable, "获取接入网关失败："+err.Error())
			return nil
		}

		defer g.CloseSshTunnel(s.ID)
		exposedIP, exposedPort, err := g.OpenSshTunnel(s.ID, s.IP, s.Port)
		if err != nil {
			guacamole.Disconnect(ws, AccessGatewayCreateError, "创建SSH隧道失败："+err.Error())
			return nil
		}
		s.IP = exposedIP
		s.Port = exposedPort
	}
	// 设置主机名
	configuration.SetParameter("hostname", s.IP)
	// 设置对应端口
	configuration.SetParameter("port", strconv.Itoa(s.Port))

	// 加载资产配置的属性，优先级比全局配置的高，因此最后加载，覆盖掉全局配置
	attributes, err := repository.AssetRepository.FindAssetAttrMapByAssetId(ctx, s.AssetId)
	if err != nil {
		return err
	}
	// 设置额外配置
	if len(attributes) > 0 {
		api.setAssetConfig(attributes, s, configuration)
	}
	for name := range configuration.Parameters {
		// 替换数据库空格字符串占位符为真正的空格
		if configuration.Parameters[name] == "-" {
			configuration.Parameters[name] = ""
		}
	}
	// 计算guacd地址
	addr := config.GlobalCfg.Guacd.Hostname + ":" + strconv.Itoa(config.GlobalCfg.Guacd.Port)
	// 计算目标主机地址
	asset := fmt.Sprintf("%s:%s", configuration.GetParameter("hostname"), configuration.GetParameter("port"))
	// 新建会话
	log.Debug("新建 guacd 会话", log.String("sessionId", sessionId), log.String("addr", addr), log.String("asset", asset))
	// 创建guacdTunnel
	guacdTunnel, err := guacamole.NewTunnel(addr, configuration)
	if err != nil {
		guacamole.Disconnect(ws, NewTunnelError, err.Error())
		log.Error("建立连接失败", log.String("sessionId", sessionId), log.NamedError("err", err))
		return err
	}
	// 创建对应session
	nextSession := &session.Session{
		ID:          sessionId,   // sessionId
		Protocol:    s.Protocol,  // 协议
		Mode:        s.Mode,      // 模式
		WebSocket:   ws,          // websocket
		GuacdTunnel: guacdTunnel, // guacd隧道
	}
	// 如果是ssh创建ssh terminal
	if configuration.Protocol == nt.SSH {
		nextTerminal, err := CreateNextTerminalBySession(s)
		if err != nil {
			guacamole.Disconnect(ws, NewSshClientError, "建立SSH客户端失败: "+err.Error())
			log.Debug("建立 ssh 客户端失败", log.String("sessionId", sessionId), log.NamedError("err", err))
			return err
		}
		nextSession.NextTerminal = nextTerminal
	}
	// 创建session管理器，主要用于监控时的session加入
	nextSession.Observer = session.NewObserver(sessionId)
	// 将session加入全局session中
	session.GlobalSessionManager.Add(nextSession)
	// 创建数据库session，并进行存储
	sess := model.Session{
		ConnectionId: guacdTunnel.UUID,                                    // 连接ID
		Width:        intWidth,                                            // 宽度
		Height:       intHeight,                                           // 高度
		Status:       nt.Connecting,                                       // 连接状态
		Recording:    configuration.GetParameter(guacamole.RecordingPath), // 设置录像位置
	}
	// 设置记录地址
	if sess.Recording == "" {
		// 未录屏时无需审计
		sess.Reviewed = true // 地址为空时，处于监控模式
	}
	// 创建新会话
	log.Debug("新建会话成功", log.String("sessionId", sessionId))
	// 更新session信息
	if err := repository.SessionRepository.UpdateById(ctx, &sess, sessionId); err != nil {
		return err
	}
	// 创建桥接器
	guacamoleHandler := NewGuacamoleHandler(ws, guacdTunnel)
	// 开始进行桥接处理
	guacamoleHandler.Start()
	// 异常进行中断
	defer guacamoleHandler.Stop()
	// 循环处理read的message
	for {
		_, message, err := ws.ReadMessage()
		if err != nil {
			log.Debug("WebSocket已关闭", log.String("sessionId", sessionId), log.NamedError("err", err))
			// guacdTunnel.Read() 会阻塞，所以要先把guacdTunnel客户端关闭，才能退出Guacd循环
			_ = guacdTunnel.Close()

			service.SessionService.CloseSessionById(sessionId, Normal, "用户正常退出")
			return nil
		}
		// 进行数据写入
		_, err = guacdTunnel.WriteAndFlush(message)
		if err != nil {
			service.SessionService.CloseSessionById(sessionId, TunnelClosed, "远程连接已关闭")
			return nil
		}
	}
}

func (api GuacamoleApi) setAssetConfig(attributes map[string]string, s model.Session, configuration *guacamole.Configuration) {
	for key, value := range attributes {
		if guacamole.DrivePath == key {
			// 忽略该参数
			continue
		}
		if guacamole.EnableDrive == key && value == "true" {
			storageId := attributes[guacamole.DrivePath]
			if storageId == "" || storageId == "-" {
				// 默认空间ID和用户ID相同
				storageId = s.Creator
			}
			realPath := path.Join(service.StorageService.GetBaseDrivePath(), storageId)
			configuration.SetParameter(guacamole.EnableDrive, "true")
			configuration.SetParameter(guacamole.DriveName, "Filesystem")
			configuration.SetParameter(guacamole.DrivePath, realPath)
		} else {
			configuration.SetParameter(key, value)
		}
	}
}

// 监控链接--进行guacamole监控
func (api GuacamoleApi) GuacamoleMonitor(c echo.Context) error {
	// 将http连接提升为websocket
	ws, err := UpGrader.Upgrade(c.Response().Writer, c.Request(), nil)
	if err != nil {
		log.Warn("升级为WebSocket协议失败", log.NamedError("err", err))
		return err
	}
	ctx := context.TODO()
	// 查询session
	sessionId := c.Param("id")
	// 查询对应session
	s, err := repository.SessionRepository.FindById(ctx, sessionId)
	if err != nil {
		return err
	}
	// 检查session状态--表示已经离线，直接返回即可
	if s.Status != nt.Connected {
		guacamole.Disconnect(ws, AssetNotActive, "会话离线")
		return nil
	}
	// 连接信息
	connectionId := s.ConnectionId
	configuration := guacamole.NewConfiguration()
	configuration.ConnectionID = connectionId
	sessionId = s.ID
	configuration.SetParameter("width", strconv.Itoa(s.Width))
	configuration.SetParameter("height", strconv.Itoa(s.Height))
	configuration.SetParameter("dpi", "96")
	// 设置为只读模式
	configuration.SetReadOnlyMode()

	addr := config.GlobalCfg.Guacd.Hostname + ":" + strconv.Itoa(config.GlobalCfg.Guacd.Port)
	// 进行cuacd连接
	guacdTunnel, err := guacamole.NewTunnel(addr, configuration)
	if err != nil {
		guacamole.Disconnect(ws, NewTunnelError, err.Error())
		return err
	}

	nextSession := &session.Session{
		ID:          sessionId,
		Protocol:    s.Protocol,
		Mode:        s.Mode,
		WebSocket:   ws,
		GuacdTunnel: guacdTunnel,
	}

	// 要监控会话
	forObsSession := session.GlobalSessionManager.GetById(sessionId)
	if forObsSession == nil {
		guacamole.Disconnect(ws, NotFoundSession, "获取会话失败")
		return nil
	}
	// 创建uuid
	nextSession.ID = utils.UUID()
	forObsSession.Observer.Add(nextSession)

	guacamoleHandler := NewGuacamoleHandler(ws, guacdTunnel)
	guacamoleHandler.Start()
	defer guacamoleHandler.Stop()

	for {
		_, message, err := ws.ReadMessage()
		if err != nil {
			// guacdTunnel.Read() 会阻塞，所以要先把guacdTunnel客户端关闭，才能退出Guacd循环
			_ = guacdTunnel.Close()

			observerId := nextSession.ID
			forObsSession.Observer.Del(observerId)
			return nil
		}
		// 消息发送和刷新
		_, err = guacdTunnel.WriteAndFlush(message)
		if err != nil {
			service.SessionService.CloseSessionById(sessionId, TunnelClosed, "远程连接已关闭")
			return nil
		}
	}
}

// 设置对应的guacamole配置
func (api GuacamoleApi) setConfig(propertyMap map[string]string, s model.Session, configuration *guacamole.Configuration) {
	// 创建对应记录
	if propertyMap[guacamole.EnableRecording] == "true" {
		configuration.SetParameter(guacamole.RecordingPath, path.Join(config.GlobalCfg.Guacd.Recording, s.ID))
		// 是否创建记录
		configuration.SetParameter(guacamole.CreateRecordingPath, "true")
	} else {
		// 设置记录路径为空
		configuration.SetParameter(guacamole.RecordingPath, "")
	}
	// 设置协议
	configuration.Protocol = s.Protocol
	switch configuration.Protocol {
	case "rdp":
		configuration.SetParameter("username", s.Username)
		configuration.SetParameter("password", s.Password)

		configuration.SetParameter("security", "any")
		configuration.SetParameter("ignore-cert", "true")
		configuration.SetParameter("create-drive-path", "true")
		configuration.SetParameter("resize-method", "reconnect")
		configuration.SetParameter(guacamole.EnableWallpaper, propertyMap[guacamole.EnableWallpaper])
		configuration.SetParameter(guacamole.EnableTheming, propertyMap[guacamole.EnableTheming])
		configuration.SetParameter(guacamole.EnableFontSmoothing, propertyMap[guacamole.EnableFontSmoothing])
		configuration.SetParameter(guacamole.EnableFullWindowDrag, propertyMap[guacamole.EnableFullWindowDrag])
		configuration.SetParameter(guacamole.EnableDesktopComposition, propertyMap[guacamole.EnableDesktopComposition])
		configuration.SetParameter(guacamole.EnableMenuAnimations, propertyMap[guacamole.EnableMenuAnimations])
		configuration.SetParameter(guacamole.DisableBitmapCaching, propertyMap[guacamole.DisableBitmapCaching])
		configuration.SetParameter(guacamole.DisableOffscreenCaching, propertyMap[guacamole.DisableOffscreenCaching])
		configuration.SetParameter(guacamole.ColorDepth, propertyMap[guacamole.ColorDepth])
		configuration.SetParameter(guacamole.ForceLossless, propertyMap[guacamole.ForceLossless])
		configuration.SetParameter(guacamole.PreConnectionId, propertyMap[guacamole.PreConnectionId])
		configuration.SetParameter(guacamole.PreConnectionBlob, propertyMap[guacamole.PreConnectionBlob])
	case "ssh":
		if len(s.PrivateKey) > 0 && s.PrivateKey != "-" {
			configuration.SetParameter("username", s.Username)
			configuration.SetParameter("private-key", s.PrivateKey)
			configuration.SetParameter("passphrase", s.Passphrase)
		} else {
			configuration.SetParameter("username", s.Username)
			configuration.SetParameter("password", s.Password)
		}

		configuration.SetParameter(guacamole.FontSize, propertyMap[guacamole.FontSize])
		configuration.SetParameter(guacamole.FontName, propertyMap[guacamole.FontName])
		configuration.SetParameter(guacamole.ColorScheme, propertyMap[guacamole.ColorScheme])
		configuration.SetParameter(guacamole.Backspace, propertyMap[guacamole.Backspace])
		configuration.SetParameter(guacamole.TerminalType, propertyMap[guacamole.TerminalType])
	case "vnc":
		configuration.SetParameter("username", s.Username)
		configuration.SetParameter("password", s.Password)
	case "telnet":
		configuration.SetParameter("username", s.Username)
		configuration.SetParameter("password", s.Password)

		configuration.SetParameter(guacamole.FontSize, propertyMap[guacamole.FontSize])
		configuration.SetParameter(guacamole.FontName, propertyMap[guacamole.FontName])
		configuration.SetParameter(guacamole.ColorScheme, propertyMap[guacamole.ColorScheme])
		configuration.SetParameter(guacamole.Backspace, propertyMap[guacamole.Backspace])
		configuration.SetParameter(guacamole.TerminalType, propertyMap[guacamole.TerminalType])
	case "kubernetes":
		configuration.SetParameter(guacamole.FontSize, propertyMap[guacamole.FontSize])
		configuration.SetParameter(guacamole.FontName, propertyMap[guacamole.FontName])
		configuration.SetParameter(guacamole.ColorScheme, propertyMap[guacamole.ColorScheme])
		configuration.SetParameter(guacamole.Backspace, propertyMap[guacamole.Backspace])
		configuration.SetParameter(guacamole.TerminalType, propertyMap[guacamole.TerminalType])
	default:

	}
}
