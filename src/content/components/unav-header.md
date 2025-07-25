---
permalink: /components/unav-header/
title: UNav Header
description: A small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.
image: /assets/img/components/unav-header.svg
image_alt: An illustration of a unav header.
image_header: /assets/img/components/unav-header-header.svg
navOrder: 19
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-unavheader>` is a reusable web component for use in New York State digital products. It helps provide users with a small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.

**Note:** The Universal Navigation Header remains consistent across all sites.

{% endblock %}

{% block example %}
  {% set preview %}<nys-unavheader></nys-unavheader>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
  - Use `<nys-unavheader>` at the top of every page.
### When to consider something else
  - Do not place the `<nys-unavheader>` anywhere other than the top of the page.

{% endblock %}

{% block usagedo %}

  - Place it only at the top of the page as the final footer.
  - Toggle search and translate on/off depending on your needs

{% endblock %}

{% block usagedont %}

  - Don't place it anywhere other than the top of the page.
  - Don't modify the header

{% endblock %}

{% block accessibility %}

The `<nys-unavheader>` component includes the following accessibility-focused features:

  - Proper use of `<header>` and `<a>` elements ensures compatibility with assistive technologies.
  - Keyboard navigation: Users can tab through all links in the header.
{% endblock %}

{% block options %}

### Search Off
  {% set preview %}
    <nys-unavheader hideSearch></nys-unavheader>
  {% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Translate Off
  {% set preview %}
    <nys-unavheader hideTranslate></nys-unavheader>
  {% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property        | Type    |
|-----------------|---------|
| `hideSearch`    | boolean |
| `hideTranslate` | boolean |

{% endblock %}



{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
