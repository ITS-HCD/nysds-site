---
permalink: /foundations/
title: Foundations
description: "Excelsior makes it easier to build accessible, usable websites for New York State."
---

{% block content %}

<h1>Foundations</h1>

<section class="nys-grid-row nys-grid-gap">
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url }}/foundations/accessibility">
      <div class="card__inner">
        <div class="card__media">
          <img src="{{ site.url | url }}/assets/img/components/placeholder.svg" alt="Accessibility"></div>
        <div class="card__title">Accessibility</div>
        <div class="card__desc">Accessibility means making digital experiences usable for everyone. This page covers NYS requirements, WCAG guidelines, and best practices.</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/design-guidelines">
      <div class="card__inner">
        <div class="card__media">
          <img src="../assets/img/components/placeholder.svg" alt="Design guidelines"></div>
        <div class="card__title">Design Guidelines</div>
        <div class="card__desc">A comprehensive system for color, typography, and other design elements to make it easier to create consistent and accessible interfaces.</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/design-tokens">
      <div class="card__inner">
        <div class="card__media">
          <img src="../assets/img/components/placeholder.svg" alt="Design tokens"></div>
        <div class="card__title">Design Tokens</div>
        <div class="card__desc">Reusable values for color, spacing, typography, layout, and more, that enables consistency and speed in design.</div>
      </div>
    </a>
  </div>
  <div class="nys-tablet:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ site.url | url}}/foundations/utilities">
      <div class="card__inner">
        <div class="card__media">
          <img src="../assets/img/components/placeholder.svg" alt="Utilities"></div>
        <div class="card__title">Utilities</div>
        <div class="card__desc">Utility classes for layout grid, flexbox, typography, display, opacity, and float.</div>
      </div>
    </a>
  </div>
</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}