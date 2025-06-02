---
permalink: /components/unav-footer/
title: UNav Footer
description: Provide users with access to essential NYS links across all pages.
image: /assets/img/components/unav-footer.svg
image_alt: An illustration of a unav footer.
image_header: /assets/img/components/unav-footer-header.svg
navOrder: 15
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-unavfooter&gt;</code> is a reusable web component for use in New York State digital products. It helps provide users with access to essential NYS links across all pages.

{% endblock %}

{% block example %}
  {% set preview %}<nys-unavfooter></nys-unavfooter>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use <code class="language-js">&lt;nys-unavfooter&gt;</code> to provide consistent access to essential links across all sites.
### When to consider something else
  - Do not place the <code class="language-js">&lt;nys-unavfooter&gt;</code> anywhere other than the bottom of the page as the final footer.

{% endblock %}

{% block usagedo %}

  - Place it only at the bottom of the page as the final footer.

{% endblock %}

{% block usagedont %}

  - Place it anywhere other than the bottom of the page.

{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-unavfooter&gt;</code> component includes the following accessibility-focused features:

  - Proper use of `<footer>` and `<a>` elements ensures compatibility with assistive technologies.
  - Keyboard navigation: Users can tab through all links in the footer.
{% endblock %}

{% block options %}
There are no configurable options for this component. It is intended to be used as-is to ensure consistency across all New York State digital products.
{% endblock %}

{% block properties %}{% endblock %}

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
    </tr>
  </tbody>
</table>

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
