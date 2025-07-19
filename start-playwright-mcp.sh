#!/bin/bash

# Playwright MCP 启动脚本
echo "🎭 启动 Playwright MCP 服务器..."

# 设置环境变量
export PLAYWRIGHT_HEADLESS=false
export PLAYWRIGHT_TIMEOUT=30000
export NODE_ENV=development

# 启动 Playwright MCP 服务器
echo "📍 服务器将在 http://localhost:3001 启动"
echo "🔧 配置: 非无头模式，30秒超时"

npx -y @playwright/mcp \
  --headless false \
  --port 3001 \
  --host localhost \
  --output-dir ./playwright-output \
  --save-trace \
  --viewport-size "1920,1080" \
  --user-agent "Mozilla/5.0 (Augment-Code-AI-Agent)"

echo "✅ Playwright MCP 服务器已启动！"
