# lark-cli v2 API 速查

> 本文件记录 answer 工作流中最常用的 lark-cli 命令。API v1 已废弃，所有操作使用 `--api-version v2`。

## 创建 Wiki 文档

```bash
lark-cli wiki +node-create \
  --space-id SPACE_ID \
  --parent-node-token PARENT_NODE_TOKEN \
  --title '文档标题' \
  --obj-type docx \
  --node-type origin \
  --as bot
```
- `space_id` 从父节点获取：`lark-cli api GET '/open-apis/wiki/v2/spaces/get_node' --params '{"token":"PARENT_TOKEN"}'`
- 返回 `obj_token`（用于写入内容）和 `url`

## 写入文档内容（覆盖）

```bash
cd /tmp  # ⚠️ 必须先 cd 到文件所在目录，--content @file 只接受相对路径
lark-cli docs +update \
  --api-version v2 \
  --doc OBJ_TOKEN \
  --command overwrite \
  --doc-format markdown \
  --content '@filename.md' \
  --as bot
```
- `--content @file` 路径必须是**相对路径**（相对于当前工作目录），不支持绝对路径如 `/tmp/xxx`
- 写入后立即 `docs +fetch` 验证 `revision_id > 1` 且内容存在

## 验证写入

```bash
lark-cli docs +fetch --api-version v2 --doc OBJ_TOKEN --as bot
```
- 检查 `data.document.revision_id` > 1 且有文本内容

## 删除 Wiki 节点

```bash
lark-cli wiki +node-delete \
  --node-token NODE_TOKEN \
  --obj-type wiki \
  --yes \
  --as bot
```
- ⚠️ `--obj-type` 必须是 `wiki`（Wiki 节点），不是 `docx`（底层文档）
- `--yes` 跳过确认提示
- `--include-children`（默认 true）级联删除子节点

## 获取 Wiki 节点信息

```bash
lark-cli api GET '/open-apis/wiki/v2/spaces/get_node' \
  --params '{"token":"NODE_TOKEN"}'
```
- 返回 `space_id`、`obj_token`、`obj_type`、`parent_node_token` 等

## 常见错误速查

| 错误码 | 原因 | 修复 |
|--------|------|------|
| 99992402 field validation failed | 请求体缺少必填字段（如 `node_type: "origin"`） | 检查 `--node-type origin` |
| 99991663 Invalid access token | token 过期 | 重新获取 tenant_access_token |
| 131005 not found | `--obj-type` 错误（如 wiki 节点用了 docx） | 改 `--obj-type wiki` |
| --file must be a relative path | `@/tmp/file.md` 用了绝对路径 | `cd` 到文件目录后用 `@file.md` |
