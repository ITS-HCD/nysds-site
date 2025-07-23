---
permalink: /components/backtotop/
title: Back To Top
description: Provides a button that lets users quickly scroll back to the top of the page.
image: /assets/img/components/back-to-top.svg
image_alt: An illustration of a back-to-top button.
image_header: /assets/img/components/back-to-top.svg
navOrder: 4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-backtotop>` component provides a button that allows users to quickly return to the top of a page, enhancing user experience and accessibility.
{% endblock %}

{% block example %}
{% set preview %}
<p style="margin-bottom:75px;">
  This Back to Top button is always visible for demo purposes. In a real-world scenario, it typically remains hidden until you scroll down the page and appears in the bottom-right corner, unless specified.
</p>
<nys-backtotop id="backtotop-demo"></nys-backtotop>

<script type="module">
  customElements.whenDefined('nys-backtotop').then(async () => {
    const backtotop = document.getElementById('backtotop-demo');
    // Wait until the Lit component finishes updating
    await backtotop.updateComplete;

    const backBtn = backtotop?.shadowRoot?.querySelector('.nys-backtotop');
    if (backBtn) {
        backBtn.style.position = 'absolute';
    }
  });
</script>

{% endset %}
{% set code %}
<nys-backtotop id="backtotop-demo"></nys-backtotop>
{% endset %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

- Only use 1 back to top component on a page.
- Use the component when the content is designed to be longer than the height of the screen.

### When to consider something else

- Add multiple back to top components to one page.
- Use when the content is designed to fill the size of the screen and is not scrollable.
{% endblock %}

{% block usagedo %}

  - Only use 1 back to top component on a page.
  - Use the component when the content is designed to be longer than the height of the screen.
{% endblock %}

{% block usagedont %}

  - Add multiple back to top components to one page.
  - Use when the content is designed to fill the size of the screen and is not scrollable.
{% endblock %}

{% block accessibility %}

The `<nys-backtotop>` component includes the following accessibility-focused features:

  - Last focusable element on page load for easy keyboard navigation
  - Keyboard navigable with `Tab` key
  - Pressing `Enter` or `Space` activates the `<nys-backtotop>` functionality
  - Visible only when the user scrolls down the page, ensuring it does not distract from the content
{% endblock %}

{% block options %}

### Position Left
By default, `<nys-backtotop>` will be set on the bottom-right corner. If the bottom-right corner is blocked (e.g. by a chatbot button), set the `position` prop to `"left"` to position this component in the bottom-left instead.

{% set preview %}
<nys-unavheader hideTranslate hideSearch></nys-unavheader>
<nys-globalheader appName="Back to Top Example"></nys-globalheader>
<div style="padding: 0 2rem">
<h1>Sample Content on page</h1>
<p>
    This is a sample content area used to demonstrate the functionality of
    the Back to Top button. In an actual application,
    <code>nys-backtotop</code> would not be visible until the user scrolls
    down the page.
</p>
</div>
<nys-button
id="chatbot"
prefixIcon="sms"
variant="outline"
label="Chat With Us"
></nys-button>
<nys-unavfooter></nys-unavfooter>
<nys-backtotop id="backtotop-demo2" position="left"></nys-backtotop>

<script type="module">
  customElements.whenDefined('nys-backtotop').then(async () => {
    const backtotop = document.getElementById('backtotop-demo2');
    // Wait until the Lit component finishes updating
    await backtotop.updateComplete;

    const backBtn = backtotop?.shadowRoot?.querySelector('.nys-backtotop');
    if (backBtn) {
        backBtn.style.position = 'absolute';
    }

    const chatbot = document.getElementById('chatbot');
    if (chatbot) {
        Object.assign(chatbot.style, {
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        '--_nys-button-radius-left': 'var(--nys-radius-round)',
        '--_nys-button-radius-right': 'var(--nys-radius-round)',
      });
    }
  });
</script>
{% endset %}
{% set code %}
<nys-backtotop position="left"></nys-backtotop>
{% endset %}
{% include "partials/code-preview.njk" %}

{% endblock %}


{% block properties %}

| Property   | Type         |
|------------|--------------|
| `id`       | String       |
| `position` | String       |

{% endblock %}

{% block cssvariables %}{% endblock %}

| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |


{% block events %}

The `<nys-backtotop>` component emits **three** custom Javascript events:

1.  **`nys-click`** – Fired when the button is clicked.
2.  **`nys-focus`** – Fired when the button gains focus.
3.  **`nys-blur`** – Fired when the button loses focus.

You can listen to these events using JavaScript:
{% set code %}// Select the button component
const backtotop = document.querySelector('nys-backtotop');
// Listen for the 'nys-click' event
backtotop.addEventListener("nys-click", () => {
	console.log("Back-to-top clicked");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
