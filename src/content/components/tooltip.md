---
permalink: /components/tootlip/
title: Tooltip
description: A tooltip component that displays a brief message when hover/focus, offering additional information or context.
image: /assets/img/components/tooltip.svg
image_alt: An illustration of a tooltip.
image_header: /assets/img/components/tooltip-header.svg
navOrder: 17
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The `<nys-toggle>` component is a reusable wrapper that displays a brief message when a user hovers over or focuses on its wrapped element, offering additional information or context.

  **IMPORTANT:** Unlike tooltip props found on form-related components, `<nys-tooltip>` is a standalone wrapper. Wrap a single `<nys-icon>` or `<nys-button>` manually to add a tooltip.
{% endblock %}

{% block example %}
  {% set preview %}<div style="margin-top:30px">
  <nys-tooltip text="I am a tooltip.">
  <nys-button id="button1" name="button1" label="Hover Me"></nys-button>
</nys-tooltip>
</div>{% endset %}
{% set code %}<nys-tooltip text="I am a tooltip.">
  <nys-button id="button1" name="button1" label="Hover Me"></nys-button>
</nys-tooltip>
{% endset %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use this component to wrap interactive or visual elements like `nys-icon` or `nys-button` to provide additional information or context.
### When to consider something else
  - When the information is critical for understanding or completing a task. Use inline text instead.
  - When the information is long or includes links or actions. Tooltips should stay simple and passive.
{% endblock %}

{% block usagedo %}

  - Provide brief and helpful content inside the tooltip.
  - Add tooltips to icons that do not have visible labels and require additional context.

{% endblock %}

{% block usagedont %}

  - Don't use tooltips for information that is vital to task completion.
  - Don't use interactive elements such as links or buttons inside a tooltip.
  - Don't rely on tooltips when you have room to provide more explanation.

{% endblock %}

{% block accessibility %}

The `<nys-tooltip`> component includes the following accessibility-focused features:

  - Keyboard and mouse support: tooltip appears when users hover with mouse or focus using a keyboard
  - Tooltip uses `role="tooltip"` for assistive technologies and sets `aria-hidden` based on internal state based on when tooltip is hidden or showing.
  - Positioning logic: If a position is not manually set, the tooltip will automatically appear in the direction with the most available space.
{% endblock %}

{% block options %}

### Focusable
Use the `focusable` prop to make non-focusable slotted elements (i.e. `<nys-icon>`) accessible via keyboard focus.

  {% set preview %}<div style="display: flex; justify-content: center; margin-top:30px">
  <div style="display: flex; gap: 5px">
    <p>Hover over the icon</p>
    <nys-tooltip text="I am a tooltip." focusable>
      <nys-icon name="info" size="3xl"></nys-icon>
    </nys-tooltip>
  </div>
</div>{% endset %}
  {% set code %}<p>Hover over the icon</p>
<nys-tooltip text="I am a tooltip." focusable>
  <nys-icon name="info" size="3xl"></nys-icon>
</nys-tooltip>{% endset %}
  {% include "partials/code-preview.njk" %}

### Position
Use the `position` prop to control where the direction where the tooltip will appear. If no `position` is provided, the tooltip will automatically choose the best position based on the available space.

Valid positions are: `top`, `bottom`, `right`, `left`

  {% set preview %}<div style="display: flex; justify-content: center;">
  <div style="display: flex; gap: 5px">
    <p>Hover over the icon</p>
    <nys-tooltip
      text="I am a tooltip."
      position="right"
      focusable
    >
      <nys-icon name="info" size="3xl"></nys-icon>
    </nys-tooltip>
  </div>
</div>{% endset %}
  {% set code %}<p>Hover over the icon</p>
<nys-tooltip text="I am a tooltip." position="right" focusable>
  <nys-icon name="info" size="3xl"></nys-icon>
</nys-tooltip>
{% endset %}
  {% include "partials/code-preview.njk" %}

### Inverted
Set the `inverted` when the tooltip is on a dark background.
  {% set preview %}<div style="display: flex; justify-content: center; background-color: var(--nys-color-ink, #1b1b1b); padding: var(--nys-space-800, 64px);">
  <div style="color: #fff; display: flex; gap: 5px">
    <p>Hover over the icon</p>
    <nys-tooltip
      text="I am a tooltip."
      inverted
      focusable
    >
      <nys-icon name="info" size="3xl"></nys-icon>
    </nys-tooltip>
  </div>
</div>{% endset %}
  {% set code %}<p>Hover over the icon</p>
<nys-tooltip text="I am a tooltip." inverted focusable>
  <nys-icon name="info" size="3xl"></nys-icon>
</nys-tooltip>
{% endset %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property      | Type                                           |
|---------------|------------------------------------------------|
| `id`          | String                                         |
| `text`        | String                                         |
| `focusable`   | boolean                                        |
| `inverted`    | boolean                                        |
| `position`    | `"top"` \| `"bottom"` \| `"left"` \| `"right"` |

{% endblock %}

{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
