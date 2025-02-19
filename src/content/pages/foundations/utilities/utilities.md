---
permalink: /foundations/utilities/utilities/
title: Utilities
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
parent: Utilities
layout: layouts/3-col.njk
---

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}


# Utilities

## Display
<section class="utility-examples" id="display">

  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-block</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">block</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-block"> </div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-flex</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">flex</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-flex"></div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-inline</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">inline</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-inline"></div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-inline-block</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">inline-block</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-inline-block"></div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-inline-flex</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">inline-flex</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-inline-flex"></div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-none</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">none</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-none"></div>
      </div>
    </div>
  </div>
  <div class="utility-example-container">
    <div class="nys-grid-row flex-justify">
      <div class="nys-grid-col utility-example-class nys-grid-col-12 nys-tablet:nys-grid-col">
        <span class="utility-class">.nys-display-table-cell</span>
      </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">table-cell</span>
      </div>
      <div class="nys-grid-col utility-example">
        <div class="nys-display-table">
          <div class="nys-display-table-row">
            <div class="nys-display-table-cell border-1px border-white bg-secondary-light padding-x-5 padding-y-3"></div>
            <div class="nys-display-table-cell border-1px border-white bg-secondary-light padding-x-5 padding-y-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

## Opacity

<section class="utility" id="opacity">
    <section class="utility-examples">
        <div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-0
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-0 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-0 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
        <div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-10
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.1
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-10 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-10 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>

<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-20
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.2
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-20 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-20 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-30
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.3
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-30 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-30 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-40
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.4
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-40 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-40 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-50
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.5
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-50 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-50 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-60
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.6
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-60 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-60 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-70
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.7
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-70 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-70 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-80
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.8
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-80 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-80 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-90
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          0.9
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-90 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-90 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
<div class="utility-example-container">
  <div class="nys-grid-row flex-no-wrap">
    <div class="nys-grid-col utility-example-class">
      <span class="utility-class">
          .nys-opacity-100
        </span>
    </div>
      <div class="nys-grid-col utility-example-value">
        <span class="utility-value">
          1
        </span>
      </div>
      <div class="utility-example nys-grid-col-6">
          <div class="bg-primary nys-grid-row radius-sm height-4 padding-x-1 flex-align-center">
            <div class="nys-grid-col nys-opacity-100 height-05 bg-white"></div>
            <div class="nys-grid-col nys-opacity-100 height-05 bg-black"></div>
          </div>
      </div>
  </div>
</div>
</section>

</section>

## Z-index

<section class="utility nys-z-0 position-relative" id="z-index">
  <section class="utility-examples position-relative padding-bottom-1">
    <div class="bg-white border-ink radius-lg width-card-lg padding-2  minh-10 margin-left-0 nys-display-flex nys-flex-justify nys-flex-align-start nys-z-auto">
      <span class="utility-class">.nys-z-auto</span>
      <span class="utility-value">auto</span>
    </div>
    <div class="bg-white border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-top position-relative shadow-3">
      <span class="utility-class">.nys-z-top</span>
      <span class="utility-value">99999</span>
    </div>
    <div class="bg-gray-1 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-500 position-relative shadow-3">
      <span class="utility-class">.nys-z-500</span>
      <span class="utility-value">500</span>
    </div>
    <div class="bg-gray-10 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-400 position-relative shadow-3">
      <span class="utility-class">.nys-z-400</span>
      <span class="utility-value">400</span>
    </div>
    <div class="bg-gray-30 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-300 position-relative shadow-3">
      <span class="utility-class">.nys-z-300</span>
      <span class="utility-value">300</span>
    </div>
    <div class="bg-gray-50 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-200 position-relative shadow-3">
      <span class="utility-class">.nys-z-200</span>
      <span class="utility-value">200</span>
    </div>
    <div class="bg-gray-70 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-100 position-relative shadow-3">
      <span class="utility-class">.nys-z-100</span>
      <span class="utility-value">100</span>
    </div>
    <div class="bg-gray-90 border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-0 position-relative shadow-3">
      <span class="utility-class">.nys-z-0</span>
      <span class="utility-value">0</span>
    </div>
    <div class="bg-black border-ink radius-lg nys-display-flex nys-flex-justify nys-flex-align-start margin-top-neg-3 nys-z-bottom position-relative shadow-3">
      <span class="utility-class">.nys-z-bottom</span>
      <span class="utility-value">-100</span>
    </div>
  </section>
</section>

## Float
<section class="utility-examples" id="float">
  <p class="nys-float-none bg-base-lighter padding-2"><span class="utility-class">.nys-float-none</span></p>
  <p class="nys-float-left bg-base-lighter padding-2"><span class="utility-class">.nys-float-left</span></p>
  <p class="nys-float-right bg-base-lighter padding-2"><span class="utility-class">.nys-float-right</span></p>
</section>
