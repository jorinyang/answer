# answer

**AI Native'S Workflow(er)**

[![Release](https://img.shields.io/github/v/release/jorinyang/answer)](https://github.com/jorinyang/answer/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jorinyang/answer/blob/main/LICENSE)

> ```
> A I Native' S Workflow( ER )
> └─┘ └───┘└─┘ └────┘└───┘
> A N S W ER
> ```
>
> 每一个字母都在告诉你：这不是工具，这是**AI 原生的思考方式**。

---

## 这是什么

**answer** 是一个 7 阶段结构化工作流编排器。当你需要从零开始构建任何东西——产品、技能、方案、流程、分析报告——它用阶段门禁强制你**每一步都想清楚，再进行下一步**。

它内化了 [designer-skills](https://github.com/julianoczkowski/designer-skills) 的设计思维方法论（grill-me / design-brief / information-architecture / design-tokens / brief-to-tasks / design-review），适配到通用领域。

---

## 为什么存在

人类启动复杂任务时，有三种系统性的失败模式：

1. **跳步** — 直接动手，跳过澄清阶段
2. **散点思考** — 想到哪做到哪，缺乏结构
3. **过早收敛** — 用第一个想到的方案替代所有可能

answer 的解法是**阶段门禁（Phase Gate）**：

```
Clarify  →  Brief  →  Architect  →  Standards  →  Decompose  →  Build  →  Review
(想清楚)    (写下来)    (搭骨架)      (定规范)      (拆任务)      (做出来)    (检查)
```

每一步都是一个强制暂停——Phase N 未完成，不进 Phase N+1。每一步都有明确的产出物、模板和验收标准。

---

## 7 阶段编排

| # | 阶段 | 做什么 | 来自 |
|---|------|--------|------|
| 1 | **Clarify** | 三层必过追问（本质 / 依据 / 优先级）+ 决策树 | grill-me |
| 2 | **Brief** | 结构化简报 + 路径与规律对齐 | design-brief |
| 3 | **Architect** | 结构/层次/流程/关键路径 | information-architecture |
| 4 | **Standards** | 命名约定、复用模式、质量基线 | design-tokens |
| 5 | **Decompose** | 垂直切片拆解，独立可验证 | brief-to-tasks |
| 6 | **Build** | 按任务逐步构建，每步验证 | — |
| 7 | **Review** | 四层审计 + 对照审查 + 压力测试 | design-review + blue-team |

---

## 四层思考：从「是什么」到「怎么做」

answer 不是一上来就排任务。Phase 1 先把三件事问清，Phase 2 把走法与规律对齐，Phase 7 再回头审有没有偏。

| 层 | 问什么 | 落在哪 |
|---|---|---|
| **本体** | 这东西到底是什么？ | Phase 1 需求本质（定义卡） |
| **认识** | 我凭什么知道？ | Phase 1 依据核查（证据台账） |
| **价值** | 为什么重要、排第几？ | Phase 1 优先级判定 + Phase 2 价值主张 |
| **方法** | 路径是什么、依赖什么规律？ | Phase 2 路径与规律 → Phase 3–6 |
| **审计** | 做出来的东西还对得上前面四层吗？ | Phase 7 四层审计 |

三条闸门不可跳过：**三组追问没结论不进 Brief，路径与规律没对齐不进 Architect，四层审计不过不评为通过。**

> 只想把一件事想清楚、不需要产出交付物时，用同仓库的独立技能 [`skills/four-layer-inquiry`](skills/four-layer-inquiry/SKILL.md)：只追问，不写文件。

---

## 6 大领域适配

| 领域 | 当你需要 |
|------|---------|
| 🏢 新业务/产品 | 从零做一个产品、功能、系统 |
| 🛠️ 新技能 | 创建一个 Hermes 技能、CLI 工具 |
| 📋 新方案 | 写 BP、提案、建议书、汇报 |
| 🔄 流程/SOP | 设计标准流程、制度、操作手册 |
| 🔍 分析/调研 | 竞品分析、市场调研、复盘 |
| 🎯 决策支持 | 多个方案怎么选、可行性评估 |

每个领域有完整的 7 阶段追问清单 → [`references/domain-mapping.md`](references/domain-mapping.md)

---

## 快速开始

```bash
# 完整 7 阶段流程
answer this: 我要做一个探洞小程序

# 快速出方案（3 阶段精简）
answer quick: 暑期营销方案

# 只出结构化简报
answer brief: 贵州民宿市场调研

# 只审查已有产出
answer review: gzzhike-summer-plan
```

---

## 100+ 自动触发词

不需要显式说 "answer"，以下场景自动触发：

| 你说 | 触发 |
|------|------|
| "写BP" "做复盘" "运营方案" | 自动走 7 阶段 |
| "帮我梳理" "盘一下" "plan this" | 按复杂度判断 |
| "写一个SOP" "设计流程" "竞品分析" | 匹配对应领域模板 |

---

## 7 阶段详解

<details>
<summary><b>Phase 1: Clarify — 决策树遍历</b></summary>

动手之前，遍历决策树的每一个分支。每个追问附带推荐答案。

追问维度：核心用户是谁？什么算成功（量化）？最不确定的假设是哪个？明确不做什么？

→ 产出 `CLARIFY_{answername}.md`
</details>

<details>
<summary><b>Phase 2: Brief — 结构化简报</b></summary>

将澄清结果结构化，产出可被后续阶段引用的单一真源。

核心原则 ≤ 3 条。用"体验/流程"语言描述，不用"功能"语言。

→ 产出 `BRIEF_{answername}.md`
</details>

<details>
<summary><b>Phase 3: Architect — 结构设计</b></summary>

定义产出物的骨架：模块划分、层级关系、信息流、关键路径。

→ 产出 `ARCHITECTURE_{answername}.md`
</details>

<details>
<summary><b>Phase 4: Standards — 标准规范</b></summary>

识别可复用的模式：命名约定、格式规范、质量基线（DoD）。

→ 产出 `STANDARDS_{answername}.md`
</details>

<details>
<summary><b>Phase 5: Decompose — 任务拆解</b></summary>

垂直切片式拆解。每个任务独立可构建、独立可验证。禁止"创建项目结构"类纯搭建任务。

→ 产出 `TASKS_{answername}.md`
</details>

<details>
<summary><b>Phase 6: Build — 逐步构建</b></summary>

按任务清单逐个完成。每完成一个立即对照 Standards 的 DoD 验证。

交付物调用 Hermes 技能生态：HTML 页面 → `feishu-html`，飞书文档 → `feishu-doc`，架构图 → `architecture-diagram`，技能文件 → `skill_manage`。

→ 产出 `BUILD_LOG_{answername}.md`
</details>

<details>
<summary><b>Phase 7: Review — 质量审查</b></summary>

对照 Brief 逐项检查（完整性、一致性、标准合规、依赖闭合、受众适配）。调用 `blue-team` 对方案逻辑进行压力测试。HTML 页面启用 Playwright 可视化验证。

→ 产出 `REVIEW_{answername}.md`（含评分）
</details>

---

## 编排规则

1. **每阶段确认制** — 用户不确认，不进下一阶段
2. **三道闸门不可跳过** — 三组追问、路径与规律、四层审计
3. **可跳过** — 已有清晰思路可跳 Clarify；单一产出可跳 Architect
4. **可暂停** — 说"够了"即停止，Wiki 节点保留检查点，随时恢复
5. **中断恢复** — 返回时自动检测 Wiki 已有文档，从断点继续
6. **产出全进 Wiki** — 不散落本地文件

---

## 集成生态（可选，非依赖）

answer 本体独立运行，跑完 7 阶段不需要任何外部技能。下表技能存在时用于增强，不存在时用内置方式兜底：

| 产出类型 | 有该技能时 | 没有时（内置兜底） |
|---------|-----------|------------------|
| HTML 页面 / 展示页 | `feishu-html` | 手写单文件 HTML |
| 飞书在线文档 | `feishu-doc` | 内置 lark-cli 一步法，或降级本地 .md |
| SVG 架构图 | — | 直接写 SVG 转 PNG |
| 客户行程落地页 | `trip-landing` | 按页面结构手写 |
| 技能文件 | `skill_manage` | 按目录规范手写 SKILL.md |
| 方案逻辑审查 | `blue-team` | 7.2 内置三步版 + 7.2a 红队 |

---

## 文件结构

```
answer/
├── SKILL.md                    ← 主技能文件（7 阶段）
├── references/
│   └── domain-mapping.md       ← 6 领域 × 7 阶段完整模板
├── skills/
│   └── four-layer-inquiry/     ← 四层追问（独立技能，与 answer 互不依赖）
│       └── SKILL.md
├── scripts/
│   └── verify-skill.mjs        ← 发布前自检：frontmatter、引用路径、小节号
├── CHANGELOG.md
├── LICENSE                     ← MIT
├── README.md                   ← 本文件
└── README-en.md                ← 英文版
```

---

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|---------|
| **v1.7.0** | 2026-11-22 | 四层思考注入：Phase 1 三层必过追问与定义卡 / 证据台账 / 优先级判定；Phase 2 路径与规律对齐；Phase 7 四层审计；外部技能改为可选兜底；新增 four-layer-inquiry 技能 |
| **v1.6.0** | 2026-06-18 | 吸收 pm-skills：红队攻击、pre-mortem 分级、JTBD 价值主张、产品战略画布 |
| **v1.5.1** | 2026-06-11 | 小型前端 / 简单 CRUD 跳过场景；若干反模式补丁 |
| **v1.5.0** | 2026-06-05 | 联动技能调整 |
| **v1.4.0** | 2026-06-05 | 吸收 execplan 9 项：可观测验收、Spike、活文档、幂等、决策日志、成果回顾、接口规格 |
| **v1.1.1** | 2026-05-29 | 名称修正 `anwser`→`answer`；README 重构 |
| **v1.1.0** | 2026-05-29 | 100+ 触发词；6 领域；3 级置信度；错误处理；中断恢复 |
| **v1.0.0** | 2026-05-29 | 初始发布：7 阶段 + 飞书 Wiki 归档 |

> v1.2 / v1.3 的变更记录缺失（tag 存在、CHANGELOG 无条目），待补。

详见 [CHANGELOG.md](CHANGELOG.md)

---

## 许可

MIT License © 2026 杨瑒（月夜）

---

<sub>answer — 你不是在寻找答案。你是在寻找一种更接近 AI 原生思考的答案路径。</sub>
