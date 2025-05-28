---
permalink: /foundations/utilities/flex/
title: Flexbox
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---

# Flexbox
These utility classes are used to create a flexbox layout. Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

## Flex
{% set preview %}
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-1</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
      <span class="utility-class">.nys-flex-1</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
      <span class="utility-class">.nys-flex-1</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
      <span class="utility-class">.nys-flex-1</span>
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-2">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-2</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center"> </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-3">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-3</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-4">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-4</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-5">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-5</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-6">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-6</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-7">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-7</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-8">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-8</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-9">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-9</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-10">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-10</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-11">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-11</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-12">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-12</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-auto">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-auto</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>
<div class="nys-grid-row nys-grid-gap-sm margin-bottom-1">
  <div class="nys-grid-col nys-flex-fill">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center padding-x-105">
      <span class="utility-class text-no-wrap">.nys-flex-fill</span>
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
  <div class="nys-grid-col nys-flex-1">
    <div class="height-6 width-full nys-display-flex nys-flex-align-center border border-base-dark bg-white nys-flex-justify-center">
    </div>
  </div>
</div>{% endset %}
{% set code %}<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-1"></div>
  <div class="nys-grid-col nys-flex-1"></div>
  <div class="nys-grid-col nys-flex-1"></div>
  <div class="nys-grid-col nys-flex-1"></div>
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-2"></div>
  <div class="nys-grid-col nys-flex-1"></div>
  <div class="nys-grid-col nys-flex-1"></div>
  <div class="nys-grid-col nys-flex-1"></div>
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-3"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-4"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-5"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-6"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-7"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-8"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-9"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-10"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-11"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-12"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-auto"></div>
  ...
</div>
<div class="nys-grid-row">
  <div class="nys-grid-col nys-flex-fill"></div>
  ...
</div>{% endset %}
{% include "partials/code-preview.njk" %}

## Flex-direction
{% set preview %}
<div class="border padding-1 radius-md margin-bottom-2">
  <span class="utility-class">.nys-flex-column</span>
  <div class="nys-grid-row nys-flex-column margin-top-2">
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
  </div>
</div>
<div class="border padding-1 radius-md">
  <span class="utility-class">.nys-flex-row</span>
  <div class="nys-grid-row nys-flex-row margin-top-2">
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
    <div class="nys-grid-col nys-flex-1 padding-1px">
      <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
      </div>
    </div>
  </div>
</div>
{% endset %}
{% set code %}<div class="nys-grid-row nys-flex-column">
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
</div>
<div class="nys-grid-row nys-flex-row">
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
  <div class="nys-grid-col"></div>
</div>
{% endset %}
{% include "partials/code-preview.njk" %}

## Flex-wrap
{% set preview %}
<div class="border padding-1 radius-md margin-bottom-2">
    <span class="utility-class">.nys-flex-wrap</span>
    <div class="nys-grid-row nys-flex-wrap margin-top-2">
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
    </div>
  </div>
  <div class="border padding-1 radius-md">
    <span class="utility-class">.nys-flex-no-wrap</span>
    <div class="nys-grid-row nys-flex-no-wrap margin-top-2">
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
      <div class="nys-grid-col-4 padding-1px">
        <div class="height-6 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          <span class="utility-class">.nys-grid-col-4</span>
        </div>
      </div>
    </div>
  </div>{% endset %}
{% set code %}<div class="nys-grid-row nys-flex-wrap">
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
</div>
<div class="nys-grid-row nys-flex-no-wrap">
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
  <div class="nys-grid-col-4"></div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

## Flex-align
{% set preview %}
  <div class="border padding-1 radius-md margin-bottom-2">
    <div class="padding-bottom-4 border-bottom margin-bottom-2">
      <span class="utility-class">.nys-flex-column</span>
    </div>
    <span class="utility-class">.nys-flex-align-start</span>
    <div class="nys-grid-row nys-flex-column nys-flex-align-start margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
    </div>
    <span class="utility-class">.nys-flex-align-center</span>
    <div class="nys-grid-row nys-flex-column nys-flex-align-center margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
    </div>
    <span class="utility-class">.nys-flex-align-end</span>
    <div class="nys-grid-row nys-flex-column nys-flex-align-end margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
    </div>
    <span class="utility-class">.nys-flex-align-stretch</span>
    <div class="nys-grid-row nys-flex-column nys-flex-align-stretch margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
      <div class="nys-grid-auto padding-1px">
        <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
        </div>
      </div>
    </div>
  </div>
  <div class="border padding-1 radius-md">
    <div class="padding-bottom-4 border-bottom margin-bottom-2">
      <span class="utility-class">.nys-flex-row</span>
    </div>
      <span class="utility-class">.nys-flex-align-start</span>
      <div class="nys-grid-row nys-flex-row nys-flex-align-start margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
      <span class="utility-class">.nys-flex-align-center</span>
      <div class="nys-grid-row nys-flex-row nys-flex-align-center margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
      <span class="utility-class">.nys-flex-align-end</span>
      <div class="nys-grid-row nys-flex-row nys-flex-align-end margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
      <span class="utility-class">.nys-flex-align-stretch</span>
      <div class="nys-grid-row nys-flex-row nys-flex-align-stretch margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
  </div>
</div>{% endset %}
{% set code %}<div class="nys-display-flex nys-flex-column nys-flex-align-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-align-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-align-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-align-stretch">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-align-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-align-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-align-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-align-stretch">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

## Flex-align-self
{% set preview %}
<div class="border padding-1 radius-md margin-bottom-2">
  <div class="padding-bottom-4 border-bottom margin-bottom-2">
    <span class="utility-class">.nys-flex-column</span>
  </div>
  <div class="nys-grid-row nys-flex-column margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2 minh-card margin-x-neg-05 nys-flex-no-wrap">
    <div class="nys-flex-1 padding-1px nys-flex-align-self-start nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-start</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-center nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-center</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-end nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-end</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-stretch nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-stretch</span>
    </div>
  </div>
  </div>
<div class="border padding-1 radius-md">
  <div class="padding-bottom-4 border-bottom margin-bottom-2">
    <span class="utility-class">.nys-flex-row</span>
  </div>
  <div class="nys-grid-row nys-flex-row margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2 minh-card margin-x-neg-05 nys-flex-no-wrap">
    <div class="nys-flex-1 padding-1px nys-flex-align-self-start nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-start</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-center nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-center</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-end nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-end</span>
    </div>
    <div class="nys-flex-1 padding-1px nys-flex-align-self-stretch nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
      <span class="utility-class">.nys-flex-align-self-stretch</span>
    </div>
  </div>
  </div>
{% endset %}
{% set code %}<div class="nys-display-flex nys-flex-column">
  <div class="nys-flex-align-self-start"></div>
  <div class="nys-flex-align-self-center"></div>
  <div class="nys-flex-align-self-end"></div>
  <div class="nys-flex-align-self-stretch"></div>
</div>
<div class="nys-display-flex nys-flex-row">
  <div class="nys-flex-align-self-start"></div>
  <div class="nys-flex-align-self-center"></div>
  <div class="nys-flex-align-self-end"></div>
  <div class="nys-flex-align-self-stretch"></div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

## Flex-justify
{% set preview %}
<div class="border padding-1 radius-md margin-bottom-2">
  <div class="padding-bottom-4 border-bottom margin-bottom-2">
    <span class="utility-class">.nys-flex-row</span>
  </div>
    <span class="utility-class">.nys-flex-justify</span>
      <div class="nys-grid-row nys-flex- nys-flex-justify margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
    <span class="utility-class">.nys-flex-justify-start</span>
      <div class="nys-grid-row nys-flex- nys-flex-justify-start margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
    <span class="utility-class">.nys-flex-justify-center</span>
      <div class="nys-grid-row nys-flex- nys-flex-justify-center margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
    <span class="utility-class">.nys-flex-justify-end</span>
      <div class="nys-grid-row nys-flex- nys-flex-justify-end margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-7 minw-7 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-8 minw-8 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-9 minw-9 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
        <div class="nys-grid-auto padding-1px">
          <div class="height-full minh-10 minw-10 width-full nys-display-flex nys-flex-align-center bg-secondary-light nys-flex-justify-center">
          </div>
        </div>
      </div>
  </div>
{% endset %}
{% set code %}<div class="nys-display-flex nys-flex-column nys-flex-justify">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-justify-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-justify-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-column nys-flex-justify-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-justify">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-justify-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-justify-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
<div class="nys-display-flex nys-flex-row nys-flex-justify-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

## Order
{% set preview %}
<div class="nys-grid-row nys-grid-gap-sm">
    <div class="nys-grid-col-auto nys-order-11">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 1</span>
        <span class="utility-class">.nys-order-11</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-10">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 2</span>
        <span class="utility-class">.nys-order-10</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-9">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 3</span>
        <span class="utility-class">.nys-order-9</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-8">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 4</span>
        <span class="utility-class">.nys-order-8</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-7">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 5</span>
        <span class="utility-class">.nys-order-7</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-6">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 6</span>
        <span class="utility-class">.nys-order-6</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-5">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 7</span>
        <span class="utility-class">.nys-order-5</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-4">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 8</span>
        <span class="utility-class">.nys-order-4</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-3">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 9</span>
        <span class="utility-class">.nys-order-3</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-2">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 10</span>
        <span class="utility-class">.nys-order-2</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-1">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 11</span>
        <span class="utility-class">.nys-order-1</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-0">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 12</span>
        <span class="utility-class">.nys-order-0</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-initial">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 13</span>
        <span class="utility-class">.nys-order-initial</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-last">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 14</span>
        <span class="utility-class">.nys-order-last</span>
      </div>
    </div>
    <div class="nys-grid-col-auto nys-order-first">
      <div class="padding-x-1 padding-y-1 border border-secondary-light bg-white margin-y-1px nys-display-flex nys-flex-column nys-flex-align-start">
        <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: 15</span>
        <span class="utility-class">.nys-order-first</span>
      </div>
    </div>
</div>
{% endset %}
{% set code %}<div class="nys-grid-row">
  <div class="nys-grid-col nys-order-11"></div>
  <div class="nys-grid-col nys-order-10"></div>
  <div class="nys-grid-col nys-order-9"></div>
  <div class="nys-grid-col nys-order-8"></div>
  <div class="nys-grid-col nys-order-7"></div>
  <div class="nys-grid-col nys-order-6"></div>
  <div class="nys-grid-col nys-order-5"></div>
  <div class="nys-grid-col nys-order-4"></div>
  <div class="nys-grid-col nys-order-3"></div>
  <div class="nys-grid-col nys-order-2"></div>
  <div class="nys-grid-col nys-order-1"></div>
  <div class="nys-grid-col nys-order-0"></div>
  <div class="nys-grid-col nys-order-initial"></div>
  <div class="nys-grid-col nys-order-last"></div>
  <div class="nys-grid-col nys-order-first"></div>
</div>{% endset %}
{% include "partials/code-preview.njk" %}

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}