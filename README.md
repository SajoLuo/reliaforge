# ReliaForge

[简体中文](README_CN.md)

ReliaForge is a plugin-based operations platform. Package your Python operations tools as
plugins and let the backend run them. Teammates use each tool through its API or an interface
provided by its author.

The backend loads plugins, checks dependencies, and reads configuration. The optional console
shows plugin status and lets you start, stop, and restart them.

- [Documentation](https://reliaforge.dev/)
- [Read-only demo](https://demo.reliaforge.dev/)
- [Python backend](https://github.com/SajoLuo/reliaforge-backend)
- [React console](https://github.com/SajoLuo/reliaforge-frontend)

This repository contains the project website and shared documentation.

## Run the website locally

You need Node.js 22.12 or newer and npm 10 or newer.

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Verify a change

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

## License

MIT © 2026 Sajo Luo. See [LICENSE](LICENSE).
