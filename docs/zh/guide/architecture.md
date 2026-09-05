# 架构

ReliaForge 在一个后端进程中托管多个 Python 服务插件。平台负责加载、依赖、配置、认证和
启停；插件实现具体服务和 API；可选的 React 控制台用于查看状态和管理插件。

```text
React console -> management API -> plugin manager
                                       -> loads and starts plugins
                                       -> stops plugins and reads health
API clients   -> plugin API routes -> plugin service code
```

## 加载插件

导入插件代码之前，后端会先读取所有 `manifest.json`，检查 ID、版本、缺失依赖和循环依赖，
再按依赖顺序导入有效插件。

`manifest.json` 或依赖关系有误时，后端无法启动。检查通过后，如果某个插件的代码无法加载，
后端会记录错误并阻止依赖它的插件运行，无关插件和管理 API 仍然可用。

## 启动和停止插件

插件管理器负责所有状态变化。每个插件都会拿到一个上下文，用来登记它创建的服务和事件订阅。
插件的停止钩子负责释放客户端、后台任务等资源，初始化中途失败后也会执行。平台随后移除该
插件注册的服务和事件订阅。

初始化和启动都有时间限制。健康检查只返回内存中的当前状态，不能修复或探测外部系统。事件只在
当前进程中传递，不是持久任务队列。

## API 与控制台

后端提供存活、就绪、平台状态、插件详情、健康状态和启停操作。读取接口不会改变插件状态。
调用插件 API 或执行启停操作前，后端都会验证操作者身份。

控制台有两种数据来源：

```text
Page -> hook -> API client -> HTTP backend
                         \-> saved demo data
```

在线演示使用保存的数据，不提供写操作。正常部署则使用 HTTP 后端。

## 生产部署

生产环境中，让控制台和后端通过能够验证用户身份的可信反向代理对外提供访问。尽量使用相同的
协议、主机和端口；如果来源不同，还要配置允许浏览器访问的来源。管理密钥只保留在服务端。

状态变化和故障处理详见后端的
[架构文档](https://github.com/SajoLuo/reliaforge-backend/blob/main/docs/zh/architecture.md)。
