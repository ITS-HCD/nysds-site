---
permalink: /components/
title: Web Components
description: The NYS Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Components
layout: layouts/2-col.njk
navOrder: 1
---

{% block content %}
<div class="nys-grid-container-widescreen">
  <header class="page-header">
    <h1 class="page-title">Web Components</h1>
    <div class="page-subtitle nys-grid-row nys-grid-gap">
      <p class="nys-tablet:nys-grid-col-8">The NYS Design System includes a library of web components that serve as building blocks to help developers create consistent digital products. Each component page includes examples, guidance, accessibility considerations, and options.</p>
    </div>
  </header>

<section class="nys-grid-row nys-grid-gap-lg">  {%- for post in collections.components -%}
  <div class="nys-mobile-lg:nys-grid-col-6 nys-tablet:nys-grid-col-4 nys-desktop:nys-grid-col-4 nys-display-flex">
    <a class="card nys-flex-fill" href="{{ post.url | url }}" title="{{ post.data.title }} Component">
      <div class="card__inner">
        <div class="card__media">          {% if post.data.image %}
            <img src="{{ post.data.image | url }}" alt="{{ post.data.image_alt }}"></div>          {% else %}
            <img src="../assets/img/components/placeholder.svg" alt="Placeholder"></div>          {% endif %}
        <div class="card__title">{{ post.data.title }}</div>
        <div class="card__desc">{{ post.data.description }}</div>
      </div>
    </a>
  </div>  {%- endfor -%}
</section>

<!-- Section for linking people to GitHub discussion to suggest new components -->
<section class="nys-section">
  <h2>Suggest a New Component</h2>
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-tablet:nys-grid-col-8">
      <p>
        Do you have an idea for a new NYS Design System web component? Look through the existing proposals in our GitHub discussions board to see if someone already proposed something similar. If not, feel free to submit one.
      </p>
    </div>
    <div class="nys-tablet:nys-grid-col-12">
      <nys-button label="Review component proposals" href="https://github.com/ITS-HCD/nysds/discussions/categories/component-proposals"></nys-button>
    </div>
  </div>
</section>
</div>
{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}