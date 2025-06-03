---
permalink: /foundations/utilities/margin-padding/
title: Margin and Padding
description: The New York State Design System makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Foundations
parent: Utilities
layout: layouts/3-col.njk
navOrder: 4
---

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
{% endblock %}


# Margin and Padding

## Margin

{% set preview %}
<div class="margin_example nys-margin-400" style="border: var(--nys-color-theme) solid 1px;">
.nys-margin-400
</div>
<div class="nys-padding-400" style="border: var(--nys-color-theme) solid 1px;">
.nys-padding-400
</div>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

## Padding
