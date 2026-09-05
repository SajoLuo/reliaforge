# 快速开始

这篇指南会带你从空目录启动 ReliaForge，查看两个可运行的示例插件，再用脚手架创建自己的
第一个插件。如果只想先看看界面，可以直接打开[在线演示](https://demo.reliaforge.dev/#/zh/)。

## 环境要求

- 后端需要 Python 3.11 或更高版本；
- 前端开发需要 Node.js 20 或更高版本，以及 npm 10 或更高版本；
- Git。

## 1. 启动后端

克隆后端并创建隔离环境：

```bash
git clone https://github.com/SajoLuo/reliaforge-backend.git
cd reliaforge-backend
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
cp .env.example .env
reliaforge
```

在 Windows PowerShell 中，使用 `.venv\Scripts\Activate.ps1` 激活环境。

开发服务器默认绑定到 `127.0.0.1`。

## 2. 看看平台加载了什么

保持后端运行，另开一个终端，查询状态、插件列表和示例 API：

```bash
curl http://127.0.0.1:8000/api/v1/status
curl http://127.0.0.1:8000/api/v1/plugins
curl http://127.0.0.1:8000/api/v1/plugins/demo/greeting
curl http://127.0.0.1:8000/api/v1/plugins/runbook/preview
```

前两个请求查看后端状态和已加载插件。后两个请求调用插件自己的服务：`demo` 返回问候语，
`runbook` 使用这段问候语生成文本预览。它们展示了两个服务及其依赖关系，都不会执行外部命令
或修改系统。

## 3. 用脚手架创建插件

先用 Ctrl+C 停止后端，再生成并加载插件：

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
RELIAFORGE_PLUGIN_PATHS=./local-plugins reliaforge
```

在 PowerShell 中，将最后一行替换为：

```powershell
$env:RELIAFORGE_PLUGIN_PATHS = "./local-plugins"
reliaforge
```

命令会创建 `local-plugins/sample_tool/`。路径变量指向存放插件的父目录 `local-plugins`。

保持这个后端运行，在另一个终端调用新插件：

```bash
curl --fail http://127.0.0.1:8000/api/v1/plugins/sample_tool/message
```

预期返回：

```json
{"message": "Generated plugin is running", "plugin_id": "sample_tool"}
```

现在，你已经有了一个能运行的插件。下一步按[开发插件](./plugin-development.md)加入自己的
Python 函数，让使用者通过 API 查询某个服务由哪个团队负责。

## 4. 需要界面时再启动控制台

在 `reliaforge-backend` 的父目录中另开一个终端，执行：

```bash
git clone https://github.com/SajoLuo/reliaforge-frontend.git
cd reliaforge-frontend
cp .env.example .env
npm ci
npm run dev
```

打开 `http://127.0.0.1:5530` 查看插件列表。浏览器中的配置对访问者可见，API 密钥和代理
密钥应只放在后端或代理中。

## 5. 选择下一步

| 体验方式 | 数据来源 | 能否启停插件 | 适合场景 |
| --- | --- | --- | --- |
| [在线演示](https://demo.reliaforge.dev/#/zh/) | 保存的示例数据 | 不能 | 安装前先看看界面和信息结构 |
| 本地开发 | 本地 Python 进程 | 可以，仅限开发模式 | 开发和测试插件 |
| 生产部署 | 团队部署的后端 | 可以，须先通过身份验证 | 运行团队的插件 |

部署到生产环境之前，请阅读[安全模型](../reference/security.md)和
[控制台部署](./deploying-console.md)指南。
