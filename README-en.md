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
| 1 | **Clarify** | Three mandatory probes (essence / evidence / priority) + decision tree | grill-me |
| 2 | **Brief** | Structured brief + path-and-mechanism alignment | design-brief |
| 3 | **Architect** | Structure, hierarchy, flows, critical paths | information-architecture |
| 4 | **Standards** | Naming conventions, reusable patterns, DoD | design-tokens |
| 5 | **Decompose** | Vertical slice decomposition — each task independently verifiable | brief-to-tasks |
| 6 | **Build** | Incremental construction with per-task validation | — |
| 7 | **Review** | Four-layer audit + brief-to-output audit + stress test | design-review + blue-team |

---

## Four-Layer Thinking: from "what is it" to "how to do it"

answer does not jump to task lists. Phase 1 settles three questions, Phase 2 aligns the path and the mechanism behind it, Phase 7 audits whether the output still matches all of it.

| Layer | Question | Where it lives |
|---|---|---|
| **Ontology** | What exactly is this? | Phase 1 — Essence (definition card) |
| **Epistemology** | How do I know that? | Phase 1 — Evidence ledger |
| **Axiology** | Why does it matter, and how much? | Phase 1 — Priority verdict + Phase 2 value proposition |
| **Methodology** | What is the path, and which mechanism does it rest on? | Phase 2 — Path and mechanism → Phase 3–6 |
| **Audit** | Does the output still match the four layers above? | Phase 7 — Four-layer audit |

Three gates cannot be skipped: **no conclusions on the three probes → no Brief; path not aligned → no Architect; four-layer audit failed → not a pass.**

> When you only need to think one thing through, with no deliverable, use the independent skill [`skills/four-layer-inquiry`](skills/four-layer-inquiry/SKILL.md) — it only asks, it writes no files.

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
2. **Three non-skippable gates** — the three probes, path-and-mechanism alignment, four-layer audit
3. **Skippable** — skip the Clarify decision tree if intent is clear; skip Architect for single deliverables. The three gates stay mandatory — skipping one means answer was not run
4. **Pausable** — say "stop" anytime; Wiki nodes preserve checkpoints
5. **Resumable** — auto-detects existing Wiki docs and resumes from breakpoint
6. **All output to Wiki** — no scattered local files

---

## Integration Ecosystem (optional, not a dependency)

answer runs all 7 phases without any external skill. The skills below enhance output when present; otherwise the built-in fallback is used:

| Output type | If the skill exists | If not (built-in fallback) |
|------------|--------------------|---------------------------|
| HTML pages / landing pages | `feishu-html` | Hand-write a single HTML file |
| Feishu online documents | `feishu-doc` | Built-in lark-cli one-step, or local .md |
| SVG architecture diagrams | — | Write SVG directly, render to PNG |
| Client trip landing pages | `trip-landing` | Hand-write from the page structure |
| Skill files | `skill_manage` | Hand-write SKILL.md per directory spec |
| Proposal logic review | `blue-team` | Built-in 3-step review + 7.2a red team |

---

## File Structure

```
answer/
├── SKILL.md                    ← Main skill file (7 phases)
├── references/
│   └── domain-mapping.md       ← 6 domains × 7 phases templates
├── skills/
│   └── four-layer-inquiry/     ← Four-layer inquiry (independent, not referenced by answer)
│       └── SKILL.md
├── scripts/
│   └── verify-skill.mjs        ← Pre-release check: frontmatter, reference paths, section numbering
├── CHANGELOG.md
├── LICENSE                     ← MIT
├── README.md                   ← Chinese version
└── README-en.md                ← This file
```

---

## Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.7.0** | 2026-11-22 | Four-layer thinking: three mandatory probes + definition card / evidence ledger / priority verdict in Phase 1; path-and-mechanism alignment in Phase 2; four-layer audit in Phase 7; external skills become optional fallbacks; new four-layer-inquiry skill |
| **v1.6.0** | 2026-06-18 | pm-skills absorption: red team, pre-mortem tiers, JTBD value proposition, product strategy canvas |
| **v1.5.1** | 2026-06-11 | Skip scenarios for small front-end / simple CRUD; anti-pattern patches |
| **v1.5.0** | 2026-06-05 | Related-skill adjustments |
| **v1.4.0** | 2026-06-05 | execplan absorption: observable outcomes, spike, living document, idempotence, decision log, retrospective, interface specs |
| **v1.1.1** | 2026-05-29 | Name fix `anwser`→`answer`; README restructuring |
| **v1.1.0** | 2026-05-29 | 100+ triggers; 6 domains; 3-tier confidence; error handling; resume support |
| **v1.0.0** | 2026-05-29 | Initial release: 7 phases + Feishu Wiki archiving |

See [CHANGELOG.md](CHANGELOG.md)

> CHANGELOG entries for v1.2 / v1.3 are missing (tags exist, no records) — to be backfilled.

---

## License

MIT License © 2026 杨瑒 (Moonnight)

---

<sub>answer — you're not looking for an answer. You're looking for a way to think that gets you closer to one.</sub>
