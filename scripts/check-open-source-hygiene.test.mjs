import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { scanTree } from "./check-open-source-hygiene.mjs"

test("scanner reports sensitive content without returning values", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-site-scan-"))
  const brand = ["op", "po"].join("")
  const privateAddress = ["192", "168", "8", "9"].join(".")
  const secretKey = ["api", "key"].join("_")
  fs.writeFileSync(path.join(root, "sample.txt"), `${brand}\n${privateAddress}\n${secretKey} = "not-a-placeholder"\n`)

  const findings = scanTree(root)
  assert.deepEqual(findings.map((item) => item.rule).sort(), ["forbidden-brand", "private-address", "secret-literal"])
  assert.equal(JSON.stringify(findings).includes("not-a-placeholder"), false)
})

test("scanner accepts public examples", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-site-scan-"))
  fs.writeFileSync(path.join(root, "README.md"), "Visit https://example.com or contact contributor@example.com.\n")
  assert.deepEqual(scanTree(root), [])
})

test("scanner rejects binary and non-example environment files", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-site-scan-"))
  fs.writeFileSync(path.join(root, ".env.production"), "SITE_URL=https://example.com\n")
  fs.writeFileSync(path.join(root, "image.png"), Buffer.from([0x89, 0x50, 0x00, 0x47]))

  assert.deepEqual(scanTree(root), [
    { rule: "risk-path", path: ".env.production", line: 0 },
    { rule: "binary-file", path: "image.png", line: 0 },
  ])
})

test("scanner allows only the canonical public image assets", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-site-scan-"))
  fs.mkdirSync(path.join(root, "docs", "public"), { recursive: true })
  fs.writeFileSync(path.join(root, "docs", "public", "mark.png"), Buffer.from([0x89, 0x50, 0x00, 0x47]))
  fs.writeFileSync(path.join(root, "docs", "public", "console-preview.png"), Buffer.from([0x89, 0x50, 0x00, 0x47]))
  fs.writeFileSync(path.join(root, "docs", "public", "other.png"), Buffer.from([0x89, 0x50, 0x00, 0x47]))

  assert.deepEqual(scanTree(root), [
    { rule: "binary-file", path: "docs/public/other.png", line: 0 },
  ])
})

test("scanner ignores generated root VitePress cache but scans documentation sources", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reliaforge-site-scan-"))
  const brand = ["op", "po"].join("")
  fs.mkdirSync(path.join(root, ".vitepress", "cache"), { recursive: true })
  fs.writeFileSync(path.join(root, ".vitepress", "cache", "generated.js"), brand)
  fs.mkdirSync(path.join(root, "docs", ".vitepress"), { recursive: true })
  fs.writeFileSync(path.join(root, "docs", ".vitepress", "config.mts"), brand)

  assert.deepEqual(scanTree(root), [
    { rule: "forbidden-brand", path: "docs/.vitepress/config.mts", line: 1 },
  ])
})
