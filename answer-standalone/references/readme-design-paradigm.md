# README 设计范式

> 源自 designer-skills 的 README 结构模式，在此 session 中用于重构 answer 项目的 README。

## 核心范式：6 层结构

```
Hero + 定位  →  为什么需要  →  The Flow  →  核心原则  →  细节展开  →  收尾
```

### Layer 1: Hero + 定位

- 视觉锚点（emoji/badge/图片）+ 一句话定位
- badge 行：stars / skills数 / 触发词数 / 兼容平台
- 一句话：\"一套为 [受众] 设计的 [做什么]\" — 不要用功能列表语言

### Layer 2: 为什么需要

- **问题先行**，不是功能先行
- 描述现状的「结构性错误」（跳步/散点/过早收敛）
- 再用「解决思路」引出方案

### Layer 3: The Flow

- 可视化流程序列（ASCII 流程图 > 纯文字）
- 阶段表：阶段名 | 核心问题 | 方法论来源 | 产出
- 让人读完就能在脑中跑通整个流程

### Layer 4: 核心原则 (Key Principles)

4-5 条，每条：
- 一个动名词标题（\"问题优先\" \"上下文即基础设施\"）
- 一段解释为什么重要 + 在实践中如何体现
- 参考 designer-skills：Respect Existing Code / Mobile-First / Dark Mode by Default / You Don't Need to Name a Style / Your Work Persists

### Layer 5: 细节展开

- 领域适配 / 设计哲学列表（类似 designer-skills 的 Aesthetic Philosophies）
- 用表格展示差异性（领域 | 典型场景 | 关键差异）
- 集成生态（调用了哪些其他技能/工具）

### Layer 6: 收尾

- 安装/快速开始（一行命令）
- 安全声明
- 文件结构树
- 版本历史
- 致谢/Credits

## 反模式（禁止）

| 反模式 | 为什么错误 |
|-------|-----------|
| 用功能列表开头 | 读者不关心功能，关心「解决我什么问题」 |
| 没有可视化流程图 | 文字流程需要脑内编译，ASCII 图直接可跑 |
| 原则写成规则清单 | 原则需要有\"为什么\"的解释，否则不可操作 |
| 先写安装再写动机 | 读者需要先被说服\"为什么需要\"，再被告知\"怎么装\" |
| 把「重构 README」理解为「做网页」 | 用户说\"重构 GitHub README\"= 重写 markdown 文件，不是创建 HTML 页面 |

## 多语言策略

- 默认：中文 README.md
- 辅助：英文 README-en.md（结构一致，自然表达，非直译）
- badge 中的中文保持不变（领域数/触发词数等面向中文用户的指标）
