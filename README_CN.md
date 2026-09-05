# ReliaForge

[English](README.md)

ReliaForge 是插件式运维平台。把 Python 运维工具做成插件，交给后端运行。团队成员通过
工具的 API 或作者提供的界面使用它。

后端负责加载插件、检查插件间依赖和读取配置。可选控制台用于查看状态、启动、停止和重启插件。

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
