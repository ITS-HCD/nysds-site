---
permalink: /components/badge/
title: Badge
description: Provides a visual indicator of categories.
image: /assets/img/components/badge.svg
image_alt: An illustration of a badge.
image_header: /assets/img/components/badge-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=5409-1651
navOrder: 5
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-badge>` component provides a visual indicator of text values like categories.

{% endblock %}

{% block example %}
{% set preview %}
<nys-badge label="Basic badge"></nys-badge>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

 - To display a small piece of information that is related to another element.
 - To draw attention to new, important content.
 - To indicate the status of an item, such as "new", "updated", or "beta".
 - To provide additional context or information about an item without cluttering the interface.

### When to consider something else

  - When the information is too complex to be conveyed in a small badge.
  - When the badge would not add significant value to the user experience.
  - When the badge would clutter the interface or distract from more important content.
  - As a link to another page or action, as badges are not interactive elements.
{% endblock %}

{% block usagedo %}

  - To display a small piece of information that is related to another element.
  - To draw attention to new, important content.
  - To indicate the status of an item, such as "new", "updated", or "beta".
  - To provide additional context or information about an item without cluttering the interface.
{% endblock %}

{% block usagedont %}

  - When the information is too complex to be conveyed in a small badge.
  - When the badge would not add significant value to the user experience.
  - When the badge would clutter the interface or distract from more important content.
  - As a link to another page or action, as badges are not interactive elements.
{% endblock %}

{% block accessibility %}

The `<nys-badge>` component is read by screen readers appropriately.
{% endblock %}

{% block options %}

### Intent
Below are the available badge intents, each showcasing its unique style and purpose. The default intent is `neutral`.

{% set preview %}
<div class="nys-grid-row nys-grid-gap-1">
  <nys-badge label="Neutral" prefixIcon></nys-badge>
  <nys-badge label="Error" intent="error" prefixIcon></nys-badge>
  <nys-badge label="Warning" intent="warning" prefixIcon></nys-badge>
  <nys-badge label="Success" intent="success" prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}<nys-badge label="Neutral" prefixIcon></nys-badge>
<nys-badge label="Error" intent="error" prefixIcon></nys-badge>
<nys-badge label="Warning" intent="warning" prefixIcon></nys-badge>
<nys-badge label="Success" intent="success" prefixIcon></nys-badge>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}

### Variant
Add `variant="strong"` for badges on a raised surface or for more emphasis.

{% set preview %}
<div class="nys-grid-row nys-grid-gap-1">
  <nys-badge label="Neutral" variant="strong" prefixIcon></nys-badge>
  <nys-badge label="Error" intent="error" variant="strong" prefixIcon></nys-badge>
  <nys-badge label="Warning" intent="warning" variant="strong" prefixIcon></nys-badge>
  <nys-badge label="Success" intent="success" variant="strong" prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}<nys-badge label="Neutral" variant="strong" prefixIcon></nys-badge>
<nys-badge label="Error" intent="error" variant="strong" prefixIcon></nys-badge>
<nys-badge label="Warning" intent="warning" variant="strong" prefixIcon></nys-badge>
<nys-badge label="Success" intent="success" variant="strong" prefixIcon></nys-badge>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}

### Icons
Badge can include icons as either a prefix or suffix. The icons can be specified using the `prefixIcon` or `suffixIcon` attributes. Pass in the attribute as a boolean to use the default icon, or pass in a string to use a specific icon. Icons do not appear by default and must be explicitly specified.

{% set preview %}
<div class="nys-grid-row nys-grid-gap-1">
  <nys-badge label="Default neutral" prefixIcon></nys-badge>
  <nys-badge label="Default neutral" suffixIcon></nys-badge>
  <nys-badge label="Custom neutral" prefixIcon="check"></nys-badge>
  <nys-badge label="Custom neutral" suffixIcon="check"></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Default neutral" prefixIcon></nys-badge>
<nys-badge label="Default neutral" suffixIcon></nys-badge>
<nys-badge label="Custom neutral" prefixIcon="check"></nys-badge>
<nys-badge label="Custom neutral" suffixIcon="check"></nys-badge>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}

### Size
Badge is available in two sizes: `md` and `sm`. The size can be specified using the `size` attribute. The default size is `md`.

**Note:** Do not mix sizes within a group of badges.

{% set preview %}
<div class="nys-grid-row nys-grid-gap-1">
  <nys-badge label="Medium"></nys-badge>
  <nys-badge label="Small" size="sm"></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Medium"></nys-badge>
<nys-badge label="Small" size="sm"></nys-badge>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}

### Prefix Label
Badge can include a prefix label, which is a short text that appears before the main label. The prefix label can be specified using the `prefixLabel` attribute.

{% set preview %}
<div class="nys-grid-row nys-grid-gap-1">
  <nys-badge label="Stable" prefixIcon="code"></nys-badge>
  <nys-badge prefixLabel="WCAG 2.2" label="AA" intent="success" prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Stable" prefixIcon="code"></nys-badge>
<nys-badge prefixLabel="WCAG 2.2" label="AA" intent="success" prefixIcon></nys-badge>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}


{% endblock %}


{% block properties %}

<nys-table striped>
  <table>
    <tr>
        <th>Property</th>
        <th>Type</th>
    </tr>
    <tr>
        <td><code>id</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>label</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>name</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>size</code></td>
        <td><code>"md"</code>, <code>"sm"</code></td>
    </tr>
    <tr>
        <td><code>intent</code></td>
        <td><code>"neutral"</code>, <code>"error"</code>, <code>"success"</code>, <code>"warning"</code></td>
    </tr>
    <tr>
        <td><code>variant</code></td>
        <td><code>"strong"</code></td>
    </tr>
    <tr>
        <td><code>prefix</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>prefixIcon</code></td>
        <td>String</td>
    </tr>
    <tr>
        <td><code>suffixIcon</code></td>
        <td>String</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
