---
permalink: /components/backtotop/
title: Back To Top
description: Provides a button that lets users quickly scroll back to the top of the page.
image: /assets/img/components/backtotop.svg
image_alt: a circular button with the text back to top written on it.
image_header: /assets/img/components/backtotop-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=4303-2694&t=ehyQYJeb6ohvHYV0-4
navOrder: 4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-backtotop>` component provides a floating button that allows users to quickly scroll back to the top of a page. It auto-appears after scrolling 1.5 viewport heights on pages that are at least 4 screens tall, and renders as a compact circle button on mobile devices.

{% endblock %}

{% block example %}
{% set preview %}
<p style="margin-bottom:75px;">
  This Back to Top button is always visible for demo purposes. In a real-world scenario, it typically remains hidden until you scroll down the page and appears in the bottom-right corner, unless specified.
</p>
<nys-backtotop id="backtotop-demo" visible></nys-backtotop>

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

- Use on long-form content pages such as state policy documents, agency service directories, and program eligibility guides.
- Use on pages with extensive search results or data tables, such as a professional license lookup or business registration listing.
- Use when users need a quick way to return to the top-level navigation after scrolling through detailed content, such as a benefits application FAQ.

### When to consider something else

- Don't use on pages where content fits within a single viewport without scrolling.
- If your page uses anchor-based in-page navigation (e.g., a table of contents), users already have navigation tools and a back-to-top button may be redundant.

{% endblock %}

{% block usagedo %}

  - Place exactly one `<nys-backtotop>` per page, above the `<nys-globalfooter>` in your markup.
  - Set `position="left"` when the bottom-right corner is occupied by another floating element, such as a chatbot button.
  - Let the component manage its own visibility. The auto-show behavior activates after 1.5 viewport heights on pages that are at least 4 screens tall.
{% endblock %}

{% block usagedont %}

  - Don’t add multiple `<nys-backtotop>` components to a single page.
  - Don’t use `<nys-backtotop>` on pages where the content fits within a single viewport.
  - Don’t set `visible` in production unless you have a specific reason to override the auto-show behavior. Forcing visibility on short pages creates unnecessary clutter.
{% endblock %}

{% block accessibility %}

The `<nys-backtotop>` component includes the following accessibility-focused features:

  - Renders as a `<nys-button>` with the label "Back to top," providing a clear accessible name for screen readers.
  - Keyboard navigable with the `Tab` key. Pressing `Enter` or `Space` activates the smooth-scroll behavior.
  - Hidden from the tab order and screen readers when not visible, so it does not interfere with keyboard navigation on short pages.
  - On mobile, renders as a circle button with an up-chevron icon. The button retains its accessible label.
  - Uses `position: fixed` positioning, so it remains accessible regardless of scroll position.
{% endblock %}

{% block options %}

### Position Left
By default, `<nys-backtotop>` will be set on the bottom-right corner. If the bottom-right corner is blocked (e.g. by a chatbot button), set the `position` prop to `"left"` to position this component in the bottom-left instead.

{% set preview %}
<nys-unavheader hideTranslate hideSearch></nys-unavheader>
<nys-globalheader appName="Back to Top Example"></nys-globalheader>
<div style="padding: 2rem 1rem; background-color: #fff;">
  <h2 style="margin: 0;">Sample Content on page</h2>
  <p  style="margin: 0;">
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
size="sm"
></nys-button>
<nys-unavfooter></nys-unavfooter>
<nys-backtotop id="backtotop-demo2" position="left" visible></nys-backtotop>

<script type="module">
  customElements.whenDefined('nys-backtotop').then(async () => {
    const backtotop = document.getElementById('backtotop-demo2');
    // Wait until the Lit component finishes updating
    await backtotop.updateComplete;

    const backBtn = backtotop?.shadowRoot?.querySelector('.nys-backtotop');
    if (backBtn) {
        backBtn.style.position = 'absolute';
    }
  });
</script>
<style>
  #chatbot {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    --_nys-button-border-radius--start: var(--nys-radius-round);
    --_nys-button-border-radius--end: var(--nys-radius-round);
  }
</style>
{% endset %}
{% set code %}
<nys-backtotop position="left"></nys-backtotop>
{% endset %}
{% include "partials/code-preview.njk" %}

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
        <td><code>position</code></td>
        <td><code>"left"</code> , <code>"right"</code></td>
        <td><code>"right"</code></td>
    </tr>
    <tr>
        <td><code>visible</code></td>
        <td>boolean</td>
        <td><code>false</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-backtotop>` component emits **three** custom Javascript events:

  1.  **`click`** – Emitted when the backtotop is clicked.
  2.  **`focus`** - Emitted when the backtotop receives focus.
  3.  **`blur`** - Emitted when the backtotop loses focus.

### Event details

You can listen to these events using JavaScript:
{% set code %}// Select the backtotop component
const backtotop = document.querySelector("nys-backtotop");
// Listen for the 'click' event
backtotop.addEventListener("click", () => {
	console.log("Backtotop clicked");
});
// Listen for the 'blur' event
backtotop.addEventListener("blur", () => {
	console.log("Backtotop lost focus");
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% set showTip = false %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block dependencies %}

{% set dependencies = [
  "<nys-button>"
] %}

{% include "partials/dependencies.njk" %}

{% endblock %}

{% block updates %}{% endblock %}
