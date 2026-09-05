# 开发插件

从团队需要的一个 Python 函数开始，通过 ReliaForge 给它提供 API。后端的
[完整教程](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/zh/plugin-development.md)
以“查询服务由哪个团队负责”为例，给出了可以直接复制的文件。

## 做完后能得到什么？

按教程完成后，可以这样调用：

```bash
curl "http://127.0.0.1:8000/api/v1/plugins/sample_tool/owner?service_name=payments"
```

返回结果：

```json
{"service": "payments", "team": "payments-ops"}
```

示例使用两条预设记录，方便你在本地试用，无需连接其他系统。

## 要改哪些文件？

先按[快速开始](./getting-started.md)生成 `sample_tool`，再完成以下步骤：

| 步骤 | 文件或配置 | 要做什么 |
| --- | --- | --- |
| 放入已有函数 | `ownership.py` | 把查询函数放在这里 |
| 增加 API | `router.py` | 读取查询参数，调用函数，返回 JSON |
| 加载插件 | `RELIAFORGE_PLUGIN_PATHS` | 指向插件的父目录，然后重启后端 |
| 交给使用者 | 插件的 `README.md` | 写清 URL、参数、返回结果和身份验证方式 |

生成的插件已经包含启动和停止代码，本例可以继续使用。具体代码，以及工具需要客户端或后台
任务时的处理方式，见[完整教程和运行规则](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/zh/plugin-development.md)。

## 怎样确认已经可用？

分别测试正常查询、查询不存在的服务，以及停止插件后再次查询。应该依次得到 HTTP `200`、
`404` 和 `503`。重新启动插件后，正常查询应恢复。

本地开发时，打开 `http://127.0.0.1:8000/api/v1/docs` 就能找到并试用新接口。
控制台用于查看插件状态和执行启停操作。

## 怎样交给团队使用？

把插件目录、需要安装的 Python 依赖和 README 交给部署维护者。维护者安装依赖，把目录加入
后端的插件搜索路径，再重启后端。README 应写明在该部署中调用 API 前怎样完成身份验证。

内置的 [demo](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/demo) 和
[runbook](https://github.com/SajoLuo/reliaforge-backend/tree/main/reliaforge/plugins/runbook) 插件还展示了
怎样调用其他插件共享的 Python 服务。
