# 仓库职责

ReliaForge 使用三个仓库，让代码、文档和可部署产物各有明确所有者，同时避免单体仓库和跨仓库构建。

| 仓库 | 负责 | 不负责 |
| --- | --- | --- |
| [`reliaforge`](https://github.com/SajoLuo/reliaforge) | 项目落地页、跨项目指南、路线图、站点部署 | 运行时或控制台源码 |
| [`reliaforge-backend`](https://github.com/SajoLuo/reliaforge-backend) | Python 运行时、API、示例、脚手架、详细插件与运行时文档 | 托管站点或 React 界面 |
| [`reliaforge-frontend`](https://github.com/SajoLuo/reliaforge-frontend) | React 控制台、API 适配器、界面测试、在线只读演示 | 运行时生命周期策略 |

## 文档规则

跨项目概念保留在本站。详细代码约定和实现契约保留在对应代码旁。本站只做摘要并链接到这些文档，
而不会复制它们。

## Trellis 规则

每个仓库都拥有一套以真实源码和测试为依据的精简 `.trellis/spec/` 文档树。项目没有共享 Spec 仓库，
也没有生成式注册表。只有当多个项目都证明某项要求稳定后，才会共享约定。

## 发布规则

后端和前端保持独立版本。更新本站或在线演示并不表示发布了 Python 或 npm 包。仓库标签和 GitHub
Releases 始终是发布历史的权威来源。
