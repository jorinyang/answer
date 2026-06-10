# Answer Skill — Distribution & Packaging

## Packaging for Other Hermes Instances

Create a portable tarball containing only the files Hermes needs:

```bash
cd /path/to/answer-repo
tar -czf answer-skill-vX.Y.Z.tar.gz \
  --exclude='.git' \
  --exclude='CHANGELOG.md' \
  --exclude='LICENSE' \
  --exclude='README.md' \
  --exclude='README-en.md' \
  SKILL.md references/
```

### What Hermes Needs

| File | Required | Purpose |
|------|:--------:|---------|
| `SKILL.md` | ✅ | Hermes reads this at startup |
| `references/` | ✅ | Supporting docs referenced by SKILL.md |
| `README.md` | ❌ | Human-only, ignored by Hermes |
| `CHANGELOG.md` | ❌ | Human-only |
| `LICENSE` | ❌ | Human-only |
| `.git/` | ❌ | Exclude from package |

### Install on Target Hermes

```bash
# Option A: Extract tarball
mkdir -p ~/.hermes/skills/productivity/answer
tar -xzf answer-skill-v1.3.0.tar.gz -C ~/.hermes/skills/productivity/answer/

# Option B: Git clone (preferred when repo is public)
cd ~/.hermes/skills/productivity/
git clone https://github.com/jorinyang/answer.git answer
```

Restart Hermes after install.

## Git Push with GitHub Token — Pitfalls

### Hermes Credential Stripping

Hermes tools (`terminal`, `execute_code`) apply credential stripping that matches `ghp_*` patterns. This means `git push` with HTTPS token auth will fail through Hermes tools — the token is replaced with `***` before reaching git.

The `write_file` / `execute_code` approach (write token to file → read back → construct URL) works around the terminal-level stripping but may still fail at the Hermes sandbox level (the write itself is redacted).

**Workaround**: Push manually in a real terminal, or use SSH (`git@github.com:...`).

### Proxy Interference

If `https_proxy` or `HTTP_PROXY` environment variables are set (e.g., from an earlier `export` in the same shell session), they persist and can block GitHub connections. In TUN-mode proxy setups, the proxy env var should be **unset** — the TUN interface handles routing transparently:

```bash
# Check for stale proxy vars
env | grep -i proxy

# Clear them
unset https_proxy http_proxy HTTPS_PROXY HTTP_PROXY
```

Symptom: `curl: (7) Failed to connect to 127.0.0.1 port 7890` when no proxy is actually listening there.

### Token Rejection: "Password authentication is not supported"

GitHub returns this when the token:
- Lacks `repo` scope (classic tokens need this for git operations)
- Is a fine-grained token not authorized for the target repository
- Is expired or revoked

Verify token before attempting push:
```bash
curl -sH "Authorization: Bearer YOUR_TOKEN" https://api.github.com/user | grep login
```
Expected: `"login": "your-username"`. If 401 or empty, token is invalid.
