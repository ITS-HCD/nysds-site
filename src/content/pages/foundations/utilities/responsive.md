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

Responsive classes which combine with utility classes to apply them at specific breakpoints. 

Here are the responsive breakpoints you can prefix to utility classes:

  - `nys-mobile-lg:` min-width: 480px
  - `nys-tablet:` min-width: 768px
  - `nys-desktop:` min-width: 1024px
  - `nys-widescreen:` min-width: 1400px

Responsive utilities are written as their screen size followed by a colon, followed by the utility class you want to make responsive. Here is an example of a responsive `display` utility that applies `display: none` to desktop screens and larger:

  - `<p class="nys-desktop:nys-display-none">Hello Mobile World</p>`

## List of supported utilities
  - [Display](../display)
  - [Flex](../flex)
  - [Float](../float)
  - [Grid](../grid)
  - [Opacity](../opacity)
  - [Z-index](../zindex)

**Currently unsupported:**
  - [Margin and Padding](../margin-padding)

## Same utility on all breakpoints

If you want to have a utility class apply at every breakpoint, simply use the utility class on its own. No need to use the responsive utilities to target specific breakpoints as they will apply mobile-first through all larger breakpoints. Let's see an example using the `nys-grid-col` classes.

{% set backgroundSolid = true %}
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
    <div class="nys-grid-col-6">.nys-grid-col-6</div>
    <div class="nys-grid-col-6">.nys-grid-col-6</div>
    </div>
    Will always be a set of 6 columns
    <div class="nys-grid-row">
    <div class="nys-grid-col-8">.nys-grid-col-8</div>
    <div class="nys-grid-col-4">.nys-grid-col-4</div>
    </div>
    Will always be a set of 8 and 4 columns
</div>{% endset %}
{% set code%}
<div class="nys-grid-row">
    <div class="nys-grid-col-6">.nys-grid-col-6</div>
    <div class="nys-grid-col-6">.nys-grid-col-6</div>
</div>
<div class="nys-grid-row">
    <div class="nys-grid-col-8">.nys-grid-col-8</div>
    <div class="nys-grid-col-4">.nys-grid-col-4</div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

## Different utility at different breakpoints
Columns are full-width until the narrowest breakpoint specified in a `.nys-grid-col` class. For instance, using a single set of `nys-desktop:nys-grid-col-4` classes, you can create a basic grid system that starts out stacked before displaying as columns at the desktop breakpoint (`nys-desktop:`) as illustrated in the following rows and corresponding code.

**You can see in the preview below**, the columns are stacked on top of each other at narrow screen widths (Smaller than desktop breakpoint size of `1024px`).

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
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
  </div>
  12 columns mobile through tablet, 4 columns starting from the desktop breakpoint
</div>{% endset %}
{% set code %}
<div class="nys-grid-row">
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
    <div class="nys-desktop:nys-grid-col-4">.nys-desktop:nys-grid-col-4</div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

## Mix and match breakpoints
Use a combination of different breakpoints for each layout as needed. See the following example code for a better idea of how it all works. **Use caution when applying styles at different breakpoints**, changing the layout on a screen drastically between breakpoints can be confusing to users.

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
  <div class="nys-mobile-lg:nys-grid-col-3 nys-tablet:nys-grid-col-6 nys-desktop:nys-grid-col-9 nys-widescreen:nys-grid-col-12">Multi-column</div>
</div>
Mobile: 3 columns - <code>class="nys-mobile-lg:nys-grid-col-3"</code><br>
Tablet: 6 columns - <code>class="nys-tablet:nys-grid-col-6"</code><br>
Desktop: 9 columns - <code>class="nys-desktop:nys-grid-col-9"</code><br>
Widescreen: 12 columns - <code>class="nys-widescreen:nys-grid-col-12"</code>
</div>{% endset %}
{% set code%}
<div class="nys-grid-row">
  <div class="
    nys-mobile-lg:nys-grid-col-3
    nys-tablet:nys-grid-col-6
    nys-desktop:nys-grid-col-9
    nys-widescreen:nys-grid-col-12
    ">
    Multi-column</div>
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