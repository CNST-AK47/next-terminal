package guacamole

import (
	"bufio"
	"encoding/base64"
	"errors"
	"fmt"
	"net"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/websocket"
)

const (
	EnableRecording     = "enable-recording"
	RecordingPath       = "recording-path"
	CreateRecordingPath = "create-recording-path"

	FontName     = "font-name"
	FontSize     = "font-size"
	ColorScheme  = "color-scheme"
	Backspace    = "backspace"
	TerminalType = "terminal-type"

	PreConnectionId   = "preconnection-id"
	PreConnectionBlob = "preconnection-blob"

	EnableDrive              = "enable-drive"
	DriveName                = "drive-name"
	DrivePath                = "drive-path"
	EnableWallpaper          = "enable-wallpaper"
	EnableTheming            = "enable-theming"
	EnableFontSmoothing      = "enable-font-smoothing"
	EnableFullWindowDrag     = "enable-full-window-drag"
	EnableDesktopComposition = "enable-desktop-composition"
	EnableMenuAnimations     = "enable-menu-animations"
	DisableBitmapCaching     = "disable-bitmap-caching"
	DisableOffscreenCaching  = "disable-offscreen-caching"
	// DisableGlyphCaching Deprecated
	DisableGlyphCaching = "disable-glyph-caching"
	ForceLossless       = "force-lossless"

	Domain        = "domain"
	RemoteApp     = "remote-app"
	RemoteAppDir  = "remote-app-dir"
	RemoteAppArgs = "remote-app-args"

	ColorDepth  = "color-depth"
	Cursor      = "cursor"
	SwapRedBlue = "swap-red-blue"
	DestHost    = "dest-host"
	DestPort    = "dest-port"
	ReadOnly    = "read-only"

	UsernameRegex     = "username-regex"
	PasswordRegex     = "password-regex"
	LoginSuccessRegex = "login-success-regex"
	LoginFailureRegex = "login-failure-regex"

	Namespace  = "namespace"
	Pod        = "pod"
	Container  = "container"
	UesSSL     = "use-ssl"
	ClientCert = "client-cert"
	ClientKey  = "client-key"
	CaCert     = "ca-cert"
	IgnoreCert = "ignore-cert"
)

const Delimiter = ';'
const Version = "VERSION_1_4_0"

type Configuration struct {
	ConnectionID string
	Protocol     string
	Parameters   map[string]string
}

func NewConfiguration() (config *Configuration) {
	config = &Configuration{}
	config.Parameters = make(map[string]string)
	return config
}

func (opt *Configuration) SetReadOnlyMode() {
	opt.Parameters[ReadOnly] = "true"
}

func (opt *Configuration) SetParameter(name, value string) {
	opt.Parameters[name] = value
}

func (opt *Configuration) UnSetParameter(name string) {
	delete(opt.Parameters, name)
}

func (opt *Configuration) GetParameter(name string) string {
	return opt.Parameters[name]
}

// 指令封装
type Instruction struct {
	Opcode       string   // 操作码
	Args         []string // 操作参数
	ProtocolForm string   // 协议来源
}

func NewInstruction(opcode string, args ...string) (ret Instruction) {
	ret.Opcode = opcode
	ret.Args = args
	return ret
}

func (opt *Instruction) String() string {
	if len(opt.ProtocolForm) > 0 {
		return opt.ProtocolForm
	}
	// 添加对应指令
	opt.ProtocolForm = fmt.Sprintf("%d.%s", len(opt.Opcode), opt.Opcode)
	for _, value := range opt.Args {
		opt.ProtocolForm += fmt.Sprintf(",%d.%s", len(value), value)
	}
	opt.ProtocolForm += string(Delimiter)
	return opt.ProtocolForm
}

func (opt *Instruction) Parse(content string) Instruction {
	if strings.LastIndex(content, ";") > 0 {
		content = strings.TrimRight(content, ";")
	}
	messages := strings.Split(content, ",")

	var args = make([]string, len(messages))
	for i := range messages {
		lm := strings.Split(messages[i], ".")
		args[i] = lm[1]
	}
	return NewInstruction(args[0], args[1:]...)
}

// 隧道
type Tunnel struct {
	conn   net.Conn       // conn 接口
	reader *bufio.Reader  // reader
	writer *bufio.Writer  // writer
	UUID   string         // 是否开启
	Config *Configuration // 配置信息
	IsOpen bool           // 是否开启
}

// 创建新的隧道
func NewTunnel(address string, config *Configuration) (ret *Tunnel, err error) {
	// 创建对应连接
	conn, err := net.DialTimeout("tcp", address, 5*time.Second)
	if err != nil {
		return
	}
	// 创建tunnel
	ret = &Tunnel{}
	//
	ret.conn = conn
	ret.reader = bufio.NewReader(conn)
	ret.writer = bufio.NewWriter(conn)
	ret.Config = config

	selectArg := config.ConnectionID
	if selectArg == "" {
		selectArg = config.Protocol
	}
	// 写入指令进行select
	if err := ret.WriteInstructionAndFlush(NewInstruction("select", selectArg)); err != nil {
		_ = conn.Close()
		return nil, err
	}
	// 获取输出参数args
	args, err := ret.expect("args")
	if err != nil {
		_ = conn.Close()
		return
	}

	width := config.GetParameter("width")
	height := config.GetParameter("height")
	dpi := config.GetParameter("dpi")

	// send size
	if err := ret.WriteInstructionAndFlush(NewInstruction("size", width, height, dpi)); err != nil {
		_ = conn.Close()
		return nil, err
	}
	if err := ret.WriteInstructionAndFlush(NewInstruction("audio", "audio/L8", "audio/L16")); err != nil {
		_ = conn.Close()
		return nil, err
	}
	if err := ret.WriteInstructionAndFlush(NewInstruction("video")); err != nil {
		_ = conn.Close()
		return nil, err
	}
	if err := ret.WriteInstructionAndFlush(NewInstruction("image", "image/jpeg", "image/png", "image/webp")); err != nil {
		_ = conn.Close()
		return nil, err
	}
	if err := ret.WriteInstructionAndFlush(NewInstruction("timezone", "Asia/Shanghai")); err != nil {
		_ = conn.Close()
		return nil, err
	}

	parameters := make([]string, len(args.Args))
	for i := range args.Args {
		argName := args.Args[i]
		if strings.Contains(argName, "VERSION") {
			parameters[i] = Version
			continue
		}
		// 进行参数设置
		parameters[i] = config.GetParameter(argName)
	}
	// send connect
	if err := ret.WriteInstructionAndFlush(NewInstruction("connect", parameters...)); err != nil {
		_ = conn.Close()
		return nil, err
	}
	// 检查是否READY
	ready, err := ret.expect("ready")
	if err != nil {
		return
	}

	if len(ready.Args) == 0 {
		_ = conn.Close()
		return nil, errors.New("no connection id received")
	}
	// 记录uuid
	ret.UUID = ready.Args[0]
	// 更新是否open
	ret.IsOpen = true
	return ret, nil
}

// 写入指令并刷新
func (opt *Tunnel) WriteInstructionAndFlush(instruction Instruction) error {
	if _, err := opt.WriteAndFlush([]byte(instruction.String())); err != nil {
		return err
	}
	return nil
}

// 写入指令并刷新
func (opt *Tunnel) WriteAndFlush(p []byte) (int, error) {
	//fmt.Printf("-> %v\n", string(p))
	nn, err := opt.writer.Write(p)
	if err != nil {
		return nn, err
	}
	err = opt.writer.Flush()
	if err != nil {
		return nn, err
	}
	return nn, nil
}

// 进行指令读取
func (opt *Tunnel) ReadInstruction() (instruction Instruction, err error) {
	msg, err := opt.Read()
	if err != nil {
		return instruction, err
	}
	return instruction.Parse(string(msg)), err
}

// 读取对应指令
func (opt *Tunnel) Read() (p []byte, err error) {
	data, err := opt.reader.ReadBytes(Delimiter)
	if err != nil {
		return
	}
	s := string(data)
	//fmt.Printf("<- %v \n", s)
	if s == "rate=44100,channels=2;" {
		return make([]byte, 0), nil
	}
	if s == "rate=22050,channels=2;" {
		return make([]byte, 0), nil
	}
	if s == "5.audio,1.1,31.audio/L16;" {
		s += "rate=44100,channels=2;"
	}
	return []byte(s), err
}

// 校验指令
func (opt *Tunnel) expect(opcode string) (instruction Instruction, err error) {
	instruction, err = opt.ReadInstruction()
	if err != nil {
		return instruction, err
	}

	if opcode != instruction.Opcode {
		msg := fmt.Sprintf(`expected "%s" instruction but instead received "%s"`, opcode, instruction.Opcode)
		return instruction, errors.New(msg)
	}
	return instruction, nil
}

// 关闭连接
func (opt *Tunnel) Close() error {
	opt.IsOpen = false
	return opt.conn.Close()
}

func Disconnect(ws *websocket.Conn, code int, reason string) {
	// guacd 无法处理中文字符，所以进行了base64编码。
	encodeReason := base64.StdEncoding.EncodeToString([]byte(reason))
	// 创建异常指令
	err := NewInstruction("error", encodeReason, strconv.Itoa(code))
	// 写入文件信息
	_ = ws.WriteMessage(websocket.TextMessage, []byte(err.String()))
	// 创建断开连接指令
	disconnect := NewInstruction("disconnect")
	// 写入对应指令
	_ = ws.WriteMessage(websocket.TextMessage, []byte(disconnect.String()))
}
