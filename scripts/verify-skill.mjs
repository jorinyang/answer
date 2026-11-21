#!/usr/bin/env node
/**
 * answer 仓库自检脚本。
 *
 * 校验项：
 *  1. 每个 SKILL.md 的 frontmatter：name 合规（kebab-case）、description 存在且单行、version 存在
 *  2. answer 主文件提到的 references/*.md 路径真实存在
 *  3. Phase 7 的 #### 7.x 小节号不重复
 *  4. 非主目录 SKILL.md 的版本与主文件不一致时给出提示（不算失败）
 *
 * 用法：node scripts/verify-skill.mjs
 * 退出码：0 全部通过；1 有失败项
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const results = [];

const ok = (msg) => results.push({ level: "ok", msg });
const fail = (msg) => results.push({ level: "fail", msg });
const warn = (msg) => results.push({ level: "warn", msg });

function parseFrontmatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) {
    fail(`${file}: 缺少 YAML frontmatter`);
    return null;
  }
  const raw = m[1];
  const data = {};
  const lines = raw.split(/\r?\n/);
  for (const line of lines) {
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!kv) continue;
    const [, key, value] = kv;
    if (key in data) continue;
    data[key] = value.trim().replace(/^["']|["']$/g, "");
  }
  return { data, raw };
}

function collectSkillFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      if (name === "node_modules" || name === ".git") continue;
      const p = join(d, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (name === "SKILL.md") out.push(p);
    }
  };
  walk(dir);
  return out.sort();
}

function rel(p) {
  return p.slice(ROOT.length + 1);
}

const skillFiles = collectSkillFiles(ROOT);
if (skillFiles.length === 0) fail("仓库里没有找到任何 SKILL.md");

const versions = new Map();

for (const file of skillFiles) {
  const name = rel(file);
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text, name);
  if (!fm) continue;

  const { data, raw } = fm;
  if (!data.name) fail(`${name}: frontmatter 缺 name`);
  else if (!NAME_RE.test(data.name)) fail(`${name}: name "${data.name}" 不是 kebab-case`);
  else ok(`${name}: name = ${data.name}`);

  const descLine = raw.split(/\r?\n/).find((l) => l.startsWith("description:"));
  const descValue = descLine ? descLine.slice("description:".length).trim() : "";
  if (!data.description) fail(`${name}: frontmatter 缺 description`);
  else if (/^[>|]/.test(descValue) || /\n[ \t]+\S/.test(data.description)) {
    fail(`${name}: description 必须写成单行（YAML 折行 > 或 | 会让部分技能目录解析器读不到）`);
  } else if (data.description.length < 40) {
    warn(`${name}: description 只有 ${data.description.length} 字，触发词可能不足`);
  } else ok(`${name}: description ${data.description.length} 字（单行）`);

  if (!data.version) warn(`${name}: frontmatter 缺 version`);
  else {
    versions.set(name, data.version);
    ok(`${name}: version = ${data.version}`);
  }
}

// 2) references 路径存在
const mainSkill = join(ROOT, "SKILL.md");
if (existsSync(mainSkill)) {
  const text = readFileSync(mainSkill, "utf8");
  const refs = new Set([...text.matchAll(/references\/[A-Za-z0-9._-]+\.md/g)].map((m) => m[0]));
  if (refs.size === 0) warn("SKILL.md 没有引用任何 references 文件");
  for (const r of [...refs].sort()) {
    if (existsSync(join(ROOT, r))) ok(`引用存在: ${r}`);
    else fail(`引用缺失: ${r}（SKILL.md 提到但文件不存在）`);
  }

  // 3) Phase 7 小节号
  const heads = [...text.matchAll(/^#### (7\.\d+[a-z]?)/gm)].map((m) => m[1]);
  const seen = new Map();
  for (const h of heads) seen.set(h, (seen.get(h) ?? 0) + 1);
  const dups = [...seen.entries()].filter(([, c]) => c > 1).map(([h]) => h);
  if (dups.length) fail(`Phase 7 小节号重复: ${dups.join(", ")}`);
  else if (heads.length === 0) warn("SKILL.md 里没有找到 #### 7.x 小节");
  else ok(`Phase 7 小节号唯一（${heads.length} 个）`);
}

// 4) 版本漂移提示（只比较同一技能的变体，独立技能不参与）
const rootVersion = versions.get("SKILL.md");
for (const [file, v] of versions) {
  if (file !== "SKILL.md" && file.startsWith("answer-standalone/") && rootVersion && v !== rootVersion) {
    warn(`版本漂移: ${file} = ${v}，主文件 = ${rootVersion}（独立版落后，需同步）`);
  }
}

// 输出
const icon = { ok: "✅", warn: "⚠️ ", fail: "❌" };
for (const r of results) console.log(`${icon[r.level]} ${r.msg}`);

const failures = results.filter((r) => r.level === "fail").length;
const warns = results.filter((r) => r.level === "warn").length;
console.log(`\n结果：${results.length - failures - warns} 通过 / ${warns} 提示 / ${failures} 失败`);
process.exit(failures === 0 ? 0 : 1);
