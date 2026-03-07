---
permalink: /components/tooltip/
title: Tooltip
description: Displays a brief message when hover/focus, offering additional information or context.
image: /assets/img/components/tooltip.svg
image_alt: An illustration of a tooltip.
image_header: /assets/img/components/tooltip-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4298-1477
navOrder: 24
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

  The `<nys-tooltip>` component is used to provide short, supplemental information when users hover, focus, or keyboard-navigate to the linked component (more info on linking with `for` prop below).

{% endblock %}

{% block example %}
  {% set preview %}<div style="margin-top:30px">
<nys-tooltip for="my-button" text="I am a tooltip."></nys-tooltip>
<nys-button id="my-button" label="Hover Me"></nys-button>
</div>{% endset %}
{% set code %}<nys-tooltip for="my-button" text="I am a tooltip."></nys-tooltip>
<nys-button id="my-button" label="Hover Me"></nys-button>
{% endset %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Supported Components
The `<nys-tooltip>` supports the following NYS components:
- `<nys-button>`
- `<nys-icon>`
- `<nys-textinput>` (appears as a hint icon)
- `<nys-textarea>` (appears as a hint icon)
- `<nys-select>` (appears as a hint icon)
- `<nys-checkboxgroup>` (appears as a hint icon)
- `<nys-checkbox>` (appears as a hint icon)
- `<nys-radiogroup>` (appears as a hint icon)
- `<nys-fileinput>` (appears as a hint icon)

**These components are either:**
  - a form-related web component.
  - standard components used for tooltips (i.e., `nys-icon` and `nys-button`).

To attach `<nys-tooltip>` to a NYS component, see the section below.

### Linking Tooltip to an Component 
To attach a `<nys-tooltip>` to a support NYSDS component, set the tooltip’s `for` attribute to the target component's `id`. **Both values MUST match.**

{% set code %}<nys-tooltip for="btn1" text="More details"></nys-tooltip>
<nys-button id="btn1" label="Submit"></nys-button>{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Position
Use the `position` prop to control where the direction where the tooltip will appear. \
Valid positions are: `top`, `bottom`, `left`, `right`

**Note:** If no position is provided, the tooltip will automatically choose the best position based on the available space.


  {% set preview %}<div style="display: flex; justify-content: center;">
  <div style="display: flex; gap: 5px">
    <p>Hover over the icon</p>
    <nys-tooltip
      for="my-icon2"
      text="I am a tooltip."
      position="right"
    >
    </nys-tooltip>
    <nys-icon id="my-icon2" name="info" size="3xl"></nys-icon>
  </div>
</div>{% endset %}
  {% set code %}<p>Hover over the icon</p>
<nys-tooltip for="my-icon2" text="I am a tooltip." position="right"></nys-tooltip>
<nys-icon id="my-icon2" name="info" size="3xl"></nys-icon>
{% endset %}
{% include "partials/code-preview.njk" %}

### Hints for Form Fields
When a `<nys-tooltip>` is added to an NYS form component, it appears as a hint icon next to the label. \
Tooltip positioning is automatic (`top`/auto), so you don’t need to set a position prop.
{% set preview %}<div style="margin-top:30px">
  <nys-tooltip for="my-textinput" text="I am a tooltip."></nys-tooltip>
  <nys-textinput id="my-textinput" name='fullName' label="Full name" description='Enter your full legal name' width="lg" required></nys-textinput>
</div>{% endset %}
{% set code %}<nys-tooltip for="my-textinput" text="I am a tooltip."></nys-tooltip>
<nys-textinput id="my-textinput" name="fullName" label="Full name" description="Enter your full legal name" width="lg" required></nys-textinput>
{% endset %}
{% include "partials/code-preview.njk" %}

### Inverted
Set the `inverted` when the tooltip is on a dark background.
{% set preview %}<div style="display: flex; justify-content: center; margin-top:30px">
  <div style="color: #fff; display: flex; gap: 5px">
    <p>Hover over the icon</p>
    <nys-tooltip
      for="my-tooltip3"
      text="I am a tooltip."
      inverted
    >
    </nys-tooltip>
    <nys-icon id="my-tooltip3" name="info" size="3xl"></nys-icon>
  </div>
</div>{% endset %}
{% set code %}<div style="color: #fff; display: flex; gap: 5px">
  <p>Hover over the icon</p>
  <nys-tooltip for="my-tooltip3" text="I am a tooltip." inverted></nys-tooltip>
  <nys-icon id="my-tooltip3" name="info" size="3xl"></nys-icon>
</div>
{% endset %}
{% set inverted = true %}
{% include "partials/code-preview.njk" %}

{% endblock %}


{% block usage %}

### When to use this component
  - Use to provide supplemental hints on form fields, such as explaining what "FEIN" means on a business registration form or clarifying an eligibility requirement.
  - Use on icon buttons that might need additional context, such as a help icon next to a complex field or an info icon explaining a status indicator.
  - Use on NYSDS form components (`<nys-textinput>`, `<nys-select>`, `<nys-checkbox>`, etc.) where the tooltip automatically renders as a hint icon next to the label.

### When to consider something else
  - When the information is critical for completing a task (e.g., required format for a Social Security Number), use inline description text instead. Tooltips are easy to miss.
  - When the content is long or includes links, actions, or structured content. Tooltips should stay brief and passive.
  - When users on mobile devices are a primary audience. Tooltips rely on hover, which is unavailable on touch devices.
{% endblock %}

{% block usagedo %}

  - Provide brief and helpful content inside the tooltip.
  - Add tooltips to icons that do not have visible labels and require additional context.
  - Position tooltips so they don’t block related content.

{% endblock %}

{% block usagedont %}

  - Don't use tooltips for information that is vital to task completion.
  - Don't use interactive elements such as links or buttons inside a tooltip.
  - Don't rely on tooltips when you have room to provide more explanation.

{% endblock %}

{% block accessibility %}

The `<nys-tooltip>` component includes the following accessibility-focused features:

  - Tooltip appears on both mouse hover and keyboard focus, ensuring access for all input methods.
  - Uses `role="tooltip"` and toggles `aria-hidden` based on visibility state, so screen readers announce tooltip content when it appears.
  - For `<nys-button>` triggers, the tooltip text is passed as `ariaDescription`, so screen readers announce both the button label and the tooltip hint.
  - For `<nys-icon>` triggers, the tooltip text is passed as `ariaLabel`, making otherwise decorative icons accessible.
  - Pressing `Escape` dismisses the tooltip without moving focus, following the WAI-ARIA tooltip pattern.
  - Auto-positioning prevents the tooltip from being clipped by viewport edges, keeping content readable for users who zoom in.
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
      <td><code>id</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>inverted</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td><code>"top"</code>, <code>"bottom"</code>, <code>"left"</code>, <code>"right"</code></td>
      <td>auto</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}
