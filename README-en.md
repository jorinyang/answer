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
> The name is the method. This isn't a tool — it's **how AI should think** when building from scratch.

---

## What

**answer** is a 7-phase structured workflow orchestrator. When you need to build anything from zero — a product, a skill, a proposal, a process, an analysis — it forces you through gated phases where **each step must be complete before the next begins**.

It internalizes the design thinking methodology from [designer-skills](https://github.com/julianoczkowski/designer-skills) (grill-me / design-brief / information-architecture / design-tokens / brief-to-tasks / design-review) and adapts it for general-purpose structured thinking.

---

## Why

When humans start complex tasks, we fail in three predictable ways:

1. **Skipping** — jumping straight to execution, bypassing clarification
2. **Scattered thinking** — working ad-hoc without structure
3. **Premature convergence** — treating the first idea as the only idea

answer solves this with **Phase Gates**:

```
Clarify  →  Brief  →  Architect  →  Standards  →  Decompose  →  Build  →  Review
(think)     (write)    (structure)    (normalize)    (slice)       (build)    (audit)
```

Each phase is a hard pause — Phase N incomplete, Phase N+1 locked. Every phase has explicit deliverables, templates, and acceptance criteria.

---

## 7 Phases

| # | Phase | What happens | Method |
|---|-------|-------------|--------|
| 1 | **Clarify** | Decision tree traversal — leave no blind spot | grill-me |
| 2 | **Brief** | Structured brief — single source of truth | design-brief |
| 3 | **Architect** | Structure, hierarchy, flows, critical paths | information-architecture |
| 4 | **Standards** | Naming conventions, reusable patterns, DoD | design-tokens |
| 5 | **Decompose** | Vertical slice decomposition — each task independently verifiable | brief-to-tasks |
| 6 | **Build** | Incremental construction with per-task validation | — |
| 7 | **Review** | Brief-to-output audit + adversarial stress test | design-review + blue-team |

---

## 6 Domains

| Domain | When you need to |
|--------|-----------------|
| 🏢 Product & Business | Build a product, feature, or system from scratch |
| 🛠️ Skills & Tools | Create a Hermes skill, CLI tool, or automation |
| 📋 Proposals & Plans | Write a business plan, proposal, pitch deck |
| 🔄 Processes & SOPs | Design standard workflows, policies, playbooks |
| 🔍 Analysis & Research | Competitive analysis, market research, post-mortems |
| 🎯 Decision Support | Evaluate options, feasibility assessment |

Each domain has a complete 7-phase question checklist → [`references/domain-mapping.md`](references/domain-mapping.md)

---

## Quick Start

```bash
# Full 7-phase workflow
answer this: I want to build a cave-exploration mini-app

# Fast track (3 phases)
answer quick: Summer marketing plan

# Brief only
answer brief: Market research on rural tourism in Guizhou

# Review existing output
answer review: gzzhike-summer-plan
```

---

## 100+ Auto-Triggers

You don't need to say "answer." These trigger automatically:

| You say | Triggers |
|---------|----------|
| "write a business plan" "do a post-mortem" "design a workflow" "build a marketing strategy" "create a project proposal" "map out a go-to-market plan" | Full 7-phase |
| "help me think through" "structure this" "plan this" "think this from scratch" "how should I approach" "I don't know where to start" | Context-dependent |
| "write an SOP" "competitive analysis" "feasibility study" "design a system" "audit this proposal" "market research" | Matched to domain template |

See [`SKILL.md`](SKILL.md) for the complete 100+ trigger word list across 17 categories.

---

## Phase Details

<details>
<summary><b>Phase 1: Clarify — Decision Tree Traversal</b></summary>

Before you build, traverse every branch of the decision tree. Each question comes with a recommended answer.

Who is the core user? What does success look like (quantified)? What's the shakiest assumption? What are you explicitly *not* doing?

→ Output: `CLARIFY_{answername}.md`
</details>

<details>
<summary><b>Phase 2: Brief — Structured Brief</b></summary>

Crystallize clarification results into a single source of truth for downstream phases.

Max 3 core principles. Describe in terms of experience/flows, not features.

→ Output: `BRIEF_{answername}.md`
</details>

<details>
<summary><b>Phase 3: Architect — Structure Design</b></summary>

Define the skeleton: module breakdown, hierarchy, relationships, information flows, critical paths.

→ Output: `ARCHITECTURE_{answername}.md`
</details>

<details>
<summary><b>Phase 4: Standards — Conventions & Quality</b></summary>

Identify reusable patterns: naming conventions, format specs, quality baselines (Definition of Done).

→ Output: `STANDARDS_{answername}.md`
</details>

<details>
<summary><b>Phase 5: Decompose — Task Breakdown</b></summary>

Vertical slice decomposition. Each task is independently buildable and verifiable. Pure scaffolding tasks ("create project structure") are forbidden.

→ Output: `TASKS_{answername}.md`
</details>

<details>
<summary><b>Phase 6: Build — Incremental Construction</b></summary>

Execute tasks in order. Validate each against the Standards DoD before marking complete.

Deliverables leverage the Hermes skill ecosystem: HTML pages → `feishu-html`, docs → `feishu-doc`, diagrams → `architecture-diagram`, skills → `skill_manage`.

→ Output: `BUILD_LOG_{answername}.md`
</details>

<details>
<summary><b>Phase 7: Review — Quality Audit</b></summary>

Check every output against the Brief: completeness, consistency, standards compliance, dependency closure, audience fit. Run adversarial stress tests via `blue-team`. HTML outputs get Playwright visual verification.

→ Output: `REVIEW_{answername}.md` (with score)
</details>

---

## Orchestration Rules

1. **Confirmation-gated** — no auto-advancing between phases
2. **Skippable** — skip Clarify if intent is clear; skip Architect for single deliverables
3. **Pausable** — say "stop" anytime; Wiki nodes preserve checkpoints
4. **Resumable** — auto-detects existing Wiki docs and resumes from breakpoint
5. **All output to Wiki** — no scattered local files

---

## Integration Ecosystem

answer delegates Build-phase delivery to the Hermes skill ecosystem:

| Output type | Delegated to |
|------------|-------------|
| HTML pages / landing pages | `feishu-html` |
| Feishu online documents | `feishu-doc` |
| SVG architecture diagrams | `architecture-diagram` |
| Client trip landing pages | `trip-landing` |
| Hermes skill files | `skill_manage` |
| Proposal logic review | `blue-team` |

---

## File Structure

```
answer/
├── SKILL.md                    ← Main skill file
├── references/
│   └── domain-mapping.md       ← 6 domains × 7 phases templates
├── CHANGELOG.md
├── LICENSE                     ← MIT
├── README.md                   ← Chinese version
└── README-en.md                ← This file
```

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.1.1** | 2026-05-29 | Name fix `anwser`→`answer`; README restructuring |
| **v1.1.0** | 2026-05-29 | 100+ triggers; 6 domains; 3-tier confidence; error handling; resume support |
| **v1.0.0** | 2026-05-29 | Initial release: 7 phases + Feishu Wiki archiving |

See [CHANGELOG.md](CHANGELOG.md)

---

## License

MIT License © 2026 杨瑒 (Moonnight)

---

<sub>answer — you're not looking for an answer. You're looking for a way to think that gets you closer to one.</sub>
