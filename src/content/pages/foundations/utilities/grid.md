---
permalink: /foundations/utilities/grid/
title: Layout Grid
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

{% block content %}

<section id="how-it-works">

# Layout Grid

Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a 12-column system.

## How it works

The grid system uses a series of containers, rows, and columns to lay out and align content. The following row and corresponding code are an example of and  in-depth look at how the grid comes together.

{% set preview %}
<div class="docs-grid-example">
  <div class="nys-grid-container">
    <div class="nys-grid-row">
      <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
      <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
      <div class="nys-tablet:nys-grid-col">.nys-tablet:nys-grid-col</div>
    </div>
  </div>
</div>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

<p>This example code creates three equal-width columns on tablet, desktop, and widescreen devices by using our predefined grid classes. Those columns are centered in the page with the parent <code>nys-grid-container</code> container.</p>
<p>The following sections break the layout grid down and describe how it works.</p>
<h3 id="containers-rows-and-columns"><a id="containers-rows-and-columns-2" ></a>Containers, rows, and columns</h3>
  <p><strong>Containers:</strong> <code>nys-grid-container</code> centers the container and gives it a maximum width of <code>nys-desktop</code> (1024px). If you would like the grid to span the full width of the page, do not use <code>nys-grid-container</code>.</p>
    <ul>
      <li><code>nys-grid-container</code> can also accept any breakpoint width: <code>nys-mobile-lg</code>, <code>nys-tablet</code>, and <code>nys-desktop</code>.</li>
      <li>By default, <code>nys-grid-container</code> has a <code>padding-x</code> of 2 at narrow widths, and a <code>padding-x</code> of 4 at <code>nys-desktop</code> and wider.</li>
    </ul>
  <p><strong>Rows:</strong> Columns must have a <code>nys-grid-row</code> as a parent.</p>
  <p><strong>Columns:</strong> <code>nys-grid-col-[1-12]</code> indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use <code>nys-grid-col-4</code> for each item.</p>

<h3 id="additional-functionality"><a id="additional-functionality-2" ></a>Additional functionality</h3>
<ul>
  <li><strong>Equal-width columns:</strong> With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of <code>nys-grid-col</code> will display as one-quarter-width columns across all sizes. Refer to the <a href="#auto-layout-columns">auto-layout columns</a> section for more examples.</li>
  <li><strong>Gutters:</strong> Rows and columns don’t have any gutters by default, but gutters can be added by including <code >nys-grid-gap-sm</code>, <code >nys-grid-gap</code>, or <code >nys-grid-gap-lg</code> at the row level. Refer to <a href="#gutters">gutters</a> for more info.</li>
  <li><strong>Media queries:</strong> Grid breakpoints are based on minimum-width media queries, meaning they apply to that specific width and all greater widths (e.g., <code >nys-tablet:col-4</code> applies to tablet, desktop, and widescreen devices but not at <code >nys-mobile-lg</code> or any width below the tablet breakpoint). Refer to <a href="#responsive-classes">responsive classes</a> for a full list.</li>
</ul>
</section>
<section id="auto-layout-columns">

<h2>Auto layout columns</h2>
<h3><a id="variable-width-content" ></a>Variable-width content</h3>
<p><code>.nys-grid-col-auto</code> items fit the natural width of their content.</p>
<p><code>.nys-grid-col</code> and <code>.nys-grid-col-fill</code> items flex to fill the available space as illustrated in the following example row and code.</p>

{% set preview %}
<div class="docs-grid-example">
  <div class="nys-grid-container">
    <div class="nys-grid-row">
      <div class="nys-grid-col-auto">.nys-grid-col-auto</div>
      <div class="nys-grid-col-fill">.nys-grid-col-fill</div>
    </div>
  </div>
</div>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

</section>
<section id="responsive-classes">

<h2>Responsive classes</h2>
<h3><a id="same-at-all-breakpoints"></a>Same at all breakpoints</h3>
<p>For columns that should maintain the same proportion at any viewport width, use the <code>.nys-grid-col</code> and <code>.nys-grid-col-*</code> classes. Specify a numbered class when you need a column of a specific width; otherwise, use <code>.nys-grid-col</code>.</p>
<p><code>.nys-grid-col-[1-12]</code> sets a fixed width of [n] grid columns in a 12-column grid.</p>

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


<h3><a id="stacked-columns-at-narrow-widths"></a>Stacked columns at narrow widths</h3>
<p>Columns are full-width until the narrowest breakpoint specified in a <code>.nys-grid-col</code> class. For instance, using a single set of <code>nys-tablet:nys-grid-col-*</code> classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (<code>nys-tablet:</code>) as illustrated in the following rows and corresponding code.</p>

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

<h3><a id="mix-and-match"></a>Mix and match</h3>
<p>Don't want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoint as needed. See the following example rows and corresponding code for a better idea of how it all works.</p>

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
<section id="offsetting-columns">
<h2>Offsetting columns</h2>
<p><code>.nys-grid-offset-[1-12]</code> offsets an item by the specified number of grid columns as shown in the following example.</p>

{% set preview%}
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
    <div class="nys-grid-col-8 nys-grid-offset-4">.nys-grid-col-8.nys-grid-offset-4</div>
  </div>
</div>{% endset %}
{% set code%}<div class="nys-grid-row">
  <div class="nys-grid-col-8 nys-grid-offset-4">.nys-grid-col-8.nys-grid-offset-4</div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

</section>
<section id="column-wrapping">
<h2>Column wrapping</h2>
<p>Items wrap when the sum of the grid columns is more than 12 as shown in the following example.</p>

{% set preview %}<div class="nys-grid-row border-left bg-white">
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
    <div class="nys-grid-col-8">.nys-grid-col-8</div>
    <div class="nys-grid-col-3">.nys-grid-col-3</div>
    <div class="nys-grid-col-5">.nys-grid-col-5</div>
  </div>
</div>{% endset %}

{% set code %}<div class="nys-grid-row">
  <div class="nys-grid-col-8">.nys-grid-col-8</div>
  <div class="nys-grid-col-3">.nys-grid-col-3</div>
  <div class="nys-grid-col-5">.nys-grid-col-5</div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

</section>
<section id="gutters">
<h2>Gutters</h2>
<h3 id="default-gutter"><a id="default-gutter-2"></a>Default gutter</h3>
<p>Add <code>nys-grid-gap</code> to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 2 units and 4 units at <code>desktop</code> and higher.</p>

{% set preview%}<div class="nys-grid-row border-left bg-white">
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
<div class="docs-grid-example margin-top-2">
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
  </div>
</div>{% endset%}
{% set code%}<div class="nys-grid-row nys-grid-gap">
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}


<h3><a id="large-gutter"></a>Large gutter</h3>
<p><code>nys-grid-gap-lg</code> adds a larger gap (or gutter) between each column in a row than <code>nys-grid-gap</code>. The default large-gap width is 32px. There is also a <code>.nys-grid-gap-sm</code> (2px). Also, you can add the following system values with <code>nys-grid-gap</code>:</p>
<ul>
  <li><code>nys-grid-gap-2px</code></li>
  <li><code>nys-grid-gap-05</code></li>
  <li><code>nys-grid-gap-1</code></li>
  <li><code>nys-grid-gap-2</code></li>
  <li><code>nys-grid-gap-3</code></li>
  <li><code>nys-grid-gap-4</code></li>
  <li><code>nys-grid-gap-5</code></li>
  <li><code>nys-grid-gap-6</code></li>
</ul>
{% set preview %}<div class="nys-grid-row border-left bg-white">
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
  <div class="nys-grid-row nys-grid-gap-lg">
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
    <div class="nys-grid-col-4">
      <div>.nys-grid-col-4</div>
    </div>
  </div>
</div>{% endset %}
{% set code %}<div class="nys-grid-row nys-grid-gap-lg">
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
  <div class="nys-grid-col-4">
    <div>.nys-grid-col-4</div>
  </div>
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