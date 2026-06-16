---
permalink: /components/unav-footer/
title: UNav Footer
description: Required statewide footer displaying the NY.gov logo and links to Agencies, Counties, Events, Programs, and Services.
image: /assets/img/components/unav-footer.svg
image_alt: An illustration of a unav footer.
image_header: /assets/img/components/unav-footer-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=3950-17615&p=f&t=918yJHrW82nLa5QX-0
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-unavfooter>` component renders the Universal Navigation Footer -- a standardized statewide footer that displays the NY.gov logo and links to Agencies, App Directory, Counties, Events, Programs, and Services. It is a required element on all New York State websites and applications, ensuring consistent statewide branding and navigation across every digital product.

{% endblock %}

{% block example %}
{% set preview %}
<nys-unavfooter></nys-unavfooter>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usagedo %}

- Place the `<nys-unavfooter>` as the last element on every public-facing page, immediately after `<nys-globalfooter>`.
  - Use on every page of every NYS site and application. This component is required per NYS web policy, including on error pages, login screens, and landing pages.
  - Place as the very last element on the page, immediately after `<nys-globalfooter>`.
  - Use as-is with no configuration. The component handles its own content and styling.

{% endblock %}

{% block usagedont %}

- Don't use on back office applications or internal sites that are not public-facing.
- Place anywhere other than the absolute bottom of the page.
- Customize, restyle, or override the component's content or appearance. Consistency across all state sites is the purpose of this component.

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
