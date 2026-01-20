---
permalink: /components/divider/
title: Divider
description: Separates content and visually divides sections within layouts.
image: /assets/img/components/divider.svg
image_alt: An illustration of a divider.
image_header: /assets/img/components/divider-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=8420-575
navOrder: 8
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-divider>` component visually separates content or sections within an interface.

{% endblock %}

{% block example %}
{% set preview %}
<div>Sample content above</div>
<nys-divider></nys-divider>
<div>Sample content below</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

  - Use dividers for dense copy or when separating content helps users digest content, otherwise use white space.
  - Make sure the divider is helping users understand structure or hierarchy — not just adding visual decoration.

### When to consider something else

  - When content is formatted side bys side.
  - When content is already organized in groups.

{% endblock %}

{% block usagedo %}

  - Ensure consistent padding/margin above and below dividers to avoid crowding.
  - Use the `inverted` option on dark backgrounds.

{% endblock %}

{% block usagedont %}

  - Overuse dividers and clutter the interface, reducing scannability.
  - Use the divider to separate content appearing side bys side. 
  - Use the `inverted` option on light backgrounds.

{% endblock %}

{% block accessibility %}

The `<nys-divider>` component includes the following accessibility-focused features:

  - The native `<hr>` element is used to ensure ARIA compliance

{% endblock %}

{% block options %}

### Inverse
On dark background, add the `inverted` property to ensure the `<nys-divider>` is visible.
{% set preview %}
<div>Sample content above</div>
<nys-divider inverted></nys-divider>
<div>Sample content below</div>
{% endset %}
{% set inverted = true %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}

{% endblock %}


{% block properties %}

| Property   | Type         |
|------------|--------------|
| `inverted`  | boolean     |

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-divider>` is a visual component that does not emit any events.

{% endblock %}

{% block updates %}{% endblock %}
