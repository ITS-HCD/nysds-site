---
permalink: /foundations/utilities/zindex/
title: Z-Index
description: Utility classes for controlling the stacking order of overlapping elements in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Z-Index

Z-index utilities control the stacking order of positioned elements. Higher values appear in front of lower values. Elements must have a `position` value other than `static` for z-index to take effect — use the [Position utilities](/foundations/utilities/position/) to set positioning.

</section>

<section id="z-index-scale">

## Z-index scale

{% set preview %}
<div class="docs-z-demo">
  <div class="docs-z-layer nys-z-bottom nys-position-relative">
    <code>.nys-z-bottom</code> <span class="docs-z-value">-100</span>
  </div>
  <div class="docs-z-layer nys-z-0 nys-position-relative">
    <code>.nys-z-0</code> <span class="docs-z-value">0</span>
  </div>
  <div class="docs-z-layer nys-z-100 nys-position-relative">
    <code>.nys-z-100</code> <span class="docs-z-value">100</span>
  </div>
  <div class="docs-z-layer nys-z-200 nys-position-relative">
    <code>.nys-z-200</code> <span class="docs-z-value">200</span>
  </div>
  <div class="docs-z-layer nys-z-300 nys-position-relative">
    <code>.nys-z-300</code> <span class="docs-z-value">300</span>
  </div>
  <div class="docs-z-layer nys-z-400 nys-position-relative">
    <code>.nys-z-400</code> <span class="docs-z-value">400</span>
  </div>
  <div class="docs-z-layer nys-z-500 nys-position-relative">
    <code>.nys-z-500</code> <span class="docs-z-value">500</span>
  </div>
  <div class="docs-z-layer nys-z-top nys-position-relative">
    <code>.nys-z-top</code> <span class="docs-z-value">99999</span>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-z-bottom nys-position-relative">Behind everything (-100)</div>
<div class="nys-z-0 nys-position-relative">Base layer (0)</div>
<div class="nys-z-100 nys-position-relative">Layer 100</div>
<div class="nys-z-200 nys-position-relative">Layer 200</div>
<div class="nys-z-300 nys-position-relative">Layer 300</div>
<div class="nys-z-400 nys-position-relative">Layer 400</div>
<div class="nys-z-500 nys-position-relative">Layer 500</div>
<div class="nys-z-top nys-position-relative">On top of everything (99999)</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### All z-index classes

<nys-table striped>
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>CSS value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.nys-z-auto</code></td>
        <td><code>z-index: auto</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-bottom</code></td>
        <td><code>z-index: -100</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-0</code></td>
        <td><code>z-index: 0</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-100</code></td>
        <td><code>z-index: 100</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-200</code></td>
        <td><code>z-index: 200</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-300</code></td>
        <td><code>z-index: 300</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-400</code></td>
        <td><code>z-index: 400</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-500</code></td>
        <td><code>z-index: 500</code></td>
      </tr>
      <tr>
        <td><code>.nys-z-top</code></td>
        <td><code>z-index: 99999</code></td>
      </tr>
    </tbody>
  </table>
</nys-table>

</section>

<section id="responsive">

## Responsive variants

All z-index utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<div class="nys-z-0 nys-desktop:nys-z-500 nys-position-relative">
  Base layer on mobile, elevated on desktop
</div>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
<style>
  .docs-z-demo {
    position: relative;
    padding-bottom: var(--nys-space-100);
  }
  .docs-z-layer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--nys-space-200) var(--nys-space-300);
    border: 1px solid var(--nys-color-theme-weak);
    border-radius: var(--nys-border-radius-md);
    background-color: var(--nys-color-theme-weaker);
    margin-top: -6px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .docs-z-value {
    font-family: var(--nys-font-family-monospace);
    font-size: var(--nys-font-size-ui-sm);
    color: var(--nys-color-theme);
    background-color: var(--nys-color-theme-weakest);
    padding: var(--nys-space-50) var(--nys-space-100);
    border-radius: var(--nys-border-radius-sm);
  }
</style>
{% endblock %}

{% block scripts %}
{% endblock %}
