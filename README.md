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
| 1 | **Clarify** | 决策树遍历，追问到没有盲区 | grill-me |
| 2 | **Brief** | 结构化简报，产出单一真源 | design-brief |
| 3 | **Architect** | 结构/层次/流程/关键路径 | information-architecture |
| 4 | **Standards** | 命名约定、复用模式、质量基线 | design-tokens |
| 5 | **Decompose** | 垂直切片拆解，独立可验证 | brief-to-tasks |
| 6 | **Build** | 按任务逐步构建，每步验证 | — |
| 7 | **Review** | 对照简报逐项审查 + 压力测试 | design-review + blue-team |

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
2. **可跳过** — 已有清晰思路可跳 Clarify；单一产出可跳 Architect
3. **可暂停** — 说"够了"即停止，Wiki 节点保留检查点，随时恢复
4. **中断恢复** — 返回时自动检测 Wiki 已有文档，从断点继续
5. **产出全进 Wiki** — 不散落本地文件

---

## 集成生态

answer 在 Build 阶段调用 Hermes 技能生态完成具体交付：

| 产出类型 | 调用的技能 |
|---------|-----------|
| HTML 页面 / 展示页 | `feishu-html` |
| 飞书在线文档 | `feishu-doc` |
| SVG 架构图 | `architecture-diagram` |
| 客户行程落地页 | `trip-landing` |
| Hermes 技能文件 | `skill_manage` |
| 方案逻辑审查 | `blue-team` |

---

## 文件结构

```
answer/
├── SKILL.md                    ← 主技能文件
├── references/
│   └── domain-mapping.md       ← 6 领域 × 7 阶段完整模板
├── CHANGELOG.md
├── LICENSE                     ← MIT
├── README.md                   ← 本文件
└── README-en.md                ← 英文版
```

---

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|---------|
| **v1.1.1** | 2026-05-29 | 名称修正 `anwser`→`answer`；README 重构 |
| **v1.1.0** | 2026-05-29 | 100+ 触发词；6 领域；3 级置信度；错误处理；中断恢复 |
| **v1.0.0** | 2026-05-29 | 初始发布：7 阶段 + 飞书 Wiki 归档 |

详见 [CHANGELOG.md](CHANGELOG.md)

---

## 许可

MIT License © 2026 杨瑒（月夜）

---

<sub>answer — 你不是在寻找答案。你是在寻找一种更接近 AI 原生思考的答案路径。</sub>
