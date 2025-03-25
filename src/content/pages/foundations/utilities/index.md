---
permalink: /foundations/utilities/
title: "Utilities"
description: "The New York State Design System makes it easier to build accessible, usable websites for New York State."
---

{% block content %}

# Utilities

<section class="nys-grid-row nys-grid-gap">
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url }}/foundations/utilities/utilities">
      <div class="card__inner">
        <div class="card__media">
          <img src="{{ site.url | url }}/assets/img/components/placeholder.svg" alt="Accessibility"></div>
        <div class="card__title">General Utilities</div>
        <div class="card__desc">Utility classes for display, float, opacity, and z-index</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/utilities/flex">
      <div class="card__inner">
        <div class="card__media">
          <img src="{{ site.url | url }}/assets/img/components/placeholder.svg" alt="Flexbox"></div>
        <div class="card__title">Flexbox</div>
        <div class="card__desc">These utility classes are used to create a flexbox layout.</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/utilities/grid">
      <div class="card__inner">
        <div class="card__media">
          <img src="{{ site.url | url }}/assets/img/components/placeholder.svg" alt="Layout Grid"></div>
        <div class="card__title">Layout Grid</div>
        <div class="card__desc">The grid is mobile-first, powered by flexbox, and based on a 12-column system.</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/utilities/typography">
      <div class="card__inner">
        <div class="card__media">
          <img src="{{ site.url | url}}/assets/img/components/placeholder.svg" alt="Typography"></div>
        <div class="card__title">Typography</div>
        <div class="card__desc">Utility classes for typography elements.</div>
      </div>
    </a>
  </div>
</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}