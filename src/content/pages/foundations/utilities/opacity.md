---
permalink: /foundations/utilities/opacity/
title: Opacity
description: Utility classes for controlling element transparency in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Opacity

Opacity utilities control the transparency of an element and all of its children. Values range from fully transparent (0) to fully opaque (100).

</section>

<section id="opacity-classes">

## Opacity scale

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-0 docs-opacity-swatch"><code>0</code></div>
    <div class="docs-opacity-label">.nys-opacity-0</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-10 docs-opacity-swatch"><code>10</code></div>
    <div class="docs-opacity-label">.nys-opacity-10</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-20 docs-opacity-swatch"><code>20</code></div>
    <div class="docs-opacity-label">.nys-opacity-20</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-30 docs-opacity-swatch"><code>30</code></div>
    <div class="docs-opacity-label">.nys-opacity-30</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-40 docs-opacity-swatch"><code>40</code></div>
    <div class="docs-opacity-label">.nys-opacity-40</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-50 docs-opacity-swatch"><code>50</code></div>
    <div class="docs-opacity-label">.nys-opacity-50</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-60 docs-opacity-swatch"><code>60</code></div>
    <div class="docs-opacity-label">.nys-opacity-60</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-70 docs-opacity-swatch"><code>70</code></div>
    <div class="docs-opacity-label">.nys-opacity-70</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-80 docs-opacity-swatch"><code>80</code></div>
    <div class="docs-opacity-label">.nys-opacity-80</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-90 docs-opacity-swatch"><code>90</code></div>
    <div class="docs-opacity-label">.nys-opacity-90</div>
  </div>
  <div class="nys-grid-col-4 nys-tablet:nys-grid-col-2">
    <div class="nys-opacity-100 docs-opacity-swatch"><code>100</code></div>
    <div class="docs-opacity-label">.nys-opacity-100</div>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-opacity-0">Fully transparent (0)</div>
<div class="nys-opacity-50">Half transparent (0.5)</div>
<div class="nys-opacity-100">Fully opaque (1)</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### All opacity classes

| Class | CSS value |
|-------|-----------|
| `.nys-opacity-0` | `opacity: 0` |
| `.nys-opacity-10` | `opacity: 0.1` |
| `.nys-opacity-20` | `opacity: 0.2` |
| `.nys-opacity-30` | `opacity: 0.3` |
| `.nys-opacity-40` | `opacity: 0.4` |
| `.nys-opacity-50` | `opacity: 0.5` |
| `.nys-opacity-60` | `opacity: 0.6` |
| `.nys-opacity-70` | `opacity: 0.7` |
| `.nys-opacity-80` | `opacity: 0.8` |
| `.nys-opacity-90` | `opacity: 0.9` |
| `.nys-opacity-100` | `opacity: 1` |

</section>

<section id="practical-example">

## Practical example

Opacity is useful for indicating disabled states or creating visual layering effects.

{% set preview %}
<div class="nys-display-flex" style="gap: var(--nys-space-300);">
  <nys-button label="Submit application"></nys-button>
  <div class="nys-opacity-40" style="pointer-events: none;">
    <nys-button label="Submit application"></nys-button>
  </div>
</div>
{% endset %}
{% set code %}
<!-- Active button -->
<nys-button label="Submit application"></nys-button>

<!-- Visually disabled appearance using opacity -->
<div class="nys-opacity-40" style="pointer-events: none;">
  <nys-button label="Submit application"></nys-button>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

All opacity utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<div class="nys-opacity-50 nys-desktop:nys-opacity-100">
  Half transparent on mobile, fully opaque on desktop
</div>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
<style>
  .docs-opacity-swatch {
    background-color: var(--nys-color-theme);
    color: white;
    padding: var(--nys-space-300) var(--nys-space-200);
    text-align: center;
    border-radius: var(--nys-border-radius-md);
    font-family: var(--nys-font-family-monospace);
  }
  .docs-opacity-swatch code {
    color: white;
    background: none;
  }
  .docs-opacity-label {
    font-size: var(--nys-font-size-ui-sm);
    font-family: var(--nys-font-family-monospace);
    text-align: center;
    margin-top: var(--nys-space-50);
    word-break: break-all;
  }
</style>
{% endblock %}

{% block scripts %}
{% endblock %}
