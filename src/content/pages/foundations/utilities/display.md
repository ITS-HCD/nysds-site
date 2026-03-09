---
permalink: /foundations/utilities/display/
title: Display
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
---
{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}

# Display
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