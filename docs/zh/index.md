---
layout: home

hero:
  name: 开源插件运行时
  text: 小巧插件。<br>清晰边界。<br>通用控制台。
  tagline: 在类型明确的 Python 运行时上构建可检查的运维插件，再通过可选的 Web 控制台进行发现与管理。
  image:
    src: /console-preview.png
    alt: 展示运行时健康状态与示例插件目录的 ReliaForge 控制台
  actions:
    - theme: brand
      text: 体验在线演示
      link: https://sajoluo.github.io/reliaforge-frontend/#/zh/
    - theme: alt
      text: 阅读指南
      link: /zh/guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: 展示运行时健康状态与示例插件目录的 ReliaForge 控制台
  href: https://sajoluo.github.io/reliaforge-frontend/#/zh/
  label: 打开只读版 ReliaForge 在线演示

features:
  - title: 小巧插件
    details: 在导入插件代码之前，每份清单都会明确声明身份、能力与依赖。
  - title: 清晰边界
    details: 公开读取与认证操作彼此分离，每个插件都保有职责聚焦的契约。
  - title: 通用控制台
    details: 一个可选界面从 API 发现插件，无需硬编码业务目录。
  - title: 原生双语
    details: 官网、控制台和公开消息中的英文与简体中文始终保持对齐。
---

<section class="home-section">

<p class="section-kicker">运行模型</p>

## 一个运行时，多个独立插件

ReliaForge 提供小型运维插件往往需要重复建设的契约：发现、依赖校验、生命周期管理、
类型化设置、健康快照、服务共享和带版本的管理 API。具体领域行为则由你的插件提供。

<div class="boundary-grid">
  <div class="boundary-card"><strong>运行时</strong>校验清单、解析依赖，并让生命周期状态清晰可查。</div>
  <div class="boundary-card"><strong>控制台</strong>将后端拥有的契约呈现为可选的目录与详情界面。</div>
  <div class="boundary-card"><strong>你的插件</strong>让能力与路由保持聚焦、明确，并且可以独立理解。</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">只读演示</p>

## 用安全公开数据体验真实控制台

[在线演示](https://sajoluo.github.io/reliaforge-frontend/#/zh/)运行真实的 React 界面，
数据来自两个中立示例插件的已校验静态快照。它不会发送管理 API 请求，也不会假装执行
生命周期转换。

如需体验完整运行时，请按照[本地快速开始](./guide/getting-started.md)操作。

</section>
