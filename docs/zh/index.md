---
layout: home

hero:
  name: ReliaForge
  text: 小巧插件，清晰边界。
  tagline: 在类型明确的 Python 运行时上构建可检查的运维工具，再通过可选的通用 Web 控制台进行管理。
  image:
    src: /mark.svg
    alt: ReliaForge
  actions:
    - theme: brand
      text: 体验在线演示
      link: https://sajoluo.github.io/reliaforge-frontend/#/zh/
    - theme: alt
      text: 阅读指南
      link: /zh/guide/getting-started
    - theme: alt
      text: 后端源码
      link: https://github.com/SajoLuo/reliaforge-backend
    - theme: alt
      text: 前端源码
      link: https://github.com/SajoLuo/reliaforge-frontend

features:
  - icon: 🧩
    title: 清单优先的插件
    details: 在导入插件代码之前，先验证身份、依赖、能力和兼容性。
  - icon: 🔁
    title: 明确的生命周期
    details: 初始化、启动、健康状态、停止和依赖顺序始终可见、可测试。
  - icon: 🧭
    title: 通用控制台
    details: 可选的 React 界面从 API 发现插件，不携带硬编码的业务目录。
  - icon: 🔐
    title: 审慎的信任边界
    details: 公开读取与需要认证的管理操作相互分离，浏览器不持有管理密钥。
  - icon: 🧰
    title: 类型化扩展点
    details: Python Settings、能力协议和带版本的 API 模型让插件契约清晰可查。
  - icon: 🪶
    title: 刻意保持轻量
    details: 不捆绑监控栈、持久队列、插件市场，也不依赖隐藏基础设施。
---

<section class="home-section">

## 一个平台，而非预先选定的工具目录

ReliaForge 提供小型运维插件往往需要重复建设的运行时契约：发现、依赖校验、生命周期管理、
类型化设置、健康快照、服务共享和带版本的管理 API。具体领域行为则由你的插件提供。

<div class="boundary-grid">
  <div class="boundary-card"><strong>后端</strong>Python 运行时、清单、依赖图、生命周期、API 和插件脚手架。</div>
  <div class="boundary-card"><strong>前端</strong>依据后端契约生成的可选目录与详情控制台。</div>
  <div class="boundary-card"><strong>你的插件</strong>职责聚焦、能够独立理解的能力与路由。</div>
</div>

</section>

<section class="home-section">

## 安全体验真实界面

[在线演示](https://sajoluo.github.io/reliaforge-frontend/#/zh/)运行真实的 React 界面，
数据来自 ReliaForge 两个中立示例插件的已校验静态快照。它明确标记为只读，不发送管理 API
请求，也不会假装执行生命周期转换。

如需体验完整运行时，请按照[本地快速开始](./guide/getting-started.md)操作。

</section>
