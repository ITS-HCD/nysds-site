---
title: Web Components
layout: layouts/base.njk
permalink: /components/
description: asdf
long_description: asdf
navOrder: 1
section: Components
---
<div class="nys-grid-container-widescreen">
<h1>Web Components</h1>

<section class="nys-grid-row nys-grid-gap">
  <div class="nys-tablet:nys-grid-col-8">
    <div class="content-intro">
      <div class="content-intro__inner">  
        <p>
          NYSDS offers a library of web components. These building blocks help designers and developers create consistent digital products for New York State. Each component includes examples, guidance, accessibility considerations, and options.
        </p>
      </div>
    </div>
  </div>
  <div class="nys-tablet:nys-grid-col-4">
  </div>
</section>

<section class="nys-grid-row nys-grid-gap-6"> {% for post in collections.components %} <div class="nys-mobile-lg:nys-grid-col-6 nys-tablet:nys-grid-col-4 nys-desktop:nys-grid-col-3 nys-display-flex">   <a class="card nys-flex-fill" href="{{ post.url | url }}" title="{{ post.data.title }} Component">     <div class="card__inner">       <div class="card__media">         {% for smallimage in post.data.imagery %}           {% if smallimage.smallcardimage %}             <img src="{{ smallimage.smallcardimage }}" alt="{{ smallimage.smallcardimagealt |safe }}">           {% endif %}         {% endfor %}         <div class="card__title">{{ post.data.title }}</div>         <div class="card__desc">{{ post.data.description }}</div>       </div>     </div>   </a> </div> {%- endfor -%}</section>

<!-- Section for linking people to GitHub discussion to suggest new components -->
<section class="nys-section">
  <h2>Suggest a New Component</h2>
  <div class="nys-grid-row nys-grid-gap">
    <div class="nys-tablet:nys-grid-col-8">
      <p>
        Do you have an idea for a new NYSDS web component? Look through the existing proposals in our GitHub discussions board to see if someone already proposed something similar. If not, feel free to submit one.
      </p>
    </div>
    <div class="nys-tablet:nys-grid-col-4">
      <nys-button fullWidth label="Review Component Proposals" href="https://github.com/ITS-HCD/nysds/discussions/categories/component-proposals"></nys-button>
    </div>
  </div>
</section>
</div>
