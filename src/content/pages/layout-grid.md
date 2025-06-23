---
title: Layout Grid
layout: layouts/3-col.njk
permalink: /foundations/utilities/grid/
description: Layout Grid for The New York State Design System
long_description: Layout Grid for The New York State Design System
navOrder: 5
section: Foundations
parent: Utilities
---
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

This example code creates three equal-width columns on tablet, desktop, and widescreen devices by using our predefined grid classes. Those columns are centered in the page with the parent `nys-grid-container` container.

The following sections break the layout grid down and describe how it works.

### Containers, rows, and columns

**Containers:** `nys-grid-container` centers the container and gives it a maximum width of `nys-desktop` (1024px). If you would like the grid to span the full width of the page, do not use `nys-grid-container`.

*   `nys-grid-container` can also accept any breakpoint width: `nys-mobile-lg`, `nys-tablet`, and `nys-desktop`.
*   By default, `nys-grid-container` has a `padding-x` of 2 at narrow widths, and a `padding-x` of 4 at `nys-desktop` and wider.

**Rows:** Columns must have a `nys-grid-row` as a parent.

**Columns:** `nys-grid-col-[1-12]` indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use `nys-grid-col-4` for each item.

### Additional functionality

*   **Equal-width columns:** With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of `nys-grid-col` will display as one-quarter-width columns across all sizes. Refer to the [auto-layout columns](#auto-layout-columns) section for more examples.
*   **Gutters:** Rows and columns don’t have any gutters by default, but gutters can be added by including `nys-grid-gap-sm`, `nys-grid-gap`, or `nys-grid-gap-lg` at the row level. Refer to [gutters](#gutters) for more info.
*   **Media queries:** Grid breakpoints are based on minimum-width media queries, meaning they apply to that specific width and all greater widths (e.g., `nys-tablet:col-4` applies to tablet, desktop, and widescreen devices but not at `nys-mobile-lg` or any width below the tablet breakpoint). Refer to [responsive classes](#responsive-classes) for a full list.
</section>

<section id="auto-layout-columns">

## Auto layout columns

### Variable-width content

`.nys-grid-col-auto` items fit the natural width of their content.

`.nys-grid-col` and `.nys-grid-col-fill` items flex to fill the available space as illustrated in the following example row and code.

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

## Responsive classes

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
<section id="offsetting-columns">

## Offsetting columns
`.nys-grid-offset-[1-12]` offsets an item by the specified number of grid columns as shown in the following example.

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

## Column wrapping
Items wrap when the sum of the grid columns is more than 12 as shown in the following example.

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

## Gutters
### Default gutter

Add `nys-grid-gap` to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 2 units and 4 units at `desktop` and higher.

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

### Gutter sizing

`nys-grid-gap-lg` adds a larger gap (or gutter) between each column in a row than `nys-grid-gap`. The default large-gap width is 32px. There is also a `.nys-grid-gap-sm` (2px). Also, you can add the following system values with `nys-grid-gap`:

*   `nys-grid-gap-2px`
*   `nys-grid-gap-05`
*   `nys-grid-gap-1`
*   `nys-grid-gap-2`
*   `nys-grid-gap-3`
*   `nys-grid-gap-4`
*   `nys-grid-gap-5`
*   `nys-grid-gap-6`

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
