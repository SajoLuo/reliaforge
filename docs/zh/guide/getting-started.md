# 快速开始

这篇指南会带你从空目录启动 ReliaForge，查看两个可运行的示例插件，再用脚手架创建自己的
第一个插件。如果只想先看看界面，可以直接打开[在线演示](https://demo.reliaforge.dev/#/zh/)。

## 环境要求

- 后端需要 Python 3.11 或更高版本；
- 前端开发需要 Node.js 20 或更高版本，以及 npm 10 或更高版本；
- Git。

## 1. 启动运行时

克隆公开运行时并创建隔离环境：

```bash
git clone https://github.com/SajoLuo/reliaforge-backend.git
cd reliaforge-backend
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
reliaforge
```

在 Windows PowerShell 中，使用 `.venv\Scripts\Activate.ps1` 激活环境。

开发服务器默认绑定到 `127.0.0.1`。

## 2. 看看平台加载了什么

依次查询运行状态、插件列表和两个内置示例：

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

前两个请求用于确认运行时已经启动，并查看成功加载的插件。后两个请求分别调用问候插件和
Runbook 预览插件。这些示例不会产生网络、数据库、文件系统或命令副作用。

## 3. 用脚手架创建插件

请使用脚手架，不要手工复制示例：

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

脚手架会按照 ReliaForge 约定的结构创建清单、设置、生命周期钩子、路由、Service、Model 和
测试。`RELIAFORGE_PLUGIN_PATHS` 用于告诉运行时去哪里发现本地插件，无需把插件复制到
ReliaForge 源码目录。

准备把示例逻辑替换为真实运维任务时，继续阅读[开发插件](./plugin-development.md)。

## 4. 需要界面时再启动控制台

在另一个终端中执行：

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

打开 `http://127.0.0.1:5530`。控制台不是必选项，它通过运行时 API 工作。任何在构建时注入
浏览器的变量都可能被用户读取，因此绝不能放入 API 密钥或代理密钥。

## 5. 选择下一步

| 体验方式 | 数据与运行时 | 能否启停插件 | 适合场景 |
| --- | --- | --- | --- |
| [在线演示](https://demo.reliaforge.dev/#/zh/) | 保存的示例数据 | 不能 | 安装前先看看界面和信息结构 |
| 本地开发 | 本地 Python 进程 | 可以，仅限开发模式 | 开发和测试插件 |
| 生产部署 | 团队批准的服务端运行时 | 可以，需要管理认证 | 运行团队的插件工作区 |

部署到生产环境之前，请阅读[安全模型](../reference/security.md)和
[控制台部署](./deploying-console.md)指南。
