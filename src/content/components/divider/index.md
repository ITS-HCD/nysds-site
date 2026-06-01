---
permalink: /components/divider/
title: Divider
description: Separates content and visually divides sections within layouts.
image: /assets/img/components/divider.svg
image_alt: An illustration of a divider.
image_header: /assets/img/components/divider-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=9008-683&t=Vm0dNpR7sqktYZPv-4
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
{%set showTip = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usagedo %}

- Use to separate dense content or to help users understand structure and hierarchy—prefer white space when content is already easy to parse.
- Ensure consistent padding/margin above and below dividers to avoid crowding.
- Use the `inverted` option on dark backgrounds.

{% endblock %}

{% block usagedont %}

- Overuse dividers—if content is already organized in groups, additional dividers reduce scannability.
- Use dividers to separate content appearing side by side.
- Use the `inverted` option on light backgrounds.

{% endblock %}

{% block accessibility %}

The `<nys-divider>` component includes the following accessibility-focused features:

- The native `<hr>` element is used to ensure ARIA compliance

{% endblock %}

{% block options %}

### Inverted

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

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>inverted</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-divider>` is a visual component that does not emit any events.

{% endblock %}

{% block updates %}{% endblock %}
