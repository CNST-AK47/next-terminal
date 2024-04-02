package api

import (
	"context"
	"next-terminal/server/common/guacamole"

	"github.com/gorilla/websocket"
)

type GuacamoleHandler struct {
	ws     *websocket.Conn
	tunnel *guacamole.Tunnel
	ctx    context.Context
	cancel context.CancelFunc
}

// 创建guacamole 处理handler--主要是进行桥接
func NewGuacamoleHandler(ws *websocket.Conn, tunnel *guacamole.Tunnel) *GuacamoleHandler {
	// 获取上线文
	ctx, cancel := context.WithCancel(context.Background())
	// 创建桥接器
	return &GuacamoleHandler{
		ws:     ws,
		tunnel: tunnel,
		ctx:    ctx,
		cancel: cancel,
	}
}

// 桥接转换
func (r GuacamoleHandler) Start() {
	go func() {
		for {
			select {
			// 收取信号--直接返回
			case <-r.ctx.Done():
				return
			default:
				// 读取tunnel数据
				instruction, err := r.tunnel.Read()
				// 发送远程连接关闭
				if err != nil {
					guacamole.Disconnect(r.ws, TunnelClosed, "远程连接已关闭")
					return
				}
				// 指令为空--继续
				if len(instruction) == 0 {
					continue
				}
				// 进行指令写入
				err = r.ws.WriteMessage(websocket.TextMessage, instruction)
				if err != nil {
					return
				}
			}
		}
	}()
}

func (r GuacamoleHandler) Stop() {
	r.cancel()
}
