---
permalink: /components/button/
title: Button
description: "Used primarily for actions that have an immediate result like 'Save', 'Close', or 'Add'."
image: /assets/img/components/button.svg
image_alt: An illustration of a button.
image_header: /assets/img/components/button-header.svg
navOrder: 5
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-button>` component is used for actions that have an immediate result inside an application such as saving progress or navigating back. It is also used in content sites for Call-to-Action (CTA).
{% endblock %}

{% block example %}
  {% set preview %}<nys-button label="Button"></nys-button>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component
  - Use for the most important actions you want users to take on your site, such as Download, Sign up or Log out.
  - Use Fill for the primary action on the page; use sparingly, there should be only one primary action on each page.
  - Use Outline for secondary actions; should be placed next to the primary action / Fill button.
  - Use Ghost buttons when there are additional actions beyond primary and secondary.
  - Use Text buttons when an action needs to appear within a text block.

### When to consider something else
  - Text Buttons do something, whereas Links go somewhere. Use a Link instead of a text button if clicking the element takes the user somewhere else.
{% endblock %}

{% block usagedo %}

  - Always set the `type` attribute (`submit`, `button`, or `reset`). If omitted, the default is `submit`.
  - Use sentence case for button labels, only capitalizing the first word.
  - For buttons that open a dropdown, place a `chevron_down` icon on the right.
{% endblock %}

{% block usagedont %}

  - Don’t use buttons for external navigation. Use an HTML link (&lt;a&gt;) or a Text button instead.
  - Don't use icons in buttons without a text label. Very few icons are universally understood.
  - Avoid creating custom button styles (color, shape, size). Consistency helps users recognize buttons and predict behavior.
{% endblock %}

{% block accessibility %}

The `<nys-button>` component includes the following accessibility-focused features:

  - Proper ARIA roles and attributes to ensure screen readers can interpret the toggle correctly.
  - Keyboard navigation support, allowing users to toggle the toggle switch using the keyboard.
  - Visual focus indicators to help users navigate the component.
  - Include a label property to provide accessible text for screen readers.
  - Screen readers treat buttons and links differently. Use buttons (including text buttons) for actions and links for navigation. Buttons are announced consistently by assistive tech and are activated by both Enter and Space, while links are activated by Enter only.
{% endblock %}

{% block content %}

Button labels need to be clear and predictable. Users should be able to anticipate what will happen when they select a button. Never mislead someone by mislabeling a button.

- Verbs like “View” or “Go” or “Read” are often unnecessary since the button itself already conveys these actions
- No articles or unnecessary words (“a” “an” “the”)
- No punctuation
- Always write button text in sentence case, which means the first word is capitalized and the rest are lowercase (unless a term is a proper noun).

{% endblock %}

{% block options %}

### Click Action
When using the `<nys-button>`, you may want to use the `onClick` prop instead of adding your own `@click`, `@keydown`, or their equivalents in your framework. This makes sure your button responds to both mouse and keyboard interactions (like Enter or Space), keeping it fully accessible.

### Button Type

Set the `type` prop of the `<nys-button>` to define the button's behavior in a form context. The available types are:

 - `button` (default): A standard button that does not submit a form.
 - `submit`: Submits the nearest form when clicked.
 - `reset`: Resets all inputs in the nearest form to their default values.

### Size
Set the `size` prop of the `<nys-button>` to adjust the height of the button. The width of the button is determined by the label. Our current sizes are:
- `sm`: Set to 40px in height
- `md`: The default size. Set to 48px in height.
- `lg`: Set to 56px in height.

Add the `fullWidth` prop to make the button take the width of its container. Default behavior will size the button to fit its label.

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button size="sm" id="button1" name="button1" label="Small"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button size="md" id="button2" name="button2" label="Medium"></nys-button></div>
<div class="nys-grid-col"><nys-button size="lg" id="button3" name="button3" label="Large"></nys-button></div>
</div><br>
<nys-button fullWidth size="sm" id="button4" name="button4" label="Small full"></nys-button><br>
<nys-button fullWidth id="button5" name="button5" label="Medium full"></nys-button><br>
<nys-button fullWidth size="lg" id="button6" name="button6" label="Large full"></nys-button>{% endset %}
{% set code %}
<nys-button size="sm" id="button1" name="button1" label="Small"></nys-button>
<nys-button size="md" id="button2" name="button2" label="Medium"></nys-button>
<nys-button size="lg" id="button3" name="button3" label="Large"></nys-button>
<nys-button fullWidth size="sm" id="button4" name="button4" label="Small full"></nys-button>
<nys-button fullWidth size="md" id="button5" name="button5" label="Medium full"></nys-button>
<nys-button fullWidth size="lg" id="button6" name="button6" label="Large full"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Variant

Set the variant prop of the `<nys-button>` to adjust the appearance of the button. Our current variants are:

 - `filled`: The default variant. Use for primary actions.
 - `outline`: Use for secondary actions.
 - `ghost`: Use for uncommon actions.
 - `text`: Use for inline actions.

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button id="button1" name="button1" label="Filled"></nys-button>
<nys-button id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Icons
Set the `prefixIcon` prop to include an icon in the button. The icon will appear to the left of the label.

Set the `suffixIcon` prop to include an icon in the button. The icon will appear to the right of the label.

  {% set preview %}<nys-button id="button1" name="button1" label="Button" prefixIcon="chevron_left" suffixIcon="chevron_right"><nys-button>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Circle
Use the `circle` prop to create a compact, circular button. Ideal for icon-only actions.
- When `circle` is set, provide the icon using the `icon` prop.
- If no `label` is given, the `icon` value will be used as the aria-label for accessibility.
- If a `label` is provided, it won’t be shown visually, but it will be used as the aria-label.

Note: the `prefixIcon` and `suffixIcon` props are not supported when using the `circle` prop.
{% set preview %}<nys-button circle icon="close"></nys-button>{% endset %}
{% set code %}
<nys-button circle icon="close"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Disabled
{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button disabled id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button disabled id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button disabled id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button disabled id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button disabled id="button1" name="button1" label="Filled"></nys-button>
<nys-button disabled id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button disabled id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button disabled id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% include "partials/code-preview.njk" %}

### Link
Set the `href` prop when using the button to navigate to a different page. This will render the `nys-button` as an `<a>` tag.\
Set the `target` prop of the `<nys-button>` to specify where to open the linked document. The available targets are:
- `_self`: Opens the link in the same frame as it was clicked (default).
- `_blank`: Opens the link in a new tab or window.
- `_parent`: Opens the link in the parent frame.
- `_top`: Opens the link in the full body of the window.
- `framename`: Opens the link in a named iframe.

{% set preview %}<nys-button href="https://www.ny.gov/" target="_blank" id="button1" name="button1" label="Visit NY.gov"></nys-button>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Inverted
Set the `inverted` when the button is on a dark background.

{% set preview %}<div class="nys-grid-row">
<div class="nys-grid-col"><nys-button inverted id="button1" name="button1" label="Filled"></nys-button></div>
<div class="nys-grid-col"><nys-button inverted id="button2" name="button2" label="Outline" variant="outline"></nys-button></div>
<div class="nys-grid-col"><nys-button inverted id="button3" name="button3" label="Ghost" variant="ghost"></nys-button></div>
<div class="nys-grid-col nys-display-flex nys-flex-align-center"><nys-button inverted id="button4" name="button4" label="Text" variant="text"></nys-button></div>
</div>{% endset %}
{% set code %}
<nys-button inverted id="button1" name="button1" label="Filled"></nys-button>
<nys-button inverted id="button2" name="button2" label="Outline" variant="outline"></nys-button>
<nys-button inverted id="button3" name="button3" label="Ghost" variant="ghost"></nys-button>
<nys-button inverted id="button4" name="button4" label="Text" variant="text"></nys-button>
{% endset %}
{% set previewInverted = true %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property           | Type                                                               |
|--------------------|--------------------------------------------------------------------|
| `id`               | String                                                             |
| `name`             | String                                                             |
| `disabled`         | boolean                                                            |
| `form`             | String                                                             |
| `fullWidth`        | boolean                                                            |
| `href`             | String (URL)                                                       |                
| `inverted`         | boolean                                                            |
| `label`            | String                                                             |
| `ariaLabel`        | String                                                             |
| `ariaDescription`  | String                                                             |
| `onClick`          | JS function                                                        |
| `prefixIcon`       | String (`<nys-icon name>`)                                         |
| `size`             | `"sm"` \| `"md"` \| `"lg"`                                         |
| `suffixIcon`       | String (`<nys-icon name>`)                                         |
| `target`           | `"_self"` \| `"_blank"` \| `"_parent"` \| `"_top"` \| `"framename"`|
| `type`             | `"submit"` \| `"reset"` \| `"button"`                              |
| `value`            | String                                                             |
| `variant`          | `"filled"` \| `"outline"` \| `"ghost"` \| `"text"`                 |

{% endblock %}

{% block cssvariables %}{% endblock %}

| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |


{% block events %}

The `<nys-button>` component emits **three** custom Javascript events:

1.  **`nys-click`** – Fired when the button is clicked.
2.  **`nys-focus`** – Fired when the button gains focus.
3.  **`nys-blur`** – Fired when the button loses focus.

You can listen to these events using JavaScript:
{% set code %}// Select the button component
const button = document.querySelector('nys-button');
// Listen for the 'nys-click' event
button.addEventListener("nys-click", () => {
	console.log("Button clicked");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
