---
layout: home

hero:
  name: A plugin-based operations platform
  text: Your Python tools.<br>Run as plugins.
  tagline: Turn your team's Python operations tools into plugins. ReliaForge loads them and reads their settings. Use the console to check their status and start or stop them.
  image:
    src: /console-preview.png
    alt: ReliaForge console showing plugin status and health
  actions:
    - theme: brand
      text: Try the demo
      link: https://demo.reliaforge.dev/
    - theme: alt
      text: Get started
      link: /guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge console showing plugin status and health
  href: https://demo.reliaforge.dev/
  label: Open the read-only ReliaForge demo

features:
  - title: Start from a template
    details: Generate a working plugin, add your Python code, and give your team an API they can call.
  - title: Know what is running
    details: See which plugins loaded, whether they are healthy, what they depend on, and which actions are currently available.
  - title: Reuse services between plugins
    details: Declare a dependency and use another plugin's shared service through a Python interface.
  - title: Manage plugins in one place
    details: Run several operations services in one Python backend and manage them through an optional console.
---

<section class="home-section">

<p class="section-kicker">WHY RELIAFORGE</p>

## Put your team's tools to work

Your team might have a function that finds a service's owning team and a program that collects
metrics. Package them as plugins to run and manage them in the same backend.

Developers provide each tool's code and API. Teammates call that API or use an interface supplied
by the author. The console shows which plugins are running and lets operators start or stop them.

<div class="boundary-grid">
  <div class="boundary-card"><strong>Backend</strong>Loads plugins, reads their settings, checks their dependencies, and starts and stops them.</div>
  <div class="boundary-card"><strong>Plugin</strong>Contains your tool's code and API, plus any setup and cleanup the tool needs.</div>
  <div class="boundary-card"><strong>Console</strong>Shows plugin status and health, with buttons for the operations currently allowed.</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">SEE IT FIRST</p>

## Explore the console

Browse two example plugins in the [online demo](https://demo.reliaforge.dev/). The data is preset,
so you can explore the pages but cannot start or stop plugins. Follow the
[local quick start](./guide/getting-started.md) to try those operations.

</section>
