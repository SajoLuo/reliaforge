# ReliaForge

[简体中文](README_CN.md)

This repository is the public project home and documentation site for ReliaForge, an open-source,
pluggable operations platform for SRE teams. It turns operations tools into lifecycle-managed
Python plugins so teams can reuse common platform capabilities and ship new tooling through one
consistent structure.

- Documentation: <https://reliaforge.dev/>
- Read-only demo: <https://demo.reliaforge.dev/>
- Backend runtime: <https://github.com/SajoLuo/reliaforge-backend>
- Optional console: <https://github.com/SajoLuo/reliaforge-frontend>

## Local development

Node.js 22.12 or newer and npm 10 or newer are required.

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Verification

```bash
npm run typecheck
npm run lint
npm run test:unit
npm run check:i18n
npm run build
npm run test:e2e
npm run check:hygiene
npm audit --audit-level=high
```

GitHub Actions repeats the quality gate on Node.js 22 and 24, runs desktop and mobile browser
contracts, and deploys the tested static artifact to GitHub Pages.

## Content ownership

This site owns cross-project concepts, getting started guidance, and the roadmap. Detailed backend
and frontend implementation contracts stay in their respective repositories and are linked from the
site rather than copied.

## License

MIT © 2026 Sajo Luo. See [LICENSE](LICENSE).
