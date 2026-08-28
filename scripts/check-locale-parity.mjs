import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

function listMarkdown(root, excludedDirectory) {
  const files = []
  if (!fs.existsSync(root)) return files

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name === ".vitepress" || entry.name === "public" || entry.name === excludedDirectory) continue
    const fullPath = path.join(root, entry.name)
    if (entry.isDirectory()) files.push(...listMarkdown(fullPath))
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath)
  }

  return files.sort((left, right) => left.localeCompare(right))
}

function headingLevels(markdown) {
  return [...markdown.matchAll(/^(#{1,6})\s+/gm)].map((match) => match[1].length)
}

function codeBlocks(markdown) {
  return [...markdown.matchAll(/^```([^\r\n]*)\r?\n([\s\S]*?)^```[ \t]*$/gm)].map((match) => ({
    language: match[1].trim(),
    body: match[2].replaceAll("\r\n", "\n"),
  }))
}

function normalizePublicUrl(url) {
  return url
    .replace("https://sajoluo.github.io/reliaforge-frontend/#/zh/", "https://sajoluo.github.io/reliaforge-frontend/")
    .replace("https://sajoluo.github.io/reliaforge/zh/", "https://sajoluo.github.io/reliaforge/")
}

function publicLinks(markdown) {
  return [...markdown.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map((match) => normalizePublicUrl(match[1]))
}

function homeActionLinks(markdown) {
  return [...markdown.matchAll(/^\s+link:\s+(.+)$/gm)].map((match) => normalizePublicUrl(
    match[1].trim().replace(/^\/zh\//, "/"),
  ))
}

function homePreviewLinks(markdown) {
  return [...markdown.matchAll(/^\s+href:\s+(.+)$/gm)].map((match) => normalizePublicUrl(
    match[1].trim().replace(/^\/zh\//, "/"),
  ))
}

function frontmatterStructure(markdown) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1]
  if (!frontmatter) return []

  return frontmatter.split(/\r?\n/).flatMap((line) => {
    if (line.trim().length === 0) return []
    const indentation = line.match(/^\s*/)?.[0].length ?? 0
    const trimmed = line.trim()
    const listItem = trimmed.startsWith("- ")
    const property = (listItem ? trimmed.slice(2) : trimmed).split(":", 1)[0]
    return [`${indentation}:${listItem ? "-" : ""}${property}`]
  })
}

function arraysEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right)
}

export function checkLocaleParity(sourceRoot) {
  const resolvedRoot = path.resolve(sourceRoot)
  const chineseRoot = path.join(resolvedRoot, "zh")
  const englishFiles = listMarkdown(resolvedRoot, "zh")
  const chineseFiles = listMarkdown(chineseRoot)
  const englishPaths = englishFiles.map((file) => path.relative(resolvedRoot, file).replaceAll("\\", "/"))
  const chinesePaths = chineseFiles.map((file) => path.relative(chineseRoot, file).replaceAll("\\", "/"))
  const findings = []

  for (const relativePath of englishPaths.filter((file) => !chinesePaths.includes(file))) {
    findings.push({ rule: "missing-chinese-page", path: relativePath })
  }
  for (const relativePath of chinesePaths.filter((file) => !englishPaths.includes(file))) {
    findings.push({ rule: "orphan-chinese-page", path: relativePath })
  }

  for (const relativePath of englishPaths.filter((file) => chinesePaths.includes(file))) {
    const english = fs.readFileSync(path.join(resolvedRoot, relativePath), "utf8")
    const chinese = fs.readFileSync(path.join(chineseRoot, relativePath), "utf8")
    if (!arraysEqual(headingLevels(english), headingLevels(chinese))) {
      findings.push({ rule: "heading-structure", path: relativePath })
    }
    if (!arraysEqual(codeBlocks(english), codeBlocks(chinese))) {
      findings.push({ rule: "code-example", path: relativePath })
    }
    if (!arraysEqual(publicLinks(english), publicLinks(chinese))) {
      findings.push({ rule: "public-link", path: relativePath })
    }
    if (relativePath === "index.md") {
      if (!arraysEqual(homeActionLinks(english), homeActionLinks(chinese))) {
        findings.push({ rule: "home-action", path: relativePath })
      }
      if (!arraysEqual(frontmatterStructure(english), frontmatterStructure(chinese))) {
        findings.push({ rule: "home-frontmatter-structure", path: relativePath })
      }
      if (!arraysEqual(homePreviewLinks(english), homePreviewLinks(chinese))) {
        findings.push({ rule: "home-preview", path: relativePath })
      }
    }
  }

  return findings
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : ""
if (invokedPath === fileURLToPath(import.meta.url)) {
  const findings = checkLocaleParity(process.argv[2] || "docs")
  for (const finding of findings) process.stderr.write(`${finding.rule}\t${finding.path}\n`)
  process.exit(findings.length === 0 ? 0 : 1)
}
