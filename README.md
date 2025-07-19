# Gemini Chat

一个基于 Docker 的 Gemini AI 聊天应用，支持流式对话和 Markdown 渲染。

## ✨ 特性

- 🚀 **流式对话**：实时显示AI回复，支持打字机效果
- 📱 **响应式设计**：完美适配桌面端和移动端
- 🎨 **Markdown支持**：支持粗体、斜体、列表、代码块等格式
- 💾 **会话管理**：本地存储聊天记录，支持多会话
- 🖼️ **图片上传**：支持上传图片与AI对话
- 🎯 **代码高亮**：自动高亮代码块
- ⚡ **Docker部署**：一键部署，简单易用

## 🛠️ 技术栈

- **前端**：HTML5 + CSS3 + JavaScript (原生)
- **Markdown解析**：Marked.js v5.1.1
- **代码高亮**：Highlight.js
- **容器化**：Docker + Nginx
- **AI模型**：Google Gemini API

## 🚀 快速开始

### 使用 Docker Compose 部署

1. 克隆项目：
```bash
git clone https://github.com/erniulure/gemini-chat.git
cd gemini-chat
```

2. 启动服务：
```bash
docker-compose up -d
```

3. 访问应用：
打开浏览器访问 `http://localhost`

## 📁 项目结构

```
gemini-chat/
├── index.html          # 主页面文件
├── docker-compose.yml  # Docker编排文件
├── nginx.conf          # Nginx配置文件
├── README.md           # 项目说明
└── .gitignore          # Git忽略文件
```

## ⚙️ 配置说明

### Nginx 配置
- 端口：80
- 静态文件服务
- 移动端优化

### 功能特性
- 支持 **粗体** 和 *斜体* 文本
- 支持代码块和行内代码
- 支持列表和换行
- 自动保存聊天记录
- 响应式布局适配

## 🎯 使用说明

1. **开始对话**：在输入框中输入消息，点击发送
2. **上传图片**：点击相机图标上传图片
3. **查看历史**：左侧边栏显示历史会话
4. **新建会话**：点击"新对话"按钮
5. **移动端**：支持触摸操作和虚拟键盘

## 🔧 开发说明

### 本地开发
直接用浏览器打开 `index.html` 即可进行开发调试。

### 自定义配置
- 修改 `nginx.conf` 调整服务器配置
- 修改 `docker-compose.yml` 调整容器配置
- 修改 `index.html` 调整界面和功能

## 📝 更新日志

- **v1.0.0** - 初始版本，支持基本聊天功能
- **v1.1.0** - 添加移动端优化和Markdown支持
- **v1.2.0** - 修复星号渲染问题，优化用户体验

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**作者**：erniulure  
**邮箱**：erniulure@gmail.com
