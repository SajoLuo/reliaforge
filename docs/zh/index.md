---
layout: home

hero:
  name: 面向 SRE 团队的插件式运维平台
  text: 把运维工具，<br>做成插件。
  tagline: 把团队使用的 Python 运维工具做成插件。ReliaForge 负责加载和读取配置，你可以在控制台查看状态、启动或停止插件。
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
  - title: 从模板开始
    details: 生成一个能运行的插件，加入你的 Python 代码，再把可调用的 API 交给团队。
  - title: 看清当前运行情况
    details: 查看哪些插件已加载、是否健康、依赖哪些插件，以及当前可以执行哪些操作。
  - title: 复用其他插件的服务
    details: 声明插件依赖，通过 Python 接口调用它提供的共享服务。
  - title: 在一个地方管理插件
    details: 由一个 Python 后端运行多个运维服务，通过可选控制台集中管理。
---

<section class="home-section">

<p class="section-kicker">为什么用 RELIAFORGE</p>

## 让团队用上你写的工具

团队可能已经有一个能查出服务由哪个团队负责的函数，还有一个采集指标的程序。把它们做成插件，就可以
使用同一个后端运行和管理。

开发者提供工具的代码和 API。团队成员通过 API 或作者提供的界面使用工具；运维人员在控制台
查看哪些插件正在运行，并按需启动或停止。

<div class="boundary-grid">
  <div class="boundary-card"><strong>后端</strong>加载插件、读取配置、检查插件间依赖，并负责启动和停止。</div>
  <div class="boundary-card"><strong>插件</strong>放置工具的代码和 API，以及工具需要的准备和清理代码。</div>
  <div class="boundary-card"><strong>控制台</strong>查看插件状态和健康详情，执行当前允许的操作。</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">先看再装</p>

## 先看看控制台

在[在线演示](https://demo.reliaforge.dev/#/zh/)中浏览两个示例插件。数据是预设的，可以查看页面，
但不能启动或停止插件。要体验启停操作，请按照[本地快速开始](./guide/getting-started.md)运行。

</section>
