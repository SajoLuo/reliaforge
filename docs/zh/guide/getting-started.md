# 快速开始

ReliaForge 由 Python 运行时和可选的 React 控制台组成。若要体验真实的插件发现和生命周期行为，
请先启动后端；如果只想查看界面，可以直接打开在线演示。

## 环境要求

- 后端需要 Python 3.11 或更高版本；
- 前端开发需要 Node.js 20 或更高版本，以及 npm 10 或更高版本；
- Git。

## 运行后端

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

开发服务器默认绑定到 `127.0.0.1`。可以通过以下命令查看运行时和插件目录：

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

内置示例不会产生网络、数据库、文件系统或命令副作用。

## 创建插件

请使用脚手架，不要手工复制示例：

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

生成的包遵循与内置示例相同的清单、设置、生命周期、路由和测试边界。接下来请阅读
[开发插件](./plugin-development.md)。

## 运行可选控制台

在另一个终端中执行：

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

打开 `http://127.0.0.1:5530`。构建时注入的浏览器变量是公开内容，绝不能包含 API 密钥或
代理密钥。

## 选择合适的体验方式

| 体验方式 | 后端 | 生命周期写操作 | 用途 |
| --- | --- | --- | --- |
| [在线演示](https://demo.reliaforge.dev/#/zh/) | 静态快照 | 无 | 立即体验真实控制台 |
| 本地开发 | 本地 Python 进程 | 仅限开发环境边界 | 构建和测试插件 |
| 生产部署 | 可信服务端边界 | 经认证并重新校验 | 运行已批准的插件工作区 |

部署到生产环境之前，请阅读[安全模型](../reference/security.md)和
[控制台部署](./deploying-console.md)指南。
