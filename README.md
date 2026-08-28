# ReliaForge

[简体中文](README_CN.md)

ReliaForge helps SRE teams turn Python scripts and runbooks into managed plugins. One backend loads
the plugins, starts dependencies in order, reports health, and provides start, stop, and restart
operations. An optional web console gives operators one place to see what is running.

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
