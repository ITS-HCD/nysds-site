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

- Use for short, scannable sets of related facts, such as event details, document requirements, or contact information.
- Pair each item with an icon that reinforces the meaning of the text.
- Keep labels brief so the list stays easy to scan.
- Use the `secondary` slot for supporting detail that belongs with the item's primary label.

{% endblock %}

{% block usagedont %}

- Use as a substitute for navigation. Use `<nys-verticalnav>` or a list of links instead.
- Mix unrelated icons within a single list, which makes the list harder to scan.
- Place interactive controls such as buttons inside list items.
- Use for long-form content or paragraphs of text.

{% endblock %}

{% block accessibility %}

The `<nys-iconlist>` component includes the following accessibility-focused features:

- Renders as a semantic list, so screen readers announce the number of items and each item in turn.
- Icons are decorative and are not announced, so the text label carries all of the meaning. Never rely on an icon alone to convey information.
- Text uses design system typography tokens and scales with browser zoom and user font-size settings.

{% endblock %}

{% block properties %}

### `<nys-iconlist>`

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
      <td>auto-generated</td>
    </tr>
    <tr>
      <td><code>divider</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </table>
</nys-table>

### `<nys-iconlistitem>`

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
  </table>
</nys-table>

**Slots:** the default slot holds the primary label. Use `<span slot="secondary">` for an optional second line of text.

**Note:** `<nys-iconlistitem>` also has a `divider` property, but it is set by the parent `<nys-iconlist divider>` and is not intended to be set directly.

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
