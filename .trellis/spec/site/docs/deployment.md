# Deployment

## Scenario: bilingual GitHub Pages release

### 1. Scope / Trigger

Apply this contract when changing dependencies, locale routing, the VitePress base, generated
assets, browser tests, or `.github/workflows/pages.yml`. The site is a static Pages artifact with
English at the root and Simplified Chinese under `/zh/`.

### 2. Signatures

```text
npm ci --ignore-scripts
npm run check:i18n
npm run build
npm run test:e2e
npm run check:hygiene
```

The public base is `/reliaforge/`; generated output is `docs/.vitepress/dist`.

### 3. Contracts

- `package-lock.json` pins the toolchain. CI verifies Node.js 22 and 24.
- `docs/.vitepress/config.mts` owns the base, root-English and `/zh/` routes, localized theme
  chrome, local search, metadata, and sitemap alternates.
- Locale switching preserves the corresponding `.html` page. Browser language never redirects.
- Pull requests run quality and browser gates but never deploy. Only `main` and manual dispatch may
  reach the Pages artifact and deployment jobs.
- Global permissions remain `contents: read`; only deployment receives `pages: write` and
  `id-token: write`.

### 4. Validation & Error Matrix

| Condition | Required behavior |
| --- | --- |
| locale page/file missing | `npm run check:i18n` fails |
| heading, executable code, public link, or home CTA drifts | locale parity check fails |
| internal link is dead | VitePress build fails |
| English URL receives Chinese browser locale | serve English without redirect |
| pull request event | stop before Pages artifact/deployment |
| quality or browser job fails | deployment remains unreachable |

### 5. Good / Base / Bad Cases

- Good: `/reliaforge/guide/architecture.html` switches to
  `/reliaforge/zh/guide/architecture.html` and both reload directly.
- Base: a Markdown-only edit updates both locale files and passes build, parity, and hygiene.
- Bad: browser-language redirects, committed build output, a generated-output branch, runtime
  secrets, analytics, hosted search, or a cross-repository build.

### 6. Tests Required

- Run the complete quality gate from `index.md`.
- Browser tests cover both locale roots, direct reload, equivalent-page switching, localized
  chrome, desktop, and mobile behavior.
- Inspect generated asset URLs and `lang` metadata after changing the base or locale config.
- After deployment, verify live HTTPS for both roots and at least one direct page per locale.

### 7. Wrong vs Correct

```yaml
# Wrong: an untested job can deploy with broad workflow permissions.
permissions: write-all

# Correct: quality -> browser -> artifact -> scoped deployment.
permissions:
  contents: read
```

Keep the tested VitePress 2 alpha pinned until a stable line satisfies the audit gate. Anchor ignore
rules so generated `/.vitepress/`, `docs/.vitepress/cache/`, and `docs/.vitepress/dist/` stay
untracked without excluding `docs/.vitepress/config.mts` or theme sources.
