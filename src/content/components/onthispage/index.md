---
permalink: /components/onthispage/
title: On this page
description: An in-page navigation that lists the headings on a page and links to each section.
image: /assets/img/components/onthispage.svg
image_alt: An illustration of an on this page navigation.
image_header: /assets/img/components/onthispage-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=32122-2750&t=rGlnSJ2BC8Udcq21-4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-onthispage>` component builds a list of links from the headings on a page. Users can jump to a section, and the link for the section in view is highlighted as they scroll. It does not render when the page has fewer than two trackable headings.

{% endblock %}

{% block example %}
{% set preview %}
<div style="display: flex; gap: 2rem; align-items: flex-start;">
  <nys-onthispage scope="#onthispage-example" style="flex: 0 0 220px;"></nys-onthispage>

  <article id="onthispage-example" style="flex: 1; min-width: 0;">
    <h3>Apply for a permit</h3>

    <h2>Eligibility</h2>
    <p>You must be a New York State resident aged 18 or older.</p>

    <h2>How to apply</h2>
    <p>Complete the online form and upload your supporting documents.</p>

    <h2>Required documents</h2>
    <p>Bring a valid proof of identity and proof of address.</p>

    <h2>What happens next</h2>
    <p>We review applications within 10 business days.</p>
  </article>
</div>
{% endset %}
{% set showTip = true %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block accessibility %}

The `<nys-onthispage>` component includes the following accessibility features:
- Links are wrapped in a `<nav>` landmark that is labeled by the visible heading
- The link for the active section has `aria-current="location"`
- Clicking a link moves focus to the target heading, so keyboard and screen reader users land in the section they chose
- Headings can't take focus on their own, so the target heading gets a temporary `tabindex="-1"`. It is removed when the heading loses focus
- Smooth scrolling is turned off automatically for users with `prefers-reduced-motion` enabled
- Every link is a real anchor with an `href` that points to the heading `id`
- Place the component after `<main>` in the source order so screen readers reach the content first, then use CSS to change its visual position
{% endblock %}

{% block options %}

<nys-alert heading="Which headings are tracked" type="info">
  <p>Only visible headings are tracked. Headings are skipped when they are empty, inside a <code>&lt;nys-accordion&gt;</code>, inside a <code>[hidden]</code> element, or marked with <code>data-nys-onthispage-ignore</code>. The list updates on its own when headings are added, removed, shown, hidden, or renamed.</p>
</nys-alert>

### Scope

By default, the component tracks headings inside `main`. Set `scope` to any CSS selector to track a different container. If the selector matches more than one element, the first one is used.
{% set code %}
<nys-onthispage scope="#guide"></nys-onthispage>

<article id="guide">
  <h2>Eligibility</h2>
  <h2>How to apply</h2>
</article>
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Heading level

The component tracks `h2` headings by default. Set `headingTracker` to `h3`, `h4`, `h5`, or `h6` to track a different level. The `h1` is never tracked.
{% set preview %}
<div style="display: flex; gap: 2rem; align-items: flex-start;">
  <nys-onthispage
    headingTracker="h3"
    scope="#onthispage-level"
    style="flex: 0 0 220px;"
  ></nys-onthispage>

  <article id="onthispage-level" style="flex: 1; min-width: 0;">
    <h1>This is a &lt;h1&gt; tag</h1>
    <h2>This is a &lt;h2&gt; tag</h2>
    <h3>This is a &lt;h3&gt; tag</h3>
    <h3>This is a &lt;h3&gt; tag</h3>
  </article>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Custom heading

Set `heading` to change the title above the list. The default is "On this page".
{% set preview %}
<div style="display: flex; gap: 2rem; align-items: flex-start;">
  <nys-onthispage
    heading="In this guide"
    scope="#onthispage-heading"
    style="flex: 0 0 220px;"
  ></nys-onthispage>

  <article id="onthispage-heading" style="flex: 1; min-width: 0;">
    <h2>Eligibility</h2>
    <p>You must be a New York State resident aged 18 or older.</p>

    <h2>How to apply</h2>
    <p>Complete the online form and upload your supporting documents.</p>

    <h2>What happens next</h2>
    <p>We review applications within 10 business days.</p>
  </article>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Excluding a heading

Add `data-nys-onthispage-ignore` to a heading to leave it out of the list.
{% set preview %}
<div style="display: flex; gap: 2rem; align-items: flex-start;">
  <nys-onthispage scope="#onthispage-ignore" style="flex: 0 0 220px;"></nys-onthispage>

  <article id="onthispage-ignore" style="flex: 1; min-width: 0;">
    <h2>Eligibility</h2>
    <p>You must be a New York State resident aged 18 or older.</p>

    <h2>How to apply</h2>
    <p>Complete the online form and upload your supporting documents.</p>

    <h2 data-nys-onthispage-ignore>Related links</h2>
    <p>This heading does not appear in the list.</p>
  </article>
</div>
{% endset %}
{% set codeLanguage = "html" %}
{% set codeExpanded = false %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Heading ids

Link targets come from the heading `id`. If a heading has no `id`, the component generates one from its text, such as `#how-to-apply`. Duplicate text gets a numbered suffix, such as `#how-to-apply-2`. Ids you set yourself are never changed.
{% set code %}
<h2 id="eligibility">Eligibility</h2>  <!-- #eligibility -->
<h2>How to apply</h2>                  <!-- #how-to-apply -->
<h2>How to apply</h2>                  <!-- #how-to-apply-2 -->
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Sticky Behavior
<nys-alert heading="Sticky not working?" type="warning">
  <p>The component is already sticky. Don't add <code>position: sticky</code> to a wrapper, and don't wrap it in a <code>&lt;div&gt;</code>, which has no height for it to stick in. Put it directly inside the <code>&lt;aside&gt;</code>.</p>
</nys-alert>

### Disable Sticky

The navigation is sticky by default. It stays at the top of the viewport while the user scrolls. Sticky only applies on viewports 480px wide or larger. Set `disableSticky` to let the navigation scroll with the page. Use `offset` to set the gap from the top of the viewport.
{% set code %}
<nys-onthispage disableSticky offset="24"></nys-onthispage>
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Offset

`offset` is the distance in pixels from the top of the viewport to the trigger line. A heading becomes active once its top edge reaches this line. The value also sets `scroll-margin-top` on tracked headings and the `top` value of the sticky navigation. The default is `80`.

Increase `offset` when the page has a fixed header, so headings are not hidden behind it after a link is clicked.

### Updating the URL

Set `hashBehavior` to control what happens to the URL when a link is clicked.
- `none`: leaves the URL alone _(default)_
- `hash`: adds a history entry for each click
- `replace`: updates the URL without adding a history entry
{% set code %}
<nys-onthispage hashBehavior="replace"></nys-onthispage>
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Smooth scrolling

Links scroll smoothly by default. Set `disableSmoothScroll` to jump straight to the section. Users with `prefers-reduced-motion` enabled always get instant scrolling.
{% set code %}
<nys-onthispage disableSmoothScroll></nys-onthispage>
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Page layout

<nys-alert heading="Placement on desktop" type="info">
  <p>On desktop, place the component in a side column. Where it goes depends on the site:</p>
  <ul>
    <li><strong>Left</strong> by default.</li>
    <li><strong>Right</strong> if the site has vertical navigation. Keep it on the right on every page, even when navigation isn't shown. Remain consistent!</li>
    <li><strong>Left</strong> if the site has no vertical navigation.</li>
  </ul>
</nys-alert>
<br/>
<nys-alert heading="Always show this component on mobile and tablet" type="warning">
  <p>Don't hide it on small screens. Add <code>nys-order-first</code> to the aside so it shows above <code>&lt;main&gt;</code>, below the page heading. Add <code>nys-desktop:nys-order-last</code> to move it to the right on desktop.</p>
</nys-alert>

On mobile and tablet, the navigation stacks above the content. From desktop, it moves to a side column. Keep `<main>` first in the source so screen readers reach the content before the navigation, and use the `order` utility classes to set the visual position.
{% set code %}
<div class="nys-grid-container">
  <div class="nys-grid-row nys-grid-gap">
    <main class="nys-desktop:nys-grid-col-9">
      <h1>Welcome to the Empire State of Mind</h1>

      <h2>Apple picking season</h2>
      <p>Orchards from the Hudson Valley to the Finger Lakes are open.</p>

      <h2>Pizza by the slice</h2>
      <p>Fold it. Do not eat it with a fork!</p>

      <h2>Road trip to Niagara Falls</h2>
      <p>Pack snacks and enjoy one of the most beautiful natural wonders in the world.</p>
    </main>

    <aside class="nys-desktop:nys-grid-col-3 nys-order-first nys-desktop:nys-order-last">
      <nys-onthispage offset="24"></nys-onthispage>
    </aside>
  </div>
</div>
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
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
      <td>string</td>
      <td><code>""</code> (auto-generated)</td>
    </tr>
    <tr>
      <td><code>headingTracker</code></td>
      <td><code>"h2"</code> | <code>"h3"</code> | <code>"h4"</code> | <code>"h5"</code> | <code>"h6"</code></td>
      <td><code>"h2"</code></td>
    </tr>
    <tr>
      <td><code>heading</code></td>
      <td>string</td>
      <td><code>"On this page"</code></td>
    </tr>
    <tr>
      <td><code>scope</code></td>
      <td>string (CSS selector)</td>
      <td><code>"main"</code></td>
    </tr>
    <tr>
      <td><code>disableSticky</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>number (px)</td>
      <td><code>80</code></td>
    </tr>
    <tr>
      <td><code>disableSmoothScroll</code></td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>hashBehavior</code></td>
      <td><code>"none"</code> | <code>"hash"</code> | <code>"replace"</code></td>
      <td><code>"none"</code></td>
    </tr>
  </table>
</nys-table>

<nys-table striped>
  <table>
    <tr>
      <th>Attribute</th>
      <th>Used on</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>data-nys-onthispage-ignore</code></td>
      <td>Heading (<code>h2</code> to <code>h6</code>)</td>
      <td>Leaves the heading out of the list.</td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

<nys-alert type="info"><span>Some components emit `nys-` events with a `detail` object containing the relevant data, instead of relying on native events alone. Stick to one approach per interaction, don't mix native and `nys-` listeners for the same thing.</span></nys-alert>

The `<nys-onthispage>` component emits **one** custom JavaScript event:

### Event details

<nys-table striped>
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Return details</th>
    </tr>
    <tr>
      <td><code>nys-click</code></td>
      <td>Fired when a link is activated.</td>
      <td>
        <ul>
          <li><code>id</code> (string): The <code>id</code> of the target heading.</li>
          <li><code>label</code> (string): The link text, taken from the heading text.</li>
          <li><code>index</code> (number): The zero-based position of the link in the list.</li>
        </ul>
      </td>
    </tr>
  </table>
</nys-table>

<br/>

You can listen to this event using JavaScript:
{% set code %}
// Select the onthispage component
const toc = document.querySelector("nys-onthispage");
// Listen for link activation
toc.addEventListener("nys-click", (event) => {
  const { id, label, index } = event.detail;
  console.log(`Clicked "${label}" (#${id}, position ${index})`);
});
// Clicking "How to apply" logs:
// Clicked "How to apply" (#how-to-apply, position 1)
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
 
{% endblock %}
 
{% block dependencies %}
 
This component has no dependencies on other NYSDS components.
 
{% endblock %}
 
{% block updates %}{% endblock %}