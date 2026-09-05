# 路线图

ReliaForge 持续完善运维服务的插件接入和运行管理。插件作者决定提供什么服务，以及用户如何
使用它。平台当前提供：

- 插件发现、依赖检查和按顺序启动；
- 启动、停止、重启和健康状态报告；
- 基于环境变量的插件配置；
- 只读状态 API 和经过认证的管理操作；
- 两个示例插件和插件脚手架；
- 可选的 React 控制台和只读在线演示。

## 下一步重点

- 完善独立服务插件的打包、安装和升级步骤；
- 让部署配置决定加载哪些插件，包括是否加载示例插件；
- 让使用者更容易从控制台找到插件的 API 和使用说明；
- 用结构化日志记录启停操作的发起者和执行结果；
- 发布经过验证的单进程部署示例，并让前端发布检查连接对应版本的后端。

讨论具体改动时，请在负责对应代码的仓库中创建 Issue：

- [后端 Issues](https://github.com/SajoLuo/reliaforge-backend/issues)；
- [前端 Issues](https://github.com/SajoLuo/reliaforge-frontend/issues)；
- [站点和跨项目 Issues](https://github.com/SajoLuo/reliaforge/issues)。
