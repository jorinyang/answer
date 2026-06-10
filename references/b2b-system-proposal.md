# B2B 系统建设方案模式

> answer 工作流在「B2B系统建设提案」场景下的领域适配参考。
> 从《万峰林景区工单与库存管理系统》方案中提炼，可复用于类似双路径报价+技术方案+Demo的提案任务。

---

## 适用场景

- 面向客户的系统建设提案，需输出报价清单 + 技术方案 + 可交互Demo
- 存在两种技术路径对比（如轻量平台 vs 全栈平台）
- 客户预算有限，需要按功能模块逐项定价，支持客户勾选裁剪
- 平台生态内构建（钉钉/飞书/企微），非独立Web应用开发

---

## 标准三件套交付物

| # | 产出物 | 格式 | 受众 | 核心内容 |
|---|--------|------|------|---------|
| 1 | 功能报价清单 | .xlsx（双Sheet） | Sheet1客户 / Sheet2内部 | 按模块逐项双路径定价 |
| 2 | 技术方案 | .docx | 客户决策层 | 10章标准结构 |
| 3 | HTML Demo | .html（单文件SPA） | 客户体验演示 | 可交互静态原型，覆盖业务闭环 |

---

## Excel 报价清单结构

### Sheet1 — 客户面

| 列 | 字段 | 说明 |
|----|------|------|
| A | 序号 | 1-N |
| B | 功能域 | 工单管理 / 库存管理 / 系统管理，域间灰色分隔行 |
| C | 功能点名称 | 三级细分 |
| D | 功能简述 | ≤30字 |
| E | 路径A报价 | 轻量方案（如钉钉AI表格） |
| F | 路径B报价 | 全栈方案（如宜搭低代码） |

- 路径B独有能力仅路径B列有值，路径A列留空或标"—"
- 前期费用（调研/设计）单列行
- 平台年费单独一行
- 底部合计行加粗+浅蓝底色
- **不出现** Fibonacci/RICE/利润率等内部数据

### Sheet2 — 内部评估表

| 列 | 字段 |
|----|------|
| A-D | 同Sheet1 |
| E | Fibonacci (1/2/3/5/8) |
| F-H | Reach / Impact / Confidence (1-5) |
| I | RICE得分 |
| J-K | 两路径基础价 |
| L | 浮动比例 |
| M-N | 两路径最终价 |
| O | 预算池 |
| P | 备注 |

---

## Word 技术方案 — 10章标准结构

```
第一章 项目背景
  1.1 管理现状
  1.2 痛点分析
  1.3 建设目标

第二章 需求分析
  2.1 业务需求（流程图）
  2.2 角色与权限
  2.3 关键场景

第三章 功能评估
  3.1 功能模块总览
  3.2 路径A覆盖
  3.3 路径B覆盖
  3.4 对比矩阵

第四章 系统规划
  4.1 路径A实现方式
  4.2 路径B实现方式
  4.3 推荐策略

第五章 架构设计
  5.1 路径A架构
  5.2 路径B架构
  5.3 数据模型
  5.4 接口与集成
  （含SVG模块依赖关系图，单独文件）

第六章 技术标准
  6.1 命名规范
  6.2 数据字典
  6.3 流程设计规范
  6.4 权限模型

第七章 服务支持
  7.1 咨询阶段
  7.2 开发阶段
  7.3 培训阶段
  7.4 售后服务

第八章 实施计划
  8.1 周期
  8.2 里程碑节点
  8.3 交付物清单
  8.4 验收标准

第九章 资金预算
  9.1 路径A预算明细
  9.2 路径B预算明细
  9.3 对比总览
  9.4 付款方式

第十章 项目保障
  10.1 客户配合项（资金/数据/制度/协同/执行保障）
  10.2 乙方保障（数据安全/升级扩展/技术保障）
  10.3 联系方式
```

---

## 功能模块树标注规范

- 三级结构：系统 → 模块 → 功能点
- ⚠️ 标注：高复杂度项，定价时给高Fib分（5或8），客户不倾向选但要报价
- 🟦 标注：仅全栈方案独有的能力
- 统一命名：不使用多名称混用（如"多维表/AI表格"→统一为"钉钉AI表格"）

---

## 三路线定价模型（含过渡方案）

当客户要求第三种路线「轻量→全栈分步过渡」时，计费公式如下：

```
路线三 = 轻量方案完整实施 + 全栈方案咨询费 + 平台年费 + 迁移开发(全栈开发费 × 1/4)
```

**Excel 逐行填充**：路线三列每行 = `AI表格价格 + 宜搭价格/4`（AI表格为 "—" 时作 0 处理）。

**前期费用**：前期咨询（轻量价，Phase 1 已完成）+ 系统设计（轻量价 + 全栈系统规划费）。

**Word 融入**：路线三需融入全文而非独立一节——3.2 标为 Phase 1、3.3 标为 Phase 2 目标、新增 3.5/3.6 巡检评估+过渡策略、新增 4.3 迁移实现路径、对比矩阵和预算表均增加第三列。

| 参数 | 来源 | 典型值 |
|------|------|--------|
| 前期费用（调研/需求/评估） | 一致 | ≈3,000 |
| 前期费用（设计/架构/标准） | 路径差异 | 轻量≈3,000 / 全栈≈12,000 (3-4x) |
| 平台年费 | 30人版 | 查询平台官方定价 |
| 开发总价 | Fib+RICE | 轻量≈8,000 / 全栈≈35,000 |
| 全栈开发倍率 | 开发复杂度 | 约3-5x轻量方案 |
| 利润 | 隐含 | 不对外透出 |

---

## HTML Demo 规范

- 类型：单文件可交互静态原型
- 数据：mock数据，localStorage存储会话内操作
- TAB：按角色视角组织（上报入口/看板/工单处置/库存管理）
- 角色切换：Demo顶部提供角色切换器
- 覆盖流程：上报→派单→处理→申领→审批→出库→验收→闭环
- 不做：真实后端、平台API对接、消息推送

---

## 常见陷阱（提案类特有）

| 陷阱 | 避免方式 |
|------|---------|
| 客户面出现内部参考案例名 | 仅方法复用，不透出"兴义水务""阳光公司"等前客户名 |
| 走错技术栈（做独立Web App而非平台生态内） | Phase 1 必须追问平台约束（钉钉/飞书/企微 vs 独立开发） |
| 功能描述混用多种命名 | 全程统一命名，不出现"多维表/AI表格"等斜杠并列 |
| 派单/抢单逻辑未对齐客户表述 | 客户口头说"接单抢单"，实际管理逻辑可能是统一派单，Clarify阶段追问确认 |
| 材料申领联动标错路径 | 工单内联动的材料申领是全栈独有能力，轻量方案只能独立领料表单+手动关联 |
| 忽略借还模块 | 库存管理中的借出/归还/延期/盘亏是独立业务闭环，容易遗漏 |
| Demo做太重 | 静态原型即可，不要引入数据库/后端 |
| 材料未收齐就Build | 所有图片、文档、纪要逐份确认收到并解析后才进入Phase 1，Phase 1完成前不调用构建工具 |
| **修改Excel/W后用样式丢失** | **禁止用 `delete_rows()` 删行**——合并单元格和emoji前缀会导致行号漂移或静默失败。正确做法：逐行遍历原文件，cell-by-cell复制到新Sheet，跳过目标行。样式、列宽、行高均需显式复制。**即使用 substring 匹配绕过 emoji 前缀，`delete_rows()` 在保存/重载后仍可能失效**——典型症状：in-memory 时 max_row 已减小，`save()` 后再 `load()`，max_row 恢复到原值，删除行数据依然存在。**唯一可靠方案是重建而非删行**。重建代码模板见下方"Excel安全删除行" |
| **修改后不做校验** | Excel修改后必须验证：行数变化、合计金额、关键行保留、表头样式。Word修改后验证：段落残留关键词、所有预算表格的合计值一致性 |
| **openpyxl不认.bak文件** | 临时备份必须用 `.xlsx` 扩展名，`.bak` 会导致 `InvalidFileException`。**更重要的是**：每次 `cp .xlsx .xlsx.bak` 会覆盖上次备份——如果上次修改已损坏文件（如 Sheet2 被部分删除），备份就是损坏版的快照。备份策略：在**任何修改之前**做一次 `.xlsx.bak`，之后就不要再覆盖它；如果需要多轮修改，用带时间戳的命名（如 `.r1.xlsx`、`.r2.xlsx`） |
| **Word表格索引搞错** | python-docx的 `doc.tables[N]` 索引容易出错，修改前先打印每个table的第一行 `[c.text[:25] for c in table.rows[0].cells]` 确认索引正确 |
| **预算修改不同步** | Word中预算数字通常出现在多处（对比矩阵表格 + 费用明细表格 + 正文），修改一处后必须逐表、逐段检查所有含价格的单元格保持一致 |
| **python-docx 段落索引漂移** | 任何 `doc.paragraphs[N]` 在插入新段落后索引全部偏移。后续基于旧索引的操作会写到错误段落或清空正确内容。**唯一安全方式**：用 `find_para(doc, keyword)` 按文本关键词定位段落，不依赖固定索引。见下方"docx安全编辑模式" |
| **insert_paragraph_after 链式调用错误** | 连续插入时，每次都应 `insert_after(上一个新插入的段落, ...)` 而非 `insert_after(doc.paragraphs[-1], ...)`。后者会将内容追加到文档末尾而非目标位置 |
| **清除段落内容时的误伤** | 按关键词清除段落文本时，匹配范围必须精确。宽泛匹配（如仅匹配"AI表格路径"）会误清5.1/5.2架构描述等无关段落。清除前打印全文确认所有匹配段落，清除后验证关键段落仍在 |
| **python-docx 段落样式缓存陷阱** | 通过 XML 直接修改 `w:pStyle` 后，python-docx 的 `p.style.name` 返回缓存值（如 `Normal`），不反映实际 XML。**验证样式必须读 XML**：`p._element.find(qn('w:pPr')).find(qn('w:pStyle')).get(qn('w:val'))`。Word打开文件时样式正确，仅 python-docx 读回有偏差 |

## Excel 安全删除行 — 重建模板

```python
import openpyxl
from copy import copy

orig = openpyxl.load_workbook('source.xlsx')   # 原始文件（有样式）
new_wb = openpyxl.Workbook()

for sheet_name in orig.sheetnames:
    ws_old = orig[sheet_name]
    ws_new = new_wb.create_sheet(sheet_name) if sheet_name != new_wb.sheetnames[0] else new_wb.active
    if ws_new.title != sheet_name:
        ws_new.title = sheet_name

    delete_kws = ['要删的关键词1', '要删的关键词2']
    new_row = 1
    seq = 0

    for old_row in range(1, ws_old.max_row + 1):
        col_c = str(ws_old.cell(row=old_row, column=3).value or '')

        # 跳过目标行
        if any(kw in col_c for kw in delete_kws):
            continue

        # 复制所有单元格（含样式）
        for col in range(1, ws_old.max_column + 1):
            cell_old = ws_old.cell(row=old_row, column=col)
            cell_new = ws_new.cell(row=new_row, column=col)
            cell_new.value = cell_old.value
            if cell_old.has_style:
                cell_new.font = copy(cell_old.font)
                cell_new.border = copy(cell_old.border)
                cell_new.fill = copy(cell_old.fill)
                cell_new.number_format = cell_old.number_format
                cell_new.alignment = copy(cell_old.alignment)

        # 复制行高
        if old_row in ws_old.row_dimensions:
            ws_new.row_dimensions[new_row].height = ws_old.row_dimensions[old_row].height

        # 重新编号
        col_a = str(ws_old.cell(row=old_row, column=1).value or '')
        col_b = str(ws_old.cell(row=old_row, column=2).value or '')
        if col_a.strip().isdigit() and col_b.strip() and col_c.strip():
            seq += 1
            ws_new.cell(row=new_row, column=1).value = seq

        new_row += 1

    # 复制列宽
    for col_letter, dim in ws_old.column_dimensions.items():
        ws_new.column_dimensions[col_letter].width = dim.width

# 删除 openpyxl 自动生成的默认空白 Sheet
if 'Sheet' in new_wb.sheetnames and len(new_wb.sheetnames) > 2:
    del new_wb['Sheet']

new_wb.save('output.xlsx')
```

## Word 安全编辑模式 — 从备份单次重做\n\n当 python-docx 编辑出错（段落索引漂移、插入错位、内容误清）时，**不要在原文件上修补**——从 `.bak` 备份重做，使用文本关键词查找而非索引。\n\n```python\nfrom docx import Document\nfrom docx.oxml.ns import qn\nfrom lxml import etree\nfrom copy import deepcopy\n\ndoc = Document('file.docx')\n\ndef find_para(doc, keyword):\n    \"\"\"按文本关键词查找段落——唯一安全的定位方式。\"\"\"\n    for p in doc.paragraphs:\n        if keyword in p.text:\n            return p\n    return None\n\ndef insert_after(ref_para, text, style_name=None):\n    \"\"\"在ref_para之后插入新段落。链式调用时传上次返回值。\"\"\"\n    new_p_elem = etree.SubElement(ref_para._element.getparent(), qn('w:p'))\n    pPr = ref_para._element.find(qn('w:pPr'))\n    if pPr is not None:\n        new_p_elem.insert(0, deepcopy(pPr))\n    if style_name:\n        pPr_e = new_p_elem.find(qn('w:pPr'))\n        if pPr_e is None:\n            pPr_e = etree.SubElement(new_p_elem, qn('w:pPr'))\n        pStyle = pPr_e.find(qn('w:pStyle'))\n        if pStyle is None:\n            pStyle = etree.SubElement(pPr_e, qn('w:pStyle'))\n        pStyle.set(qn('w:val'), style_name)\n    r = etree.SubElement(new_p_elem, qn('w:r'))\n    t = etree.SubElement(r, qn('w:t'))\n    t.text = text\n    t.set(qn('xml:space'), 'preserve')\n    parent = ref_para._element.getparent()\n    ref_idx = list(parent).index(ref_para._element)\n    parent.remove(new_p_elem)\n    parent.insert(ref_idx + 1, new_p_elem)\n    from docx.text.paragraph import Paragraph\n    return Paragraph(new_p_elem, ref_para._parent)\n\n# === 正确使用示例 ===\n# 1. 修改已有段落：按关键词查找→改文本\np = find_para(doc, '双技术路径')\nif p: p.text = p.text.replace('双', '三')\n\n# 2. 插入新段落：链式调用\nref = find_para(doc, '3.4 两路径功能对比矩阵')\nif ref:\n    ref = insert_after(ref, '3.5 新增章节', style_name='Heading 2')\n    ref = insert_after(ref, '段落内容...', style_name='Normal')  # 链式：插在上一个后面\n    ref = insert_after(ref, '更多内容...', style_name='Normal')\n\n# 3. 修改表格：先打表头确认索引\nfor ti, table in enumerate(doc.tables):\n    hdr = [c.text[:25] for c in table.rows[0].cells]\n    print(f\"Table {ti}: {hdr}\")\n\n# 4. 修改后校验\ndoc.save('file.docx')\ndoc2 = Document('file.docx')\nchecks = ['场景四', '三技术路径', '巡检管理', 'Phase 1']\nfor kw in checks:\n    found = any(kw in p.text for p in doc2.paragraphs)\n    print(f\"{'✅' if found else '❌'} {kw}\")\n\n# 5. 预算表一致性\nfor row in doc2.tables[6].rows:\n    if '合' in row.cells[0].text:\n        print(f\"合计: {row.cells[1].text} | {row.cells[2].text}\")\n```\n\n**关键原则**：\n- 一次 `cp file.docx file.docx.bak` 后不再覆盖备份\n- 所有修改在单次Python脚本中完成（不跨多次 `terminal` 调用累加修改）\n- 每次改完立刻校验：关键词存在性 + 表格数值一致性 + 段落无残留\n- 出错→回滚备份→重做整次修改，不在损坏版本上修补\n\n## PRD 通用开发版 — 四件套扩展

当客户需要脱离平台生态（钉钉/飞书/企微）进行独立Web应用开发时，在标准三件套基础上增加：

| # | 产出物 | 说明 |
|---|--------|------|
| 4 | PRD 通用开发版 (.md) | 平台无关的完整技术规格，含：完整13表DDL、60+ RESTful API规格、前端路由树、技术选型、部署架构、测试策略、环境变量模板。目标：**开发团队拿到即可直接启动编码** |

通用开发版 PRD 与平台方案版 PRD 的核心差异：
- 无平台依赖（不出现"钉钉AI表格""宜搭"等平台概念）
- 增加完整 API 规格（每个接口含 Method/Endpoint/Auth/Input/Output）
- 增加完整 DDL（含索引、关系约束、注释）
- 增加前端路由设计 + 响应式断点
- 增加技术栈选型建议（前端/后端/数据库/缓存/存储）
- 增加部署拓扑图和环境变量模板
- 增加测试策略（单元/API/E2E/性能/安全五层）

## 竞对信息收集模式

用户可能逐张发送竞对方案截图。处理流程：

1. **每张单独解析** — 收到一张→详细解析→记录功能点/价格/平台→回复「已记录，发下一张」
2. **不催促不跳过** — 等用户主动发下一张，不说「还有其他吗」或「一次性发完」
3. **只记录不评价** — 竞对信息仅作价格锚点和功能参考，不在方案正文中直接对比或贬低
4. **汇总到附录** — 全部收到后在 PRD/方案的附录中列出差异化对比表

```


## python-docx 编辑进阶陷阱（补充）

### 1. `insert_after` 创建的段落可能为空
`insert_after`（通过 `etree.SubElement` 创建 `<w:p>` 后 insert）在某些情况下会产生**文本内容为空的段落**。当插入的段落需要出现在两个已有段落之间时，改用 `body.insert(idx, new_p_elem)` 直接将已填充的新元素插入到目标位置，更可靠。

```python
# ✅ 在两个已有段落之间插入：直接 element insert
scene4 = find_elem(body, '场景四：设备扫码巡检')
children = list(body)
idx = children.index(scene4)
new_p = etree.Element(qn('w:p'))
r = etree.SubElement(new_p, qn('w:r'))
t = etree.SubElement(r, qn('w:t'))
t.text = '描述文本...'
t.set(qn('xml:space'), 'preserve')
body.insert(idx, new_p)
```

### 2. 段落移动后避免用 `doc.paragraphs` 索引
移动段落（`body.remove(elem)` + `body.insert(idx, elem)`）后，`doc.paragraphs` 列表中的 Paragraph 对象变为 stale。后续任何基于 `doc.paragraphs[N]` 或 `list(doc.paragraphs).index(p)` 的操作都会报 `ValueError: is not in list`。应在 move 后 `doc.save()` + 重新 `Document()` 加载，或全程使用 element-based 操作（`doc.element.body` + `find_elem()`）。

### 3. 清除段落文本的误伤模式
按关键词清除段落时匹配必须精确。宽泛匹配（如仅 "AI表格路径"）会误清 5.1/5.2 架构描述等无关段落。清除前打印所有匹配段落全文确认范围，清除后验证关键段落仍在。

```python
# ❌ 危险：匹配太宽
if 'AI表格' in p.text: clear(p)  # 会误伤架构描述

# ✅ 安全：精确匹配 + 上下文约束
if p.text.strip() == 'AI表格路径' and is_in_section_35: clear(p)
```

### 4. Heading 样式需通过 XML 替换 pPr
动态插入段落的 `p.style = styles['Heading 2']` 不可靠。必须：移除旧 `w:pPr` → 创建新 `w:pPr` 含 `w:pStyle` → 插入到 `<w:p>` 开头。

```python
def set_heading_style(p, level):
    old_pPr = p._element.find(qn('w:pPr'))
    if old_pPr is not None: p._element.remove(old_pPr)
    new_pPr = etree.Element(qn('w:pPr'))
    pStyle = etree.SubElement(new_pPr, qn('w:pStyle'))
    pStyle.set(qn('w:val'), f'Heading {level}')
    p._element.insert(0, new_pPr)
```

### 5. 从备份单次重做 — 唯一可靠的修复方式
当编辑出错时，**不要在原文件上修补**——从 `.bak` 备份恢复，将所有修改在单次Python脚本中完成。累加式修改（多次 `terminal` 调用）导致段落索引定位失败的风险极高。

```bash
cp file.docx.bak file.docx  # 回滚
python3 << 'PYEOF'
# 所有修改在一个脚本中完成：
# 1. 改现有段落（by keyword）
# 2. 插入新段落（链式 insert_after）
# 3. 改表格（先打印表头确认索引）
# 4. 保存 + 重新加载 + 验证
PYEOF

客户反馈「删除X、保留Y」时的工作流：

1. **明确删除项清单** — 逐项列出要删除的功能名称，确认是「全部删除」还是「部分删除」
2. **先回滚再重做** — 如果上一轮改动包含错误操作，从 `.bak`（首轮备份）恢复原始文件，重新执行
3. **Excel** — 重建方式（逐行复制，跳过目标行）是唯一可靠方案，禁止使用 `delete_rows()`
4. **Word** — 先打印所有表格 `[c.text[:30] for c in table.rows[0].cells]` 确认索引，再操作
5. **预算同步** — Excel 合计变更后，Word 中所有含价格数字的表格和段落必须全部更新
6. **校验清单** — 改完后逐项验证：删除项是否残留、保留项是否还在、合计是否正确、样式是否完整
