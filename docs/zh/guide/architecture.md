# 架构

ReliaForge 用一个后端运行多个 Python 插件。可选的 React 控制台调用这个后端，但不自行决定
插件应该如何启停。

```text
React console (optional)
  -> management API
       -> plugin manager
            -> reads plugin metadata
            -> checks dependencies
            -> starts and stops plugins
            -> records status and health
       -> plugin API routes
```

## 加载插件

导入插件代码之前，后端会先读取所有 `manifest.json`，检查 ID、版本、缺失依赖和循环依赖，
再按依赖顺序导入有效插件。

如果某个插件无法加载，后端会记录一条不泄露敏感信息的错误，并阻止依赖它的插件。无关插件
和管理 API 仍然可用。

## 启动和停止插件

插件管理器负责所有状态变化。每个插件都会拿到一个上下文，用来登记它创建的服务和事件订阅。
插件停止或失败时，ReliaForge 只清理该插件自己的资源。

初始化和启动都有时间限制。健康检查只返回内存中的当前状态，不能修复或探测外部系统。事件只在
当前进程中传递，不是持久任务队列。

## API 与控制台

后端提供存活、就绪、平台状态、插件详情、健康状态和启停操作。读取接口不会改变插件状态。
插件 API 路由和启停操作使用同一套管理认证。

控制台有两种数据来源：

```text
Page -> hook -> API client -> HTTP backend
                         \-> saved demo data
```

在线演示使用保存的数据，不提供写操作。正常部署则使用 HTTP 后端。

## 生产部署

条件允许时，让控制台和后端使用同一个可信来源。否则，把两者放在能够认证操作者的反向代理
之后。管理密钥应保留在服务端，不能放入浏览器构建变量。

状态变化和故障处理详见后端的
[架构文档](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/architecture.md)。
