---
permalink: /foundations/utilities/responsive/
title: Responsive Utilities
description: Responsive utilities for adjusting applied styles based on screen width.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}
<section id="responsive-utilities">

# Responsive Utilities

The NYS Design System features responsive classes which apply utility classes at specific breakpoints.

The following utilities are supported:
  - [Display](../display)
  - [Flex](../flex)
  - [Float](../float)
  - [Grid](../grid)
  - [Opacity](../opacity)
  - [Z-index](../zindex)

Currently unsupported:
  - [Margin and Padding](../margin-padding)


### Same at all breakpoints

For columns that should maintain the same proportion at any viewport width, use the `.nys-grid-col` and `.nys-grid-col-*` classes. Specify a numbered class when you need a column of a specific width; otherwise, use `.nys-grid-col`.

`.nys-grid-col-[1-12]` sets a fixed width of \[n\] grid columns in a 12-column grid.

{% set preview %}
<div class="nys-grid-row border-left bg-white">
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">1</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">2</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">3</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">4</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">5</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">6</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">7</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">8</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">9</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">10</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">11</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">12</div>
  </div>
</div>
<div class="docs-grid-example">
<div class="nys-grid-row">
  <div class="nys-grid-col-1">.nys-grid-col-1</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
  <div class="nys-grid-col-3">.nys-grid-col-3</div>
  <div class="nys-grid-col-4">.nys-grid-col-4</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col-8">.nys-grid-col-8</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
</div>
</div>{% endset %}
{% set code%}
<div class="nys-grid-row">
  <div class="nys-grid-col-1">.nys-grid-col-1</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
  <div class="nys-grid-col-3">.nys-grid-col-3</div>
  <div class="nys-grid-col-4">.nys-grid-col-4</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col-8">.nys-grid-col-8</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
  <div class="nys-grid-col-2">.nys-grid-col-2</div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}


### Stacked columns at narrow widths
Columns are full-width until the narrowest breakpoint specified in a `.nys-grid-col` class. For instance, using a single set of `nys-tablet:nys-grid-col-*` classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (`nys-tablet:`) as illustrated in the following rows and corresponding code.

{% set preview %}<div class="docs-grid-example">
  <div class="nys-grid-row">
    <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
    <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
    <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
  </div>
  <div class="nys-grid-row">
    <div class="nys-tablet:nys-grid-col-4">.nys-tablet:nys-grid-col-4</div>
    <div class="nys-tablet:nys-grid-col-8">.nys-tablet:nys-grid-col-8</div>
  </div>
</div>{% endset %}
{% set code %}<div class="nys-grid-row">
  <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
  <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
  <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
</div>
<div class="nys-grid-row">
  <div class="nys-tablet:nys-grid-col-4">.nys-tablet:nys-grid-col-4</div>
  <div class="nys-tablet:nys-grid-col-8">.nys-tablet:nys-grid-col-8</div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

### Mix and match
Don't want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoint as needed. See the following example rows and corresponding code for a better idea of how it all works.

{% set preview %}
<div class="nys-grid-row border-left bg-white">
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">1</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">2</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">3</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">4</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">5</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">6</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">7</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">8</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">9</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">10</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">11</div>
  </div>
  <div class="nys-grid-col-1 border-right">
    <div class="text-center">12</div>
  </div>
</div>
<div class="docs-grid-example">
<div class="nys-grid-row">
  <div class="nys-tablet:nys-grid-col-8">.nys-tablet:nys-grid-col-8</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
</div>
Stack the columns on mobile by making one full-width and the other half-width
<div class="nys-grid-row">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
</div>
Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
<div class="nys-grid-row">
  <div class="nys-grid-col-6">.nys-grid-col-6</div>
  <div class="nys-grid-col-6">.nys-grid-col-6</div>
</div>
Columns are always 50% wide, on mobile and desktop
</div>{% endset %}
{% set code%}<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="nys-grid-row">
  <div class="nys-tablet:nys-grid-col-8">.nys-tablet:nys-grid-col-8</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
</div>
<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="nys-grid-row">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-4">.nys-grid-col-6 .nys-tablet:nys-grid-col-4</div>
</div>
<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="nys-grid-row">
  <div class="nys-grid-col-6">.nys-grid-col-6</div>
  <div class="nys-grid-col-6">.nys-grid-col-6</div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>
{% endblock %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}