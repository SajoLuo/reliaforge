import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { checkLocaleParity } from "./check-locale-parity.mjs"

function makeDocs() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-i18n-"))
  fs.mkdirSync(path.join(root, "guide"), { recursive: true })
  fs.mkdirSync(path.join(root, "zh", "guide"), { recursive: true })
  return root
}

test("accepts complete locale trees with translated prose and identical technical structure", () => {
  const root = makeDocs()
  const english = "# Guide\n\n## Run\n\n```bash\nnpm run build\n```\n\n[Source](https://github.com/SajoLuo/reliaforge)\n"
  const chinese = "# 指南\n\n## 运行\n\n```bash\nnpm run build\n```\n\n[源码](https://github.com/SajoLuo/reliaforge)\n"
  fs.writeFileSync(path.join(root, "guide", "start.md"), english)
  fs.writeFileSync(path.join(root, "zh", "guide", "start.md"), chinese)

  assert.deepEqual(checkLocaleParity(root), [])
})

test("reports missing and orphan locale routes", () => {
  const root = makeDocs()
  fs.writeFileSync(path.join(root, "guide", "english-only.md"), "# English\n")
  fs.writeFileSync(path.join(root, "zh", "guide", "chinese-only.md"), "# 中文\n")

  assert.deepEqual(checkLocaleParity(root), [
    { rule: "missing-chinese-page", path: "guide/english-only.md" },
    { rule: "orphan-chinese-page", path: "guide/chinese-only.md" },
  ])
})

test("reports heading and code-example drift", () => {
  const root = makeDocs()
  fs.writeFileSync(path.join(root, "guide", "start.md"), "# Guide\n\n## Run\n\n```bash\nnpm run build\n```\n")
  fs.writeFileSync(path.join(root, "zh", "guide", "start.md"), "# 指南\n\n```bash\nnpm run dev\n```\n")

  assert.deepEqual(checkLocaleParity(root), [
    { rule: "heading-structure", path: "guide/start.md" },
    { rule: "code-example", path: "guide/start.md" },
  ])
})
