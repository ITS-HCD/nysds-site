---
permalink: /components/badge/
title: Badge
description: Provides a visual indicator of categories.
image: /assets/img/components/badge.svg
image_alt: An illustration of a badge.
image_header: /assets/img/components/badge-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=8557-16575&t=ehyQYJeb6ohvHYV0-4
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

{% block accessibility %}

- The `<nys-badge>` text should be concise and immediately understandable (e.g., "New", "Beta", "Admin").
- Color Coding: Use color intentionally (e.g., red for errors, green for success).
- Size & Placement: It should be visible but not overpower the main content.
- There are no visual styles on badge (e.g., hover effects, underlines, cursor pointer) that make the badge appear clickable or interactive, it is not.
- Uses readable font sizes (12px for small, 14px for medium).
- Has proper color contrast
- The `<nys-badge>` component is read by screen readers appropriately.
- Always position `<nys-badge>` so that it's easy to understand what content it's related to.
  {% endblock %}

{% block options %}

### Intent

Below are the available badge intents, each showcasing its unique style and purpose. The default intent is `base`.

<nys-alert type="warning" heading="Intent names have changed!" primaryLabel="See v1.21.0 release notes" primaryAction="/about/updates/1.21.0-release/#nys-badge-updates">
<p>The <code>neutral</code> intent is now <code>base</code>, and <code>error</code> is now <code>danger</code>. Update your code to use the new intent names as soon as possible to avoid any issues with future releases.</p>
</nys-alert>

{% set preview %}

<div class="nys-grid-row nys-grid-gap-100">
  <nys-badge label="Base" prefixIcon></nys-badge>
  <nys-badge label="Info" intent="info" prefixIcon></nys-badge>
  <nys-badge label="Warning" intent="warning" prefixIcon></nys-badge>
  <nys-badge label="Success" intent="success" prefixIcon></nys-badge>
  <nys-badge label="Danger" intent="danger" prefixIcon></nys-badge>
  <nys-badge label="Emergency" intent="emergency" prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Base" prefixIcon></nys-badge>
<nys-badge label="Info" intent="info" prefixIcon></nys-badge>
<nys-badge label="Warning" intent="warning" prefixIcon></nys-badge>
<nys-badge label="Success" intent="success" prefixIcon></nys-badge>
<nys-badge label="Danger" intent="danger" prefixIcon></nys-badge>
<nys-badge label="Emergency" intent="emergency" prefixIcon></nys-badge>
{% endset %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Strong

Add the `strong` boolean attribute for badges on a raised surface or for more emphasis.

{% set preview %}

<div class="nys-grid-row nys-grid-gap-100">
  <nys-badge label="Base" strong prefixIcon></nys-badge>
  <nys-badge label="Info" intent="info" strong prefixIcon></nys-badge>
  <nys-badge label="Warning" intent="warning" strong prefixIcon></nys-badge>
  <nys-badge label="Success" intent="success" strong prefixIcon></nys-badge>
  <nys-badge label="Danger" intent="danger" strong prefixIcon></nys-badge>
  <nys-badge label="Emergency" intent="emergency" strong prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Base" strong prefixIcon></nys-badge>
<nys-badge label="Info" intent="info" strong prefixIcon></nys-badge>
<nys-badge label="Warning" intent="warning" strong prefixIcon></nys-badge>
<nys-badge label="Success" intent="success" strong prefixIcon></nys-badge>
<nys-badge label="Danger" intent="danger" strong prefixIcon></nys-badge>
<nys-badge label="Emergency" intent="emergency" strong prefixIcon></nys-badge>
{% endset %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Icons

Badge can include icons as either a prefix or suffix. The icons can be specified using the `prefixIcon` or `suffixIcon` attributes. Pass in the attribute as a boolean to use the default icon, or pass in a string to use a specific icon. Icons do not appear by default and must be explicitly specified.

{% set preview %}

<div class="nys-grid-row nys-grid-gap-100">
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
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Size

Badge is available in two sizes: `md` and `sm`. The size can be specified using the `size` attribute. The default size is `md`.

**Note:** Do not mix sizes within a group of badges.

{% set preview %}

<div class="nys-grid-row nys-grid-gap-100">
  <nys-badge label="Medium"></nys-badge>
  <nys-badge label="Small" size="sm"></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Medium"></nys-badge>
<nys-badge label="Small" size="sm"></nys-badge>
{% endset %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Prefix Label

Badge can include a prefix label, which is a short text that appears before the main label. The prefix label can be specified using the `prefixLabel` attribute.

{% set preview %}

<div class="nys-grid-row nys-grid-gap-100">
  <nys-badge label="Stable" prefixIcon="code"></nys-badge>
  <nys-badge prefixLabel="WCAG 2.2" label="AA" intent="success" prefixIcon></nys-badge>
</div>
{% endset %}
{% set code %}
<nys-badge label="Stable" prefixIcon="code"></nys-badge>
<nys-badge prefixLabel="WCAG 2.2" label="AA" intent="success" prefixIcon></nys-badge>
{% endset %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Screen Reader Text

Badge conveys intent through color and icon alone, which isn't accessible to screen reader users (WCAG 1.4.1). By default, badges with a semantic `intent` (anything other than `base`) prefix that intent to the announced text (e.g. "Warning: Caution"). Setting `srText` suppresses that automatic intent announcement and appends your own text after the label instead (e.g. "Caution: concern").

{% set preview %}
<nys-badge intent="warning" label="Caution" prefixIcon srText="concern"></nys-badge>
{% endset %}
{% set code %}
<nys-badge intent="warning" label="Caution" prefixIcon srText="concern"></nys-badge>
{% endset %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block dependencies %}

{% set dependencies = [
  "<nys-icon>"
] %}

{% include "partials/dependencies.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
