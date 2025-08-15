---
permalink: /components/unav-footer/
title: UNav Footer
description: Provide users with access to essential NYS links across all pages.
image: /assets/img/components/unav-footer.svg
image_alt: An illustration of a unav footer.
image_header: /assets/img/components/unav-footer-header.svg
navOrder: 18
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-unavfooter`> is a reusable web component for use in New York State digital products. It helps provide users with access to essential NYS links across all pages.

{% endblock %}

{% block example %}
  {% set preview %}<nys-unavfooter></nys-unavfooter>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use `<nys-unavfooter`> to provide consistent access to essential links across all sites.
### When to consider something else
  - Do not place the `<nys-unavfooter`> anywhere other than the bottom of the page as the final footer.

{% endblock %}

{% block usagedo %}

  - Place it only at the bottom of the page as the final footer.

{% endblock %}

{% block usagedont %}

  - Don't place it anywhere other than the bottom of the page.

{% endblock %}

{% block accessibility %}

The `<nys-unavfooter`> component includes the following accessibility-focused features:

  - Proper use of `<footer>` and `<a>` elements ensures compatibility with assistive technologies.
  - Keyboard navigation: Users can tab through all links in the footer.
{% endblock %}

{% block options %}
There are no configurable options for this component. It is intended to be used as-is to ensure consistency across all New York State digital products.
{% endblock %}

{% block properties %}

There are no properties for this component.

{% endblock %}

{% block cssvariables %}

The `nys-unavfooter` does not have any css variables because this component must remain consistent across applications and sites.

{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
