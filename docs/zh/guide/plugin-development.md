# 开发插件

先用后端脚手架生成插件，再把示例服务替换成你的运维任务。

## 生成文件

```bash
reliaforge-scaffold sample_tool --destination ./local-plugins
```

该命令会创建 `manifest.json`、插件类、配置、服务、API 路由、模型和一项测试。

## 说明插件信息

`manifest.json` 告诉 ReliaForge 应该加载什么，以及插件提供什么：

```json
{
  "id": "sample_tool",
  "name": "Sample Tool",
  "version": "0.1.0",
  "description": "Returns a sample message.",
  "api_version": "v1",
  "entrypoint": "plugin:Plugin",
  "dependencies": [],
  "capabilities": ["sample_tool.message"],
  "frontend": { "category": "Examples" }
}
```

插件 ID 使用小写蛇形命名。每项依赖包含插件 ID 和可接受的 SemVer 范围。能力使用唯一的点分
名称，供其他插件获取服务。配置项应定义在 Python 设置类中，不要写进这个文件。

## 把代码放到对应位置

- 插件类负责启动和停止插件。
- 服务执行运维任务，不导入 FastAPI。
- 路由校验 HTTP 输入并调用服务。
- 设置类读取环境变量配置。
- 测试覆盖启动、清理、健康检查、API 路由和共享服务。

阻塞任务不能占用事件循环，并且必须设置超时。健康检查要快，不能产生副作用。密钥请使用
`SecretStr`，不要把密钥值写入默认值、日志、Schema 或错误信息。

后端的完整
[插件开发指南](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/plugin-development.md)
列出了所有支持的字段和钩子。内置的
[`demo`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) 和
[`runbook`](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook)
插件可以直接作为示例参考。
