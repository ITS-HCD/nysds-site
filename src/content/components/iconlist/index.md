---
permalink: /components/iconlist/
title: Icon List
description: Displays a collection of items paired with visual icons to create structured, scannable lists.
stable: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-iconlist>` component displays a collection of items paired with visual icons, making it easy to create structured, scannable lists across web projects. It is commonly used to present event details, requirements checklists, or contact information.

Add `<nys-iconlistitem>` elements as children of `<nys-iconlist>`. Each item accepts an `icon` attribute and uses its default slot for the primary label.

{% endblock %}

{% block example %}
{% set preview %}
<nys-iconlist id="event-details">
  <nys-iconlistitem icon="calendar_month">July 4, 2026</nys-iconlistitem>
  <nys-iconlistitem icon="schedule">5:00 PM</nys-iconlistitem>
  <nys-iconlistitem icon="location_on">Central Park West</nys-iconlistitem>
</nys-iconlist>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Icon

Use the `icon` attribute on each `<nys-iconlistitem>` to set the icon that appears beside the label. See [Icon](/components/icon/) for the complete list.

{% set preview %}
<nys-iconlist id="requirements">
  <nys-iconlistitem icon="check_circle">Recent pay stubs</nys-iconlistitem>
  <nys-iconlistitem icon="check_circle">Current rent/mortgage statement</nys-iconlistitem>
  <nys-iconlistitem icon="check_circle">Current property tax bill</nys-iconlistitem>
  <nys-iconlistitem icon="check_circle">Social Security card</nys-iconlistitem>
</nys-iconlist>
{% endset %}
{% set code = preview %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Secondary Label

Add a second line of text to an item with `<span slot="secondary">`. When a secondary label is present, the icon aligns to the top of the item rather than centering against the full block.

{% set preview %}
<nys-iconlist id="event-details2">
  <nys-iconlistitem icon="calendar_month">July 4, 2026</nys-iconlistitem>
  <nys-iconlistitem icon="schedule">
    5:00 PM
    <span slot="secondary">Eastern Standard Time</span>
  </nys-iconlistitem>
  <nys-iconlistitem icon="location_on">
    Central Park West
    <span slot="secondary">New York, NY</span>
  </nys-iconlistitem>
</nys-iconlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Divider

Set `divider` on `<nys-iconlist>` to draw a rule between items. No divider is drawn after the last item.

{% set preview %}
<nys-iconlist id="event-details3" divider>
  <nys-iconlistitem icon="calendar_month">July 4, 2026</nys-iconlistitem>
  <nys-iconlistitem icon="schedule">5:00 PM</nys-iconlistitem>
  <nys-iconlistitem icon="location_on">Central Park West</nys-iconlistitem>
</nys-iconlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usagedo %}

- Use an icon list to highlight key attributes, features, requirements, or metadata that help users quickly scan content.
- Keep list items short and concise—ideally a single line of text or a brief phrase.
- Limit the number of items shown (typically 3–5) to maintain scannability and keep the list from becoming overly dense.
- Order items by importance, placing the most relevant information first.
- Make sure icons add meaning and are not purely decorative. If all items use the same icon, consider whether a standard list would communicate the content just as effectively.

{% endblock %}

{% block usagedont %}

- Use an icon list when the items represent steps in a process. Use the `<nys-stepper>` instead.
- Use an icon list for long descriptions, complex instructions, or content that requires hierarchy. Use standard lists or body text instead.
- Mix icon styles within a single list, which makes the list harder to scan.
- Place interactive controls such as buttons inside list items.

{% endblock %}

{% block accessibility %}

The `<nys-iconlist>` component includes the following accessibility-focused features:

- Renders as a semantic list, so screen readers announce the number of items and each item in turn.
- Icons are decorative and are not announced, so the text label carries all of the meaning. Never rely on an icon alone to convey information.
- Text uses design system typography tokens and scales with browser zoom and user font-size settings.

{% endblock %}

{% block properties %}

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Component</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td><code>&lt;nys-iconlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>divider</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td><code>&lt;nys-iconlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td><code>&lt;nys-iconlistitem&gt;</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
