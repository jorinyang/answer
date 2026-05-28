<p align="center">
  <h1 align="center">answer</h1>
  <p align="center"><strong>AI Native'S Workflow(er)</strong></p>
  <p align="center">
    <a href="https://github.com/jorinyang/answer/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
    <a href="https://github.com/jorinyang/answer/releases"><img src="https://img.shields.io/github/v/release/jorinyang/answer" alt="Release"></a>
    <a href="#"><img src="https://img.shields.io/badge/domains-6-blue" alt="Domains"></a>
    <a href="#"><img src="https://img.shields.io/badge/triggers-100+-green" alt="Triggers"></a>
  </p>
</p>

---

> **answer = AI Native'S Workflow(er)**
>
> ```
> A  I     N  ative'  S     W  orkflow( ER )
> └─┘ └───┘ └──────┘ └──┘ └──────────┘└────┘
>  A    I       N       S        W        ER
> ```
>
> 每一个字母都在告诉你：这不是工具，这是**AI 原生的思考方式**。

---

## 这是什么

**answer** 是一个 7 阶段结构化工作流编排器。它把"从零开始构建任何东西"这件事，拆成 7 个必须按顺序执行的阶段——每一步都强制你停下来想清楚，再进行下一步。

> 内化了 [designer-skills](https://github.com/julianoczkowski/designer-skills) 的方法论（grill-me / design-brief / information-architecture / design-tokens / brief-to-tasks / design-review），适配到**任何**需要结构化思考的领域。

---

## 设计初衷

### 问题

从零开始构建任何东西——一个产品、一个技能、一份方案、一个流程、一份分析报告——最常见的失败模式不是"方向错了"，而是**一开始就没把问题想清楚**。

人类在启动复杂任务时犯三个错：

1. **跳步** — 直接动手，跳过澄清阶段
2. **散点思考** — 想到哪做到哪，缺乏结构化
3. **过早收敛** — 用第一个想到的方案替代所有可能

### 解决思路

answer 用 **阶段门禁（Phase Gate）** 解决：

```
Clarify → Brief → Architect → Standards → Decompose → Build → Review
  (想清楚)  (写下来)   (搭骨架)    (定规范)    (拆任务)   (做出来)  (检查)
```

每一步都是一个强制暂停——Phase N 未完成，不进 Phase N+1。每一步都有明确的产出物、模板和验收标准。

---

## 特性

<table>
<tr>
<td width="50%">

### 🧬 7 阶段编排

| 阶段 | 做什么 | 方法论 |
|------|--------|--------|
| 1. Clarify | 决策树遍历，追问到底 | grill-me |
| 2. Brief | 结构化简报 | design-brief |
| 3. Architect | 定义结构/层次/流程 | information-architecture |
| 4. Standards | 建立可复用规范 | design-tokens |
| 5. Decompose | 拆解为增量任务 | brief-to-tasks |
| 6. Build | 逐步构建交付物 | — |
| 7. Review | 对照简报逐项检查 | design-review + blue-team |

</td>
<td width="50%">

### 🎯 6 大领域适配

| 领域 | 适用场景 |
|------|---------|
| 🏢 新业务/产品 | 商业模式、MVP |
| 🛠️ 新技能 | Hermes 技能、CLI 工具 |
| 📋 新方案 | BP、提案、建议书 |
| 🔄 流程/SOP | 标准化流程、制度 |
| 🔍 分析/调研 | 竞品分析、市场调研 |
| 🎯 决策支持 | 方案对比、多选一 |

每个领域有完整的 7 阶段追问清单 → [`references/domain-mapping.md`](references/domain-mapping.md)

</td>
</tr>
</table>

### ⚡ 100+ 自动触发词

3 级置信度触发模型，覆盖 17 类业务场景：

| 级别 | 行为 | 示例 |
|------|------|------|
| Tier 1 | 100% 触发 | "answer" "AI原生工作流" |
| Tier 2 | 触发 + 告知 | "写BP" "设计流程" "做复盘" "运营方案" |
| Tier 3 | 按复杂度判断 | "帮我分析" "盘一下" "plan this" |

---

## 快速开始

```
# 完整 7 阶段流程
answer this: 我要做一个探洞小程序

# 精简 3 阶段（快速出方案）
answer quick: 暑期营销方案

# 只出结构化简报
answer brief: 贵州民宿市场调研

# 只审查已完成产出
answer review: gzzhike-summer-plan
```

---

## 7 阶段详解

<details>
<summary><b>Phase 1: Clarify — 决策树遍历</b></summary>

在动手之前，遍历决策树的每一个分支。逐追问，每个追问提供推荐答案。

**示例追问**：
- 核心用户是谁？JTBD？
- 什么算成功？（量化）
- 最不确定的假设是什么？
- 明确不做什么？

→ 产出：`CLARIFY_{answername}.md`
</details>

<details>
<summary><b>Phase 2: Brief — 结构化简报</b></summary>

将澄清结果结构化，产出可被后续阶段引用的单一真源。

核心原则 ≤ 3 条，用"体验/流程"语言描述，不用"功能"语言。

→ 产出：`BRIEF_{answername}.md`
</details>

<details>
<summary><b>Phase 3: Architect — 结构设计</b></summary>

定义产出物的骨架：模块划分、层级关系、信息流、关键路径。

→ 产出：`ARCHITECTURE_{answername}.md`
</details>

<details>
<summary><b>Phase 4: Standards — 标准规范</b></summary>

定义可复用的标准、模式、命名约定、质量基线（DoD）。

→ 产出：`STANDARDS_{answername}.md`
</details>

<details>
<summary><b>Phase 5: Decompose — 任务拆解</b></summary>

垂直切片式拆解。每个任务独立可构建、独立可验证。

**规则**：不允许"创建项目结构"类纯搭建任务。

→ 产出：`TASKS_{answername}.md`
</details>

<details>
<summary><b>Phase 6: Build — 逐步构建</b></summary>

按任务清单逐个完成。每完成一个立即验证（对照 Standards 的 DoD）。

调用其他技能完成具体交付：
- HTML 页面 → `feishu-html`
- 飞书文档 → `feishu-doc`
- 架构图 → `architecture-diagram`
- 创建技能 → `skill_manage`

→ 产出：`BUILD_LOG_{answername}.md`
</details>

<details>
<summary><b>Phase 7: Review — 质量审查</b></summary>

对照 Brief 逐项检查 + blue-team 压力测试 + HTML 页面 Playwright 验证。

→ 产出：`REVIEW_{answername}.md`（含评分）
</details>

---

## 编排规则

1. **每阶段确认制** — 不确认不进下一阶段
2. **可跳过** — 已有清晰思路可跳 Clarify，单一产出可跳 Architect
3. **可暂停** — 说"够了"即停止，Wiki 节点保留检查点
4. **中断恢复** — 返回时自动检测 Wiki 已有文档，从断点继续
5. **产出全进 Wiki** — 不散落本地文件

---

## 集成生态

answer 作为编排器，在 Build 阶段调用 Hermes 技能生态：

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
├── SKILL.md                        ← 主技能文件
├── references/
│   └── domain-mapping.md           ← 6 领域 × 7 阶段完整模板
├── CHANGELOG.md                    ← 版本变更记录
├── LICENSE                         ← MIT
└── README.md                       ← 本文件
```

---

## 版本历史

| 版本 | 日期 | 关键变更 |
|------|------|---------|
| **v1.1.1** | 2026-05-29 | 名称修正 `anwser`→`answer`；README 重构 |
| **v1.1.0** | 2026-05-29 | 100+ 触发词；6 领域；3 级置信度；错误处理；中断恢复 |
| **v1.0.0** | 2026-05-29 | 初始发布：7 阶段 + 3 领域 + 飞书 Wiki |

详见 [CHANGELOG.md](CHANGELOG.md)

---

## 许可

MIT License © 2026 杨瑒（月夜）

---

<p align="center">
  <sub>answer — 你不是在问问题，你是在寻找结构化的答案。<br>而这个答案，来自 AI 原生的思考方式。</sub>
</p>
