---
permalink: /foundations/utilities/display/
title: Display
description: Utility classes for controlling element display behavior in the NYS Design System.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="overview">

# Display

Display utilities control how elements render in the document flow. Use them to show, hide, or change the display type of any element.

</section>

<section id="display-classes">

## Display classes

{% set preview %}
<div class="docs-utility-demo">
  <div class="nys-display-block docs-demo-box">
    <code>.nys-display-block</code>
  </div>
  <div class="nys-display-inline docs-demo-box">
    <code>.nys-display-inline</code>
  </div>
  <div class="nys-display-inline docs-demo-box">
    <code>.nys-display-inline</code>
  </div>
  <div class="nys-display-inline-block docs-demo-box">
    <code>.nys-display-inline-block</code>
  </div>
  <div class="nys-display-inline-block docs-demo-box">
    <code>.nys-display-inline-block</code>
  </div>
  <div class="nys-display-flex docs-demo-box">
    <code>.nys-display-flex</code>
  </div>
  <div class="nys-display-inline-flex docs-demo-box">
    <code>.nys-display-inline-flex</code>
  </div>
  <div class="nys-display-inline-flex docs-demo-box">
    <code>.nys-display-inline-flex</code>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-display-block">Block element</div>
<div class="nys-display-inline">Inline element</div>
<div class="nys-display-inline-block">Inline-block element</div>
<div class="nys-display-flex">Flex container</div>
<div class="nys-display-inline-flex">Inline flex container</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### All display classes

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
        <td><code>.nys-display-block</code></td>
        <td><code>display: block</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-flex</code></td>
        <td><code>display: flex</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-inline</code></td>
        <td><code>display: inline</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-inline-block</code></td>
        <td><code>display: inline-block</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-inline-flex</code></td>
        <td><code>display: inline-flex</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-none</code></td>
        <td><code>display: none</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-table</code></td>
        <td><code>display: table</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-table-cell</code></td>
        <td><code>display: table-cell</code></td>
      </tr>
      <tr>
        <td><code>.nys-display-table-row</code></td>
        <td><code>display: table-row</code></td>
      </tr>
    </tbody>
  </table>
</nys-table>

</section>

<section id="hiding-elements">

## Hiding elements

Use `.nys-display-none` to hide an element entirely. Combine with responsive prefixes to hide elements at specific breakpoints — for example, hiding a sidebar on mobile.

{% set preview %}
<div class="nys-display-flex" style="gap: var(--nys-space-200);">
  <div class="docs-demo-box"><code>Visible</code></div>
  <div class="nys-display-none docs-demo-box"><code>Hidden</code></div>
  <div class="docs-demo-box"><code>Visible</code></div>
</div>
{% endset %}
{% set code %}
<!-- Hide on all screen sizes -->
<div class="nys-display-none">This content is hidden</div>

<!-- Hide only on desktop and wider -->
<div class="nys-desktop:nys-display-none">Hidden on desktop</div>

<!-- Show as flex only on tablet and wider -->
<div class="nys-display-none nys-tablet:nys-display-flex">
  Visible on tablet+
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="table-display">

## Table display

Use table display utilities to create table-like layouts without using `<table>` elements.

{% set preview %}
<div class="nys-display-table" style="width: 100%;">
  <div class="nys-display-table-row">
    <div class="nys-display-table-cell docs-demo-box"><code>.nys-display-table-cell</code></div>
    <div class="nys-display-table-cell docs-demo-box"><code>.nys-display-table-cell</code></div>
    <div class="nys-display-table-cell docs-demo-box"><code>.nys-display-table-cell</code></div>
  </div>
</div>
{% endset %}
{% set code %}
<div class="nys-display-table">
  <div class="nys-display-table-row">
    <div class="nys-display-table-cell">Cell 1</div>
    <div class="nys-display-table-cell">Cell 2</div>
    <div class="nys-display-table-cell">Cell 3</div>
  </div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>

<section id="responsive">

## Responsive variants

All display utilities support responsive prefixes. See [Responsive Utilities](/foundations/utilities/responsive/) for breakpoint details.

```html
<div class="nys-display-none nys-tablet:nys-display-block">
  Visible on tablet and wider
</div>
```

</section>

{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url }}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}
