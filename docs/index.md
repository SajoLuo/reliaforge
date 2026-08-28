---
layout: home

hero:
  name: Open source plugin runtime
  text: Small plugins.<br>Clear boundaries.<br>Generic console.
  tagline: Build inspectable operations plugins on a typed Python runtime, then discover and manage them through an optional web console.
  image:
    src: /console-preview.png
    alt: ReliaForge console showing runtime health and the example plugin catalog
  actions:
    - theme: brand
      text: Explore the demo
      link: https://sajoluo.github.io/reliaforge-frontend/
    - theme: alt
      text: Read the guide
      link: /guide/getting-started

heroPreview:
  src: /console-preview.png
  alt: ReliaForge console showing runtime health and the example plugin catalog
  href: https://sajoluo.github.io/reliaforge-frontend/
  label: Open the read-only ReliaForge demo

features:
  - title: Small plugins
    details: Each manifest declares identity, capabilities, and dependencies before plugin code is imported.
  - title: Clear boundaries
    details: Public reads stay separate from authenticated actions, while every plugin keeps a focused contract.
  - title: Generic console
    details: One optional interface discovers plugins from the API instead of hard-coding a business catalog.
  - title: Bilingual by default
    details: English and Simplified Chinese stay aligned across the site, console, and public messages.
---

<section class="home-section">

<p class="section-kicker">THE OPERATING MODEL</p>

## One runtime. Independent plugins

ReliaForge supplies the contracts that small operations plugins usually rebuild: discovery,
dependency validation, lifecycle management, typed settings, health snapshots, service sharing, and
a versioned management API. Your plugins supply the domain behavior.

<div class="boundary-grid">
  <div class="boundary-card"><strong>Runtime</strong>Validates manifests, resolves dependencies, and makes lifecycle state inspectable.</div>
  <div class="boundary-card"><strong>Console</strong>Turns backend-owned contracts into an optional catalog and detail interface.</div>
  <div class="boundary-card"><strong>Your plugins</strong>Keep capabilities and routes focused, explicit, and independently understandable.</div>
</div>

</section>

<section class="home-section home-demo">

<p class="section-kicker">READ-ONLY DEMO</p>

## The real console, with safe public data

The [online demo](https://sajoluo.github.io/reliaforge-frontend/) runs the production React interface
against validated static snapshots of two neutral example plugins. It sends no management API
requests and never pretends to execute lifecycle transitions.

For the complete runtime, follow the [local quick start](./guide/getting-started.md).

</section>
