# ReliaForge

[English](README.md)

ReliaForge 帮助 SRE 团队把 Python 脚本和 Runbook 做成可管理的插件。一个后端负责加载插件、
按依赖顺序启动、报告健康状态，并提供启动、停止和重启操作；可选的 Web 控制台让值班人员在
一个地方看清当前运行情况。

- [文档](https://reliaforge.dev/zh/)
- [只读在线演示](https://demo.reliaforge.dev/#/zh/)
- [Python 后端](https://github.com/SajoLuo/reliaforge-backend)
- [React 控制台](https://github.com/SajoLuo/reliaforge-frontend)

本仓库包含项目网站和跨仓库共用的文档。

## 本地运行网站

需要 Node.js 22.12 或更高版本，以及 npm 10 或更高版本。

```bash
npm ci
npm run dev
```

打开 `http://127.0.0.1:5173/zh/`。

## 验证改动

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

## 许可证

MIT © 2026 Sajo Luo。详见 [LICENSE](LICENSE)。
