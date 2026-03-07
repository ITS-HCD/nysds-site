---
permalink: /foundations/utilities/margin-padding/
title: Margin and Padding
description: Utility classes for adding consistent spacing inside and outside elements in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Margin and Padding

Spacing utilities add margin (space outside an element) and padding (space inside an element) using the NYSDS spacing scale. Class names follow the pattern `.nys-margin-{scale}` and `.nys-padding-{scale}`.

</section>

<section id="spacing-scale">

## Spacing scale

All margin and padding utilities use the same spacing scale:

| Scale value | Size | Class example |
|-------------|------|---------------|
| `1px` | 1px | `.nys-margin-1px` |
| `2px` | 2px | `.nys-margin-2px` |
| `50` | 4px | `.nys-margin-50` |
| `100` | 8px | `.nys-margin-100` |
| `150` | 12px | `.nys-margin-150` |
| `200` | 16px | `.nys-margin-200` |
| `250` | 20px | `.nys-margin-250` |
| `300` | 24px | `.nys-margin-300` |
| `400` | 32px | `.nys-margin-400` |
| `500` | 40px | `.nys-margin-500` |
| `600` | 48px | `.nys-margin-600` |
| `700` | 56px | `.nys-margin-700` |
| `800` | 64px | `.nys-margin-800` |
| `1200` | 96px | `.nys-margin-1200` |

</section>

<section id="margin">

## Margin

Margin adds space outside an element. Use `.nys-margin-{scale}` for uniform margin on all sides.

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-4">
    <div class="docs-spacing-outer">
      <div class="nys-margin-100 docs-spacing-inner">.nys-margin-100</div>
    </div>
  </div>
  <div class="nys-grid-col-4">
    <div class="docs-spacing-outer">
      <div class="nys-margin-300 docs-spacing-inner">.nys-margin-300</div>
    </div>
  </div>
  <div class="nys-grid-col-4">
    <div class="docs-spacing-outer">
      <div class="nys-margin-600 docs-spacing-inner">.nys-margin-600</div>
    </div>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-margin-100">8px margin on all sides</div>
<div class="nys-margin-300">24px margin on all sides</div>
<div class="nys-margin-600">48px margin on all sides</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### Directional margin

Add margin to specific sides with directional suffixes:

- `-x` — left and right
- `-y` — top and bottom
- `-t` — top only
- `-r` — right only
- `-b` — bottom only
- `-l` — left only

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-6">
    <div class="docs-spacing-outer">
      <div class="nys-margin-x-400 docs-spacing-inner">.nys-margin-x-400</div>
    </div>
  </div>
  <div class="nys-grid-col-6">
    <div class="docs-spacing-outer">
      <div class="nys-margin-y-400 docs-spacing-inner">.nys-margin-y-400</div>
    </div>
  </div>
</div>
{% endset %}
{% set code %}
<!-- Horizontal margin (left and right) -->
<div class="nys-margin-x-400">32px left and right</div>

<!-- Vertical margin (top and bottom) -->
<div class="nys-margin-y-400">32px top and bottom</div>

<!-- Individual sides -->
<div class="nys-margin-t-200">16px top only</div>
<div class="nys-margin-b-300">24px bottom only</div>
<div class="nys-margin-l-100 nys-margin-r-500">8px left, 40px right</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="padding">

## Padding

Padding adds space inside an element. Use `.nys-padding-{scale}` for uniform padding on all sides. The same spacing scale and directional suffixes apply.

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-4">
    <div class="docs-padding-demo nys-padding-100">.nys-padding-100</div>
  </div>
  <div class="nys-grid-col-4">
    <div class="docs-padding-demo nys-padding-300">.nys-padding-300</div>
  </div>
  <div class="nys-grid-col-4">
    <div class="docs-padding-demo nys-padding-600">.nys-padding-600</div>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-padding-100">8px padding on all sides</div>
<div class="nys-padding-300">24px padding on all sides</div>
<div class="nys-padding-600">48px padding on all sides</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### Directional padding

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-6">
    <div class="docs-padding-demo nys-padding-x-600 nys-padding-y-100">.nys-padding-x-600 .nys-padding-y-100</div>
  </div>
  <div class="nys-grid-col-6">
    <div class="docs-padding-demo nys-padding-t-50 nys-padding-r-200 nys-padding-b-400 nys-padding-l-800">.nys-padding-t-50 .nys-padding-r-200 .nys-padding-b-400 .nys-padding-l-800</div>
  </div>
</div>
{% endset %}
{% set code %}
<!-- Horizontal and vertical padding -->
<div class="nys-padding-x-600 nys-padding-y-100">
  Wide horizontal, narrow vertical
</div>

<!-- Individual sides -->
<div class="nys-padding-t-50 nys-padding-r-200 nys-padding-b-400 nys-padding-l-800">
  Different padding on each side
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="practical-example">

## Practical example

Combine margin and padding utilities with layout utilities to space content in a page section.

{% set preview %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-6">
    <div class="nys-padding-400" style="border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md);">
      <h3 class="nys-margin-b-200" style="margin-top: 0;">Apply for benefits</h3>
      <p class="nys-margin-b-300" style="margin-top: 0;">Check your eligibility for New York State assistance programs including SNAP, Medicaid, and HEAP.</p>
      <nys-button label="Check eligibility" variant="outline"></nys-button>
    </div>
  </div>
  <div class="nys-grid-col-6">
    <div class="nys-padding-400" style="border: 1px solid var(--nys-color-theme-weak); border-radius: var(--nys-border-radius-md);">
      <h3 class="nys-margin-b-200" style="margin-top: 0;">Renew your license</h3>
      <p class="nys-margin-b-300" style="margin-top: 0;">Renew your driver license or non-driver ID online through the DMV. Most renewals can be completed in minutes.</p>
      <nys-button label="Start renewal" variant="outline"></nys-button>
    </div>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-6">
    <div class="nys-padding-400">
      <h3 class="nys-margin-b-200">Apply for benefits</h3>
      <p class="nys-margin-b-300">Check your eligibility for assistance programs.</p>
      <nys-button label="Check eligibility" variant="outline"></nys-button>
    </div>
  </div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

Margin and padding utilities do **not** currently support responsive prefixes. Apply them uniformly or use [Grid](/foundations/utilities/grid/) and [Flexbox](/foundations/utilities/flex/) utilities for responsive spacing.

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
<style>
  .docs-spacing-outer {
    background-color: var(--nys-color-theme-weaker);
    border: 1px solid var(--nys-color-theme-weak);
    border-radius: var(--nys-border-radius-md);
    overflow: hidden;
  }
  .docs-spacing-inner {
    background-color: var(--nys-color-theme-weakest);
    border: 1px dashed var(--nys-color-theme);
    border-radius: var(--nys-border-radius-sm);
    font-family: var(--nys-font-family-monospace);
    font-size: var(--nys-font-size-ui-sm);
    padding: var(--nys-space-100);
    word-break: break-all;
  }
  .docs-padding-demo {
    background-color: var(--nys-color-theme-weaker);
    border: 1px solid var(--nys-color-theme-weak);
    border-radius: var(--nys-border-radius-md);
    font-family: var(--nys-font-family-monospace);
    font-size: var(--nys-font-size-ui-sm);
    word-break: break-all;
  }
</style>
{% endblock %}

{% block scripts %}
{% endblock %}
