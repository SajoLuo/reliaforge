# 部署控制台

React 控制台是可选组件。它从后端读取插件状态，并发送经过认证的启动、停止和重启请求。

## 本地开发

复制示例配置并启动开发服务器：

```bash
cp .env.example .env
npm ci
npm run dev
```

前端和后端使用不同来源时，把 `VITE_RELIAFORGE_API_URL` 设为后端来源。前端会自动追加
`/api/v1`；没有设置该变量时，则调用同源的 `/api/v1`。

本地开发时，还需要把准确的前端来源加入后端 CORS 允许列表。

## 生产构建

```bash
npm ci
npm run build
```

请从来源根路径提供生成的静态文件。Web 服务器需要为应用路由返回 `index.html`，把 `/api/v1`
代理到后端，并在服务端认证管理请求。

不要把 API 密钥或共享密钥放进 `VITE_*` 变量，这些值会进入公开的浏览器文件。

## 只读演示构建

```bash
npm run build:demo
```

该构建使用 Hash 路由和保存的示例数据，也是 `demo.reliaforge.dev` 使用的构建。它没有后端，
不能证明插件启停操作正常。

## 生产认证

使用代理认证模式时，后端只接受已配置可信对端提供的操作者身份，并同时校验代理共享密钥。
生产配置无效时，后端会拒绝启动。

暴露控制台之前，请阅读[安全模型](../reference/security.md)。前端构建和测试命令位于
[前端仓库](https://github.com/SajoLuo/reliaforge-frontend)。
