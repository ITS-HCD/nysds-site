---
permalink: /components/processlist/
title: Process List
description: Displays a sequence of numbered steps to communicate a multi-step process.
stable: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-processlist>` component displays a sequence of numbered steps, making it easy to communicate a multi-step process across web projects.

Add `<nys-processlistitem>` elements as children of `<nys-processlist>`. Each item takes a `label` and an optional `description`. Steps are numbered by the list, so items never set their own number.

{% endblock %}

{% block example %}
{% set preview %}
<nys-processlist id="application-steps">
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Description

Use the `description` property on a `<nys-processlistitem>` to add supporting information below the step label.

{% set preview %}
<nys-processlist id="application-steps2">
  <nys-processlistitem
    label="Gather your documents"
    description="Recent pay stubs and a current property tax bill."
  ></nys-processlistitem>
  <nys-processlistitem
    label="Complete the application"
    description="Most applicants finish in about 20 minutes."
  ></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}

### Description Slot

For rich text such as bold text or links, use the `description` slot instead of the property. The slot overrides the `description` property.

{% set preview %}
<nys-processlist id="application-steps-desc-slot">
  <nys-processlistitem label="Gather your documents">
    <div slot="description">Recent pay stubs and a <strong>current</strong> property tax bill.</div>
  </nys-processlistitem>
  <nys-processlistitem label="Complete the application">
    <div slot="description">Most applicants finish in about <a href="https://www.ny.gov">20 minutes</a>.</div>
  </nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Size

Set `size="sm"` for a smaller step marker. The default is `md`.

{% set preview %}
<nys-processlist id="application-steps-sm" size="sm">
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Strong

Set `strong` to render each step number in a bolder, higher-emphasis color.

{% set preview %}
<nys-processlist id="application-steps-strong" strong>
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Neutral

Set `neutral` to render each step number using neutral (grayscale) coloring instead of the theme color. `neutral` can be combined with `strong`.

{% set preview %}
<nys-processlist id="application-steps-neutral" neutral>
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Initial Step

Use `initialstep` to set the number given to the first step. Subsequent steps count up from it. Use this when one process is split across several lists so the later lists continue the count instead of restarting at 1.

{% set preview %}
<nys-processlist id="application-steps-part1" aria-label="Application steps, part 1">
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
<p>Take a break here. The remaining steps happen after your application is reviewed.</p>
<nys-processlist id="application-steps-part2" initialstep="4" aria-label="Application steps, part 2">
  <nys-processlistitem label="Respond to any requests for information"></nys-processlistitem>
  <nys-processlistitem label="Receive your determination letter"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Accessible Name and Description

A list has no name of its own, so give one whenever the surrounding content does not already make the list's purpose obvious — especially when a page holds more than one process list.

Use `aria-labelledby` when a visible heading already names the list, so the accessible name and the visible one cannot drift apart. Use `aria-label` when there is no such heading. Use `aria-describedby` to point at supporting content, such as an intro paragraph; a description supplements the name, it does not replace it.

{% set preview %}
<h3 id="process-heading">How to apply</h3>
<p id="process-intro">You will need your most recent pay stubs and a current property tax bill.</p>
<nys-processlist
  id="application-steps-described"
  aria-labelledby="process-heading"
  aria-describedby="process-intro"
>
  <nys-processlistitem label="Gather your documents"></nys-processlistitem>
  <nys-processlistitem label="Complete the application"></nys-processlistitem>
  <nys-processlistitem label="Submit and await review"></nys-processlistitem>
</nys-processlist>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usagedo %}

- Use a process list to explain a sequence of steps a user will take, such as how to apply for a benefit or renew a license.
- Keep step labels short and action-oriented, and put supporting detail in the `description`.
- Give the list an accessible name with `aria-labelledby` or `aria-label` so its purpose is clear.
- Use `initialstep` to continue the numbering when one process is split across multiple lists.
- Keep styling consistent across all process lists on the same page.

{% endblock %}

{% block usagedont %}

- Use a process list to show a user's progress through a multi-step form. Use the [Stepper](/components/stepper/) instead.
- Use a process list for items with no inherent order. Use the [Icon List](/components/iconlist/) or a standard list instead.
- Number the steps yourself in the `label`. The list owns the numbering.
- Place interactive controls such as buttons inside a step.

{% endblock %}

{% block accessibility %}

The `<nys-processlist>` component includes the following accessibility-focused features:

- Renders as a semantic ordered list, so screen readers announce the number of steps and each step in turn.
- Step numbers are rendered by the list itself, so the announced order always matches the visible order.
- Supports `aria-label`, `aria-labelledby`, and `aria-describedby` on the list, so it can be named by a visible heading and described by nearby intro content.
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
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>"sm"</code>, <code>"md"</code></td>
      <td><code>"md"</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>strong</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>neutral</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>initialStep</code></td>
      <td>number</td>
      <td><code>1</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>ariaLabel</code></td>
      <td>String, <code>null</code></td>
      <td><code>null</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>ariaLabelledBy</code></td>
      <td>String, <code>null</code></td>
      <td><code>null</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>ariaDescribedBy</code></td>
      <td>String, <code>null</code></td>
      <td><code>null</code></td>
      <td><code>&lt;nys-processlist&gt;</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td><code>&lt;nys-processlistitem&gt;</code></td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
      <td><code>""</code></td>
      <td><code>&lt;nys-processlistitem&gt;</code></td>
    </tr>
  </table>
</nys-table>

**Slots:** use the `description` slot on `<nys-processlistitem>` for rich text below the label. It overrides the `description` property.

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
