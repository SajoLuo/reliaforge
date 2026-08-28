# ReliaForge

[English](README.md)

本仓库是 ReliaForge 的公开项目主页和文档站。ReliaForge 是一个轻量级平台，用于将运维工具
组织为具有生命周期管理能力的 Python 插件。

- 文档：<https://reliaforge.dev/zh/>
- 只读在线演示：<https://demo.reliaforge.dev/#/zh/>
- 后端运行时：<https://github.com/SajoLuo/reliaforge-backend>
- 可选控制台：<https://github.com/SajoLuo/reliaforge-frontend>

## 本地开发

需要 Node.js 22.12 或更高版本，以及 npm 10 或更高版本。

```bash
npm ci
npm run dev
```

打开 `http://127.0.0.1:5173/zh/`。

## 验证

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

GitHub Actions 会在 Node.js 22 和 24 上重复执行质量门禁，运行桌面端与移动端浏览器契约，
并将验证过的静态产物部署到 GitHub Pages。

## 内容归属

本站负责跨项目概念、快速开始指南和路线图。后端和前端的详细实现契约分别保留在对应仓库中，
本站仅提供链接，不复制这些内容。

## 许可证

MIT © 2026 Sajo Luo。详见 [LICENSE](LICENSE)。
