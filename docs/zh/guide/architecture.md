# 架构

ReliaForge 将平台编排与插件领域逻辑分离，并确保浏览器行为始终服从后端拥有的契约。

```text
React console (optional)
  -> typed API adapter
  -> versioned management API
       -> plugin manager
            -> manifest loader
            -> dependency resolver
            -> lifecycle state machine
            -> plugin records and health snapshots
            -> controlled plugin context
                 -> provider-owned services
                 -> failure-isolating event delivery
       -> plugin routers -> plugin services
```

## 发现与隔离

发现阶段会在执行扩展代码前读取所有清单。完整依赖图通过验证后，才会按依赖顺序导入入口点。
导入或构造失败会转化为稳定且不泄露敏感信息的加载记录。依赖该插件的插件会被阻止，其他无关
分支和管理平面仍保持可见。

## 运行时所有权

管理器拥有生命周期转换，并为每个插件提供作用域明确的上下文。该上下文拥有服务注册和事件订阅，
因此停止或失败清理不会移除其他插件的资源。

初始化和启动受截止时间约束。健康检查只读取内存状态，不能修复系统，也不能探测外部系统。
事件总线只在本地传递并隔离失败；它不是持久化工作流队列。

## HTTP 边界

平台提供存活、就绪、状态、目录、详情和生命周期端点。公开读取不会执行修复写操作。插件自有路由
和生命周期变更共享同一个管理认证边界，插件清单不能禁用该边界。

可选 Web 控制台遵循以下调用链：

```text
Page -> feature hook -> typed API facade -> selected adapter
                                      ├─ HTTP in a real deployment
                                      └─ static snapshots in the hosted demo
```

两种适配器使用相同的领域类型和运行时响应校验。演示适配器只改变数据来源，不改变页面、路由语义
或生命周期策略。

## 部署形态

生产控制台应与后端部署在同一个可信边界内，或位于能够认证操作者并在服务端注入身份的反向代理
之后。浏览器不保存管理密钥，默认也不发送跨域凭据。

运行时不变式和失败行为详见后端的
[架构文档](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/architecture.md)。
