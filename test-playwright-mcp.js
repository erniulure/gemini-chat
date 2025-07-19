// Playwright MCP 测试脚本
const { chromium } = require('playwright');

async function testPlaywrightMCP() {
    console.log('🎭 开始测试 Playwright MCP...');
    
    // 启动浏览器
    const browser = await chromium.launch({ 
        headless: false,
        slowMo: 1000 // 慢动作演示
    });
    
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Augment-Code-AI-Agent'
    });
    
    const page = await context.newPage();
    
    try {
        // 测试 1: 访问我们的 Gemini Chat 应用
        console.log('📍 测试 1: 访问本地 Gemini Chat 应用...');
        await page.goto('http://localhost');
        await page.waitForLoadState('networkidle');
        
        // 截图
        await page.screenshot({ 
            path: './playwright-output/gemini-chat-homepage.png',
            fullPage: true 
        });
        console.log('✅ 截图已保存: gemini-chat-homepage.png');
        
        // 测试 2: 检查页面元素
        console.log('🔍 测试 2: 检查页面元素...');
        const title = await page.title();
        console.log(`📄 页面标题: ${title}`);
        
        const chatInput = await page.locator('#chatInput');
        if (await chatInput.isVisible()) {
            console.log('✅ 聊天输入框已找到');
        }
        
        // 测试 3: 模拟用户交互
        console.log('🤖 测试 3: 模拟用户交互...');
        await chatInput.fill('Hello, this is a test from Playwright MCP!');
        await page.screenshot({ 
            path: './playwright-output/chat-input-filled.png' 
        });
        console.log('✅ 输入框填写完成');
        
        // 测试 4: 检查控制台错误
        console.log('🔍 测试 4: 检查控制台日志...');
        page.on('console', msg => {
            console.log(`🖥️  浏览器控制台: ${msg.type()}: ${msg.text()}`);
        });
        
        page.on('pageerror', error => {
            console.log(`❌ 页面错误: ${error.message}`);
        });
        
        // 等待一段时间观察
        await page.waitForTimeout(3000);
        
        console.log('✅ 所有测试完成！');
        
    } catch (error) {
        console.error('❌ 测试失败:', error);
    } finally {
        await browser.close();
    }
}

// 运行测试
testPlaywrightMCP().catch(console.error);
