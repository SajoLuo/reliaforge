---
layout: home

hero:
  name: 面向 SRE 团队的开源运维平台
  text: 小巧插件。<br>清晰边界。
  tagline: 把脚本、Runbook 和内部工具封装为 Python 插件。插件发现、依赖、配置、健康状态和生命周期交给 ReliaForge，团队可以把时间花在真正的运维逻辑上。
  image:
    src: /console-preview.png
    alt: ReliaForge 控制台，显示运行状态和示例插件列表
  actions:
    - theme: brand
      text: 在线体验
      link: https://demo.reliaforge.dev/#/zh/
    - theme: alt
      text: 开始使用
      link: /zh/guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge 控制台，显示运行状态和示例插件列表
  href: https://demo.reliaforge.dev/#/zh/
  label: 打开 ReliaForge 只读在线演示

features:
  - title: 复用平台通用能力
    details: 从脚手架开始，不再为每个工具重复搭建配置、健康检查、依赖和生命周期管理。
  - title: 插件独立交付
    details: 每个插件把清单、设置、路由和测试放在一起；单个插件加载失败时，无关插件和管理面仍可运行。
  - title: 依赖提前说清楚
    details: 在导入代码之前声明依赖和能力，由运行时校验兼容性与启动顺序。
  - title: 团队使用同一套规范
    details: 统一的脚手架和契约，让不同成员写出的插件在结构、配置、生命周期和 API 行为上保持一致。
---

<section class="home-section">

<p class="section-kicker">它解决什么</p>

## 业务逻辑各自开发，平台能力统一复用

很多内部运维工具都会重复建设同一套东西：配置加载、健康检查、依赖校验、认证、生命周期
操作和管理界面。ReliaForge 提供这些通用能力，每个插件只负责自己的运维逻辑。

<div class="boundary-grid">
  <div class="boundary-card"><strong>平台</strong>统一提供脚手架、插件发现、配置、健康检查、依赖、生命周期和 API 行为。</div>
  <div class="boundary-card"><strong>插件</strong>负责一项运维能力，把清单、代码、路由和测试放在一起维护。</div>
  <div class="boundary-card"><strong>团队</strong>沿用一套可复用的结构，不再围绕每个工具重新建设一套服务。</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">先看再装</p>

## 安装之前，先看看控制台怎么用

[在线演示](https://demo.reliaforge.dev/#/zh/)使用生产版 React 界面，数据来自两个示例插件的
静态快照。演示是只读的：可以查看运行状态、插件列表和插件详情；需要执行启停操作时，再在
本地运行 ReliaForge。

准备开始开发插件，可以跟着[本地快速开始](./guide/getting-started.md)操作。

</section>
