# Changelog

All notable changes to the answer skill.

---

## [v1.4.0] — 2026-06-05

### 🧠 execplan 方法论吸收 — 9 项能力增强

借鉴 [tiann/execplan-skill](https://github.com/tiann/execplan-skill) 的 ExecPlan 方法论，在 0 冲突前提下吸收以下核心能力：

| # | 增强项 | 吸收位置 | execplan 概念 |
|---|--------|---------|-------------|
| 1 | **Observable Outcomes** | Phase 2 Brief 成功标准 | 验收标准必须是人类可感知的行为，采用「条件→操作→预期结果」三元格式 |
| 2 | **Prototyping Milestones** | Phase 5 Decompose | 新增 Spike（可行性验证）任务层，先验证关键假设再投入完整构建 |
| 3 | **Self-Contained CHECKPOINT** | Phase 5 CHECKPOINT | 自包含检查：随机抽取任务，假设自己是新人能否独立完成 |
| 4 | **Living Document — BUILD_LOG** | Phase 6 Build | 每 Task 增加时间戳+耗时+💡意外发现+🔄决策记录 |
| 5 | **Idempotence** | Phase 6 Build | 新增幂等性要求——步骤可安全重复执行不产生副作用 |
| 6 | **Decision Log** | Phase 3+6 全局 | 新增「决策日志」章节，贯穿 Phase 3 Architect 和 Phase 6 Build |
| 7 | **Outcomes & Retrospective** | Phase 7 Review | 新增「成果与回顾」章节：对照 Brief 成功标准逐条验证+经验教训+可复用资产 |
| 8 | **Interface Specs** | Phase 3 Architect（可选） | 技术类项目新增模块接口规格表 |
| 9 | **Living Discipline** | 编排规则 | 工作流记录文档声明为活文档，进度/决策/发现持续更新 |

### 📦 仓库结构更新

- **新增 `answer-standalone/` 目录**：独立版 answer skill（纯本地 markdown 输出，零外部依赖）
  - `SKILL.md` — 同步 answer v1.4.0 全部增强
  - `references/domain-mapping.md` — 6 领域 × 7 阶段完整追问清单
  - `references/readme-design-paradigm.md` — README 设计范式

### 🔗 同步技能

与 answer v1.4.0 同步增强的技能：`writing-plans`（4 活文档章节+3 质量标准+Prose-First 可选风格）、`plan`、`spike`、`systematic-debugging`、`hermes-agent-skill-authoring`、`feishu-doc`、`trip-landing`、`travel-itinerary`

---

## [v1.1.1] — 2026-05-29

### 🔧 名称修正

- **仓库重命名**：`jorinyang/anwser` → `jorinyang/answer`
- **技能名称修正**：全局替换 `anwser` → `answer`
- **名字解读更新**：`answer = AI Native'S Workflow(er)`
  - `A`I `N`ative'`S` `W`orkflow(`ER`) = ANSWER
  - "AI 原生的 工作流者"——赋予 AI 结构化思考的能力

### 📝 README 重构

- 参考热门开源项目结构重新排版
- 增加 badges、特性列表、快速开始、集成生态
- 保留「设计初衷」和「解决思路」核心叙事

---

## [v1.1] — 2026-05-29

### 触发机制升级

- 触发词从 10 个扩充至 100+ 个，覆盖 17 类业务场景
- 3 级置信度触发模型
- 排他规则：单事实查询、简单操作、重复任务不误触发

### 领域扩展 (3→6)

| 领域 | 状态 |
|------|------|
| 新业务/产品 | 扩展 |
| 新技能 | 不变 |
| 新方案 | 不变 |
| 流程/SOP | 新增 |
| 分析/调研 | 新增 |
| 决策支持 | 新增 |

### 健壮性增强

- 错误处理：Wiki API 失败降级本地、lark-cli 失败 curl 回退
- 中断恢复：Wiki 节点检查 → 断点续传
- 技能互动规则表

---

## [v1.0] — 2026-05-29

### Initial Release

- 7 阶段编排器
- 3 领域适配
- 飞书 Wiki 产出
- 快速启动模式
