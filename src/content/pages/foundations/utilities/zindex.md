---
permalink: /foundations/utilities/zindex/
title: Z-Index
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

# Z-index

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