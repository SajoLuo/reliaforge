---
layout: home

hero:
  name: 面向 SRE 团队的开源工具
  text: 把脚本变成<br>可管理的插件。
  tagline: 用一个后端运行 Python 脚本和 Runbook。ReliaForge 负责加载插件、按依赖顺序启动、报告健康状态，并提供一个统一的查看和操作入口。
  image:
    src: /console-preview.png
    alt: ReliaForge 控制台，显示插件状态和健康情况
  actions:
    - theme: brand
      text: 在线体验
      link: https://demo.reliaforge.dev/#/zh/
    - theme: alt
      text: 开始使用
      link: /zh/guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge 控制台，显示插件状态和健康情况
  href: https://demo.reliaforge.dev/#/zh/
  label: 打开 ReliaForge 只读在线演示

features:
  - title: 从可运行的结构开始
    details: 直接生成包含配置、健康检查、API 路由、启停逻辑和测试的插件。
  - title: 看清当前运行情况
    details: 查看哪些插件已加载、是否健康、依赖哪些插件，以及当前可以执行哪些操作。
  - title: 把故障限制在局部
    details: 插件故障会阻止依赖它的插件，但无关插件和管理 API 仍可使用。
  - title: 增加工具，不增加服务
    details: 把多个小型运维工具放到一个 Python 后端和一个可选控制台中运行。
---

<section class="home-section">

<p class="section-kicker">为什么用 RELIAFORGE</p>

## 不再为每个运维工具重建一套服务

小型内部工具往往需要同样的配套代码：配置、健康检查、依赖处理、认证、启停操作和界面。
ReliaForge 统一提供这些能力，每个插件只包含团队真正需要的运维任务。

<div class="boundary-grid">
  <div class="boundary-card"><strong>后端</strong>加载插件、检查依赖、管理启停并提供 API。</div>
  <div class="boundary-card"><strong>插件</strong>包含一项运维任务，以及它的配置、API 路由、健康检查和测试。</div>
  <div class="boundary-card"><strong>控制台</strong>显示当前状态和后端允许执行的操作。</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">先看再装</p>

## 安装之前，先看看控制台

[在线演示](https://demo.reliaforge.dev/#/zh/)使用正式的 React 界面，展示两个示例插件的静态数据。
它没有后端，不能启动或停止插件。如需体验这些操作，请跟着[本地快速开始](./guide/getting-started.md)
运行完整环境。

</section>
