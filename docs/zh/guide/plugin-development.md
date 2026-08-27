# 开发插件

后端仓库拥有规范性的插件契约。本页提供进入该契约的最短安全路径；实现真实插件时，请同时查阅
后端的详细指南。

## 从脚手架开始

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
```

生成的目录包含清单、插件类、设置、服务、路由、模型和一项聚焦测试。请继续保持这些职责分离。

## 声明公开契约

清单无需导入 Python 代码即可描述身份与兼容性：

```json
{
  "id": "sample_tool",
  "name": "Sample Tool",
  "version": "0.1.0",
  "description": "A neutral example capability.",
  "api_version": "v1",
  "entrypoint": "plugin:Plugin",
  "dependencies": [],
  "capabilities": ["sample_tool.message"],
  "frontend": { "category": "Examples" }
}
```

插件 ID 使用小写蛇形命名。依赖是包含 ID 和可接受 SemVer 范围的对象。能力使用唯一的点分名称。
设置 Schema 和生命周期操作由运行时生成，不能手写进清单。

## 保持分层聚焦

- 插件类协调生命周期钩子和上下文所有的资源。
- 服务承载领域行为，不导入 FastAPI。
- 路由负责校验和转换 HTTP 关注点。
- 设置类只声明一次由环境变量提供的配置。
- 测试证明生命周期清理、健康行为、路由和能力契约。

## 遵守运行时边界

- 将阻塞工作移入有界执行域，并设置明确的超时。
- 健康检查必须是同步、无副作用的快照。
- 通过调用方拥有的协议解析其他插件，不要导入对方实现。
- 将事件视为本地通知，而不是持久化队列。
- 对敏感输入使用 `SecretStr`，不得在默认值、日志、Schema 或错误中包含这些值。

请阅读完整的
[插件开发契约](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)，
并把内置
[`demo`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) 和
[`runbook`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook)
插件作为可执行示例。
