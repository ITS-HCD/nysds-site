---
permalink: /components/table/
title: Table
description: A structured layout that displays data in rows and columns to help users scan, compare, and understand information efficiently.
image: /assets/img/components/table.svg
image_alt: An illustration of a table.
image_header: /assets/img/components/table-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4897-5811
navOrder: 19
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-table>` is a reusable web component for use in New York State digital products. It provides a structured layout that displays data in rows and columns to help users scan, compare, and understand information efficiently.

{% endblock %}

{% block example %}
  {% set preview %}
<div class="nys-grid-row">
  <nys-table>
  </nys-table>
</div>
  {% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
- TODO
- TODO

### When to consider something else
- TODO
- TODO

{% endblock %}

{% block usagedo %}

- TODO
- TODO
- TODO

{% endblock %}

{% block usagedont %}

- TODO
- TODO

{% endblock %}

{% block accessibility %}

The `nys-table` component includes the following accessibility-focused features:

- TODO
- TODO

{% endblock %}

{% block options %}

### Option 1

### Option 2

{% endblock %}

{% block properties %}

| Property       | Type         | Component     | 
|----------------|--------------|---------------|
| `id`           | String       | `nys-table` |
| `name`         | String       | `nys-table` |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-table>` component does not emit any events.

{% endblock %}

{% block updates %}{% endblock %}