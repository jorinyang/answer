# SVG → PNG via Playwright (for python-docx embedding)

> 适用场景：需要在 Word 文档中嵌入 SVG 架构图，但 python-docx 不支持直接插入 SVG 格式。
> 尤其适用于 WSL + PEP 668 环境（无法 pip install cairosvg）。

## 背景

- python-docx 的 `add_picture()` 仅支持 PNG/JPG/GIF/BMP/TIFF
- cairosvg 在 PEP 668 环境下无法 pip install
- WSL 下 Playwright（headless Chromium）可渲染 SVG 并截图导出 PNG
- WSL 可通过 `/mnt/c/Windows/Fonts/` 访问 Windows 中文字体

## 步骤

### 1. 确认中文字体可用

```bash
fc-list :lang=zh | head -5
# 查找 Noto Sans SC 或 SimSun
# 典型路径：/mnt/c/Windows/Fonts/NotoSansSC-VF.ttf
```

### 2. SVG 使用系统可用字体

```xml
<text font-family="Noto Sans SC, SimSun, sans-serif" ...>
```

**禁止使用 PingFang SC / HarmonyOS Sans SC**（这些字体在 Linux/WSL 下不可用，Playwright 渲染时会挂起等待字体加载超时）。

### 3. Playwright 渲染并导出 PNG

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 900})
    page.goto('file:///path/to/diagram.svg', timeout=15000)
    page.wait_for_timeout(1000)    # 等待渲染完成
    page.screenshot(path='/path/to/output.png', full_page=True)
    browser.close()
```

### 4. 嵌入 Word 文档

```python
from docx import Document
from docx.shared import Inches

doc = Document()
doc.add_picture('/path/to/output.png', width=Inches(5.5))
doc.save('output.docx')
```

## 常见陷阱

| 陷阱 | 症状 | 修复 |
|------|------|------|
| SVG 使用 PingFang SC 字体 | Playwright `Page.screenshot` 超时："waiting for fonts to load..." | 改用 `Noto Sans SC` 或 `SimSun` |
| SVG 直接传给 `add_picture()` | `UnrecognizedImageError` | 必须先用 Playwright 转 PNG |
| SVG 无 width/height 属性 | 渲染尺寸过小（如 267×150） | 添加 `width="1920" height="900"` |
| Playwright 未安装 Chromium | `Executable doesn't exist` | `playwright install chromium` |

## 与此技能的关系

- 用于 answer Phase 6 Build 时需要将架构图嵌入 Word 技术方案的场景
- 与 `feishu-html` 的 OSS 部署流程互补（HTML 可直接引用 SVG，Word 需要 PNG）
