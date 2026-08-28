---
layout: home

hero:
  name: Open-source SRE platform
  text: Small plugins.<br>Clear boundaries.
  tagline: Turn scripts, runbooks, and internal tools into Python plugins. ReliaForge handles discovery, dependencies, settings, health, and lifecycle so your team can focus on the operation itself.
  image:
    src: /console-preview.png
    alt: ReliaForge console with runtime health and example plugins
  actions:
    - theme: brand
      text: Try the demo
      link: https://demo.reliaforge.dev/
    - theme: alt
      text: Get started
      link: /guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge console with runtime health and example plugins
  href: https://demo.reliaforge.dev/
  label: Open the read-only ReliaForge demo

features:
  - title: Reuse the platform layer
    details: Start from the scaffold instead of rebuilding settings, health checks, dependencies, and lifecycle management for every tool.
  - title: Ship plugins independently
    details: Keep each plugin's manifest, settings, routes, and tests together. A failed plugin load does not stop unrelated plugins or the management plane.
  - title: Make dependencies explicit
    details: Declare dependencies and capabilities before code loads so the runtime can validate compatibility and startup order.
  - title: Give teams one convention
    details: A shared scaffold and contract keep plugin structure, configuration, lifecycle, and API behavior predictable across contributors.
---

<section class="home-section">

<p class="section-kicker">WHY RELIAFORGE</p>

## Build the tool. Reuse the platform

Internal operations tools often repeat the same plumbing: configuration, health endpoints,
dependency checks, authentication, lifecycle actions, and a UI. ReliaForge provides that shared
layer. Each plugin owns the operation-specific behavior.

<div class="boundary-grid">
  <div class="boundary-card"><strong>Platform</strong>Provides one scaffold and shared discovery, settings, health, dependency, lifecycle, and API behavior.</div>
  <div class="boundary-card"><strong>Plugin</strong>Owns one operations capability and keeps its manifest, code, routes, and tests together.</div>
  <div class="boundary-card"><strong>Team</strong>Ships plugins through one repeatable structure instead of building a new service around every tool.</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">SEE IT FIRST</p>

## Explore the console before installing anything

The [online demo](https://demo.reliaforge.dev/) uses the production React interface with static data
from two example plugins. It is read-only: explore runtime status, the plugin catalog, and plugin
details, then run ReliaForge locally when you need lifecycle actions.

Ready to build a plugin? Follow the [local quick start](./guide/getting-started.md).

</section>
