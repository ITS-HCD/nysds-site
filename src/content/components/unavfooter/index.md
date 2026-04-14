---
permalink: /components/unav-footer/
title: UNav Footer
description: Required statewide footer displaying the NY.gov logo and links to Agencies, Counties, Events, Programs, and Services.
image: /assets/img/components/unav-footer.svg
image_alt: An illustration of a unav footer.
image_header: /assets/img/components/unav-footer-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=3981-10268
navOrder: 27
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-unavfooter>` component renders the Universal Navigation Footer -- a standardized statewide footer that displays the NY.gov logo and links to Agencies, App Directory, Counties, Events, Programs, and Services. It is a required element on all New York State websites and applications, ensuring consistent statewide branding and navigation across every digital product.

{% endblock %}

{% block example %}
  {% set preview %}<nys-unavfooter></nys-unavfooter>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use on every New York State website and application. The Universal Navigation Footer is a required element per NYS web policy.
  - Place as the very last element in the page, below `<nys-globalfooter>`. Together, these two components form the complete footer structure: the Global Footer provides agency-specific links, and the UNav Footer provides statewide links.

### When to consider something else
  - There is no alternative. This component is required on all NYS sites. Do not replace it with a custom footer.
  - Do not place the UNav Footer anywhere other than the absolute bottom of the page.

{% endblock %}

{% block usagedo %}

  - Place the `<nys-unavfooter>` as the last element on every page, immediately after `<nys-globalfooter>`.
  - Include it on every page of your site, including error pages, login screens, and landing pages.
  - Use it as-is with no configuration. The component handles its own content and styling.

{% endblock %}

{% block usagedont %}

  - Don't place the UNav Footer anywhere other than the absolute bottom of the page.
  - Don't attempt to customize, restyle, or override the UNav Footer's content or appearance. Consistency across all state sites is the purpose of this component.
  - Don't omit the UNav Footer from any page on your site.

{% endblock %}

{% block accessibility %}

The `<nys-unavfooter>` component includes the following accessibility-focused features:

  - Renders a `<footer>` landmark element, which screen readers identify as a `contentinfo` region. When both `<nys-globalfooter>` and `<nys-unavfooter>` are present, the page has two `contentinfo` landmarks, both discoverable by assistive technology.
  - The NY.gov logo link includes an `aria-label` of "logo of New York State" for screen readers.
  - All statewide navigation links use standard `<a>` elements, ensuring they are keyboard-focusable and announced correctly.
  - Keyboard navigation: users can `Tab` through all links in the footer in logical reading order.
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

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
