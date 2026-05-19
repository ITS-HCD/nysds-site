---
permalink: /components/tab/
title: Tab
description: A clickable interface to toggle between different sets of information without leaving the page.
image: /assets/img/components/tab.svg
image_alt: An illustration of a tab.
image_header: /assets/img/components/tab-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=20950-976

hasA11yPages: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-tab>` acts as a clickable interface to toggle between different sets of information without leaving the page. It is not intended for page navigation.

{% endblock %}

{% block example %}
{% set preview %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin"></nys-tab>
<nys-tab label="Haystack"></nys-tab>
<nys-tab label="Skylight"></nys-tab>
<nys-tab label="Whiteface"></nys-tab>
<nys-tabpanel>Mount Marcy is the tallest peak in the Adirondacks. It has an elevation of 5344 feet with 3166 feet of elevation gain. The roundtrip hike to the top is 14.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Algonquin Peak is the 2nd tallest peak in the Adirondacks. It has an elevation of 5114 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Mount Haystack is the 3rd tallest peak in the Adirondacks. It has an elevation of 4960 feet with 4000 feet of elevation gain. The roundtrip hike to the top is 16.4 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Mount Skylight is the 4th tallest peak in the Adirondacks. It has an elevation of 4926 feet with 5100 feet of elevation gain. The roundtrip hike to the top is 16 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Whiteface is the 5th tallest peak in the Adirondacks. It has an elevation of 4867 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.2 miles and is an out-and-back route.</nys-tabpanel>
</nys-tabgroup>

<p style="padding: 1rem;">
<strong>Note:</strong> The content in the tab panels was gathered from <a href="https://www.lakeplacid.com/do/outdoors/summerfall/hiking">lakeplacid.com</a> and may not be completely accurate. This is meant to be a demo of how the component works, not a hiking guide.
</p>
{% endset %}
{% set code %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin"></nys-tab>
...rest of the tabs...
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
...rest of the tabpanels...
</nys-tabgroup>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}
<nys-alert heading="Tab and Tab Panel Ordering" type="info" primaryLabel="Explicit Ordering Example" primaryAction="/components/tab/#explicit-ordering">

<p>Tabs and Panels are paired to one another in the order they appear in the DOM unless explicitly defined on each with an <code>&lt;nys-tab id="foo"&gt;</code> and <code>&lt;nys-tabpanel aria-labelledby="foo"&gt;</code></p>
</nys-alert>

### Pre-selected Tab

To pre-select a tab on load, add the `selected` attribute to a `<nys-tab>` element. If no tab has `selected`, the first tab is activated by default.

{% set preview %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin" selected></nys-tab>
<nys-tab label="Haystack"></nys-tab>
<nys-tabpanel>Mount Marcy is the tallest peak in the Adirondacks. It has an elevation of 5344 feet with 3166 feet of elevation gain. The roundtrip hike to the top is 14.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Algonquin Peak is the 2nd tallest peak in the Adirondacks. It has an elevation of 5114 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Mount Haystack is the 3rd tallest peak in the Adirondacks. It has an elevation of 4960 feet with 4000 feet of elevation gain. The roundtrip hike to the top is 16.4 miles and is an out-and-back route.</nys-tabpanel>
</nys-tabgroup>
{% endset %}
{% set code %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin" selected></nys-tab>
...rest of the tabs...
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
...rest of the tabpanels...
</nys-tabgroup>
{% endset %}
{% include "partials/code-preview.njk" %}

### Disabled Tabs

To disable a tab, add the `disabled` attribute to the `<nys-tab>` element. Disabled tabs will not be clickable and will have a different visual style to indicate that they are inactive.

{% set preview %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin"></nys-tab>
<nys-tab label="Haystack"></nys-tab>
<nys-tab label="Skylight"></nys-tab>
<nys-tab label="Whiteface"></nys-tab>
<nys-tab label="Gore (Not a High Peak)" disabled></nys-tab>
<nys-tabpanel>Mount Marcy is the tallest peak in the Adirondacks. It has an elevation of 5344 feet with 3166 feet of elevation gain. The roundtrip hike to the top is 14.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Algonquin Peak is the 2nd tallest peak in the Adirondacks. It has an elevation of 5114 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.8 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Mount Haystack is the 3rd tallest peak in the Adirondacks. It has an elevation of 4960 feet with 4000 feet of elevation gain. The roundtrip hike to the top is 16.4 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Mount Skylight is the 4th tallest peak in the Adirondacks. It has an elevation of 4926 feet with 5100 feet of elevation gain. The roundtrip hike to the top is 16 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Whiteface is the 5th tallest peak in the Adirondacks. It has an elevation of 4867 feet with 3050 feet of elevation gain. The roundtrip hike to the top is 7.2 miles and is an out-and-back route.</nys-tabpanel>
<nys-tabpanel>Gore content, doesn't matter since disabled</nys-tabpanel>
</nys-tabgroup>
{% endset %}
{% set code %}
<nys-tabgroup>
<nys-tab label="Marcy"></nys-tab>
<nys-tab label="Algonquin"></nys-tab>
...
<nys-tab label="Gore (Not a High Peak)" disabled></nys-tab>
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
<nys-tabpanel>content inside the tab panel</nys-tabpanel>
...rest of the tabpanels...
</nys-tabgroup>
{% endset %}
{% include "partials/code-preview.njk" %}

### Explicit Ordering

{% set preview %}
<nys-tabgroup id="explicit-ordering">
<nys-tab label="1st Tab" id="tab1"></nys-tab>
<nys-tab label="2nd Tab" id="tab2"></nys-tab>
<nys-tab label="3rd Tab" id="tab3"></nys-tab>
<nys-tabpanel aria-labelledby="tab2">Content for tab 2</nys-tabpanel>
<nys-tabpanel aria-labelledby="tab3">Content for tab 3</nys-tabpanel>
<nys-tabpanel aria-labelledby="tab1">Content for tab 1</nys-tabpanel>
</nys-tabgroup>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usage %}

### When to use this component

- Use a tabs component to organize related content into distinct, manageable sections, reducing cognitive load and saving screen space
- When you need to categorize related, but separate, information within the same context (e.g., Overview, Specs, Reviews).
- When you need to display a large amount of content without making the page overwhelmingly long.

### When to consider something else

- Comparing Data: If the user needs to compare information between sections simultaneously, tabs are poor, as they require clicking back and forth.
- Linear Process: If the content represents a strict, step-by-step process, use a Stepper component indicator instead.
- Too Few Categories: If you only have two small pieces of content, it might be better to just display them consecutively.

{% endblock %}

{% block usagedo %}

- Keep it simple: Use 2–9 short, clear labels.
- Limit tab labels to one row: Avoid wrapping, as it makes navigation confusing.
- Only one tab should ever be in the active state.

{% endblock %}

{% block usagedont %}

- Don't nest: Avoid putting tabs inside other tabs; it creates a poor user experience.
- Do not use tabs for page navigation.

{% endblock %}

{% block accessibility %}

The `nys-tab` component includes the following accessibility-focused features:

- **Keyboard Navigation**: Users can navigate between tabs using the arrow keys, and activate a tab with the Enter or Space key.
- **ARIA Roles and Attributes**: The component uses appropriate ARIA roles (e.g., `tablist`, `tab`, `tabpanel`) and attributes (e.g., `aria-selected`, `aria-controls`) to ensure that assistive technologies can correctly interpret the structure and state of the tabs.

{% endblock %}

{% block cssvariables %}
{% set variables = [
    { name: "--nys-tabpanel-max-height", description: "Maximum height of the tab panel content area." }
  ]%}
{% include "partials/css-vars.njk" %}

{% endblock %}

{% block properties %}
<nys-table striped>

  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Component</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
      <td><code>&lt;nys-tabgroup&gt;</code>, <code>&lt;nys-tab&gt;</code>, <code>&lt;nys-tabpanel&gt;</code></td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td><code>&lt;nys-tabgroup&gt;</code></td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
      <td><code>&lt;nys-tab&gt;</code></td>
    </tr>
    <tr>
      <td><code>selected</code></td>
      <td>Boolean</td>
      <td><code>&lt;nys-tab&gt;</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Boolean</td>
      <td><code>&lt;nys-tab&gt;</code></td>
    </tr>
  </table>
</nys-table>
{% endblock %}

{% block events %}

The `<nys-tab>` component emits **three** custom JavaScript events:

1. **`nys-tab-select`** – Fired when a tab is activated via click or Enter / Space.
2. **`nys-tab-focus`** – Fired when a tab receives focus.
3. **`nys-tab-blur`** – Fired when a tab loses focus.

### Event details

The `nys-tab-select` event includes a detail object with the following properties:

- id (string): The id of the activated tab.
- label (string): The label of the activated tab.

The `nys-tab-focus` and `nys-tab-blur` events include:

- id (string): The id of the tab.

You can listen to these events using JavaScript:
{% set code %}const tabgroup = document.querySelector('nys-tabgroup');
tabgroup.addEventListener('nys-tab-select', (event) => {
const { id, label } = event.detail;
console.log(`Tab selected — id: ${id}, label: ${label}`);
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
