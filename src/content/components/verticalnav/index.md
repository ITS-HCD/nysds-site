---
permalink: /components/verticalnav/
title: Vertical Navigation
description: Responsive side navigation that collapses into an accordion on smaller screens.
image: /assets/img/components/verticalnav.svg
image_alt: An illustration of a vertical navigation menu.
image_header: /assets/img/components/verticalnav-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=27438-7659
eleventyExcludeFromCollections: false
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-verticalnav>` component renders a side navigation menu on desktop and collapses into a `<nys-accordion>` on tablet and mobile. It is commonly used on sites and applications with many links that may not fit in a horizontal navigation.

{% endblock %}

{% block example %}
{% set preview %}
<nys-verticalnav heading="Freshwater Fishing" headingLevel="h2">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li>
      <h3>Freshwater Fishing Regulations</h3>
      <ul>
        <li><a href="">Places to Fish</a></li>
        <li><a href="">Learn to Fish</a></li>
        <li><a href="">Ice Fishing</a></li>
      </ul>
    </li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usagedo %}

- Use for navigation where every item links to a different page.
- Use for section-level navigation within a site.
- Support up to two levels of navigation: top-level links and one level of nested links.
- Set `aria-current="page"` on the active link so the component can apply active styles and expand the current group.
- Avoid excessive use of icons, colors, or badges in navigation items.

{% endblock %}

{% block usagedont %}

- Don't use for in-page navigation, such as scrolling to sections on the same page.
- Don't use for linear task flows, such as multi-step forms or wizards.
- Don't use for filtering, tab switching, or other in-page interactions.
- Don't nest more than one level of sub-items.
- Don't overload with excessive use of icons, colors, or badges in navigation items.


{% endblock %}

{% block accessibility %}

The `<nys-verticalnav>` component includes the following accessibility-focused features:

- The nav region is labeled via `aria-labelledby` (pointing to the header) or `aria-label` when the header is hidden.
- On mobile, the nav becomes an accordion, keeping all links reachable with the same keyboard interactions as `nys-accordion`.
- A link with `aria-current="page"` automatically gets active styling, and any containing `nys-verticalnavgroup` auto-expands so the active link is visible on load.
- `nys-verticalnavgroup` triggers are real `<button>` elements with `aria-expanded` reflecting open/closed state.

{% endblock %}

{% block options %}

### Heading slot

Replace the default heading with custom markup using the `heading` slot.

{% set preview %}
<nys-verticalnav heading="Freshwater Fishing" headingLevel="h2">
  <div slot="header">
    <h2>Freshwater Fishing</h2>
    <p>2026 Season Open</p>
  </div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Footer slot

Add extra content below the links, like a divider and contact info.

{% set preview %}
<nys-verticalnav heading="Freshwater Fishing" headingLevel="h2">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
  </ul>
  <div slot="footer">
    <nys-divider></nys-divider>
    <p>Regulations last updated: January 2026</p>
    <a href="/contact-dec">Contact the DEC for fishing inquiries</a>
  </div>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Collapsible groups

Use `<nys-verticalnavgroup>` for a set of links that expand and collapse. Add `expanded` to open it by default, or `disabled` to prevent interaction.

{% set preview %}
<nys-verticalnav heading="NYS Design System" headingLevel="h2">
  <ul>
    <li><a href="/">Foundations</a></li>
    <li>
      <nys-verticalnavgroup label="Accessibility">
        <ul>
          <li><a href="">WCAG Guidelines</a></li>
          <li><a href="">Screen Readers</a></li>
          <li><a href="">Color Contrast</a></li>
        </ul>
      </nys-verticalnavgroup>
    </li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Active link

Set `aria-current="page"` on a link to mark it active. If it's inside a `nys-verticalnavgroup`, the group auto-expands.

{% set preview %}
<nys-verticalnav heading="NYS Design System" headingLevel="h2">
  <ul>
    <li><a href="/">Foundations</a></li>
    <li>
      <nys-verticalnavgroup label="Accessibility">
        <ul>
          <li><a aria-current="page" href="">WCAG Guidelines</a></li>
          <li><a href="">Screen Readers</a></li>
        </ul>
      </nys-verticalnavgroup>
    </li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Hidden heading 

Use `hideHeading` when the nav doesn't need a visible heading. The `heading` text is still used as the accessible label for the accordion in smaller screens.

{% set preview %}
<nys-verticalnav heading="Section nav" hideHeading>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Page layout

Use `<nys-verticalnav>` alongside a global header and footer to build a full page layout. On screens below 1024px, the nav collapses into an accordion automatically.

This example uses the [NYSDS grid](/foundations/utilities/grid/) to lay out the nav and main content side by side, switching to a stacked layout at the `nys-desktop` breakpoint (1024px). This approach matches the width at which `<nys-verticalnav>` itself collapses into an accordion.

**Note:** The example below is for guidance only. Adjust the styles to fit your application's layout needs. `<nys-verticalnav>` doesn't add its own outer spacing, so wrap it (like `.page-layout__nav` below) and add padding yourself to match your site's layout.

{% set preview %}
<style>
  .page-layout__body {
    background-color: var(--nys-color-white, #ffffff);
  }
  .page-layout__nav {
    padding: var(--nys-space-300, 24px) var(--nys-space-50, 4px) var(--nys-space-300, 24px) 0;
  }
  .page-layout__main {
    padding: var(--nys-space-400, 32px);
  }
</style>
<div>
  <nys-unavheader></nys-unavheader>
  <nys-globalheader homepageLink="https://ny.gov" agencyName="Office of Information Technology Services">
    <ul>
      <li><a href="https://its.ny.gov/services">Services</a></li>
      <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
    </ul>
  </nys-globalheader>
  <div class="page-layout__body">
    <div class="nys-grid-container nys-grid-gap-400">
      <div class="nys-grid-row">
        <div class="nys-desktop:nys-grid-col page-layout__nav">
          <nys-verticalnav heading="NYS Design System" headingLevel="h2">
            <ul>
              <li><a href="/">Foundations</a></li>
              <li><a href="/components">Components</a></li>
              <li>
                <nys-verticalnavgroup label="Accessibility">
                  <ul>
                    <li><a href="">WCAG Guidelines</a></li>
                    <li><a href="">Screen Readers</a></li>
                    <li><a href="">Color Contrast</a></li>
                  </ul>
                </nys-verticalnavgroup>
              </li>
              <li>
                <h3>Resources</h3>
                <ul>
                  <li><a href="">Design Tokens</a></li>
                  <li><a href="">Utilities</a></li>
                </ul>
              </li>
            </ul>
          </nys-verticalnav>
        </div>
        <main class="nys-desktop:nys-grid-col page-layout__main">
          <p>Place content here.</p>
        </main>
      </div>
    </div>
  </div>
  <nys-globalfooter agencyName="Agency Name" homepageLink="https://ny.gov">
    <ul>
      <li><a href="https://"> Privacy Policy </a></li>
      <li><a href="https://"> Terms of Service </a></li>
    </ul>
  </nys-globalfooter>
  <nys-unavfooter></nys-unavfooter>
</div>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Mobile controls
Call `open()`, `close()`, or `toggle()` on the mobile version of `nys-verticalnav` to control the mobile accordion programmatically.

**Note:** useful for a hamburger button or other trigger placed outside the nav itself. These methods only have a visible effect below the 1024px breakpoint, where the nav renders as an accordion; at desktop widths the nav is always visible.

{% set preview %}
<nys-verticalnav id="my-nav">
  <ul>
    <li><a href="/">Foundations</a></li>
    <li><a href="/components">Components</a></li>
    <li>
      <nys-verticalnavgroup label="Accessibility">
        <ul>
          <li><a href="">WCAG Guidelines</a></li>
          <li><a href="">Screen Readers</a></li>
          <li><a href="">Color Contrast</a></li>
        </ul>
      </nys-verticalnavgroup>
    </li>
    <li>
      <h3>Resources</h3>
      <ul>
        <li><a href="">Design Tokens</a></li>
        <li><a href="">Utilities</a></li>
      </ul>
    </li>
  </ul>
</nys-verticalnav>
<nys-button label="Toggle navigation (mobile view only)" onclick="document.querySelector('#my-nav').toggle()"></nys-button>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}


{% endblock %}

{% block properties %}

### nys-verticalnav

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>heading</code></td>
      <td>String</td>
      <td><code>"Page navigation"</code></td>
      <td>Heading text, and the accessible label when <code>hideHeading</code> is set.</td>
    </tr>
    <tr>
      <td><code>headingLevel</code></td>
      <td><code>"h1" | "h2" | "h3" | "h4" | "h5" | "h6"</code></td>
      <td><code>"h2"</code></td>
      <td>Heading tag used for the auto-generated heading.</td>
    </tr>
    <tr>
      <td><code>hideHeading</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Hides the visible heading. <code>heading</code> is still used as the nav's accessible label.</td>
    </tr>
  </table>
</nys-table>

### nys-verticalnavgroup

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
      <td>—</td>
      <td>Text shown on the toggle button.</td>
    </tr>
    <tr>
      <td><code>expanded</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Opens the group by default.</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Prevents the group from being toggled.</td>
    </tr>
    <tr>
      <td><code>active</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Set automatically when the group contains the active link. Not meant to be set manually.</td>
    </tr>
  </table>
</nys-table>
{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-verticalnav>` component emits **one** custom Javascript event:

1.  **`nys-verticalnav-toggle`** – Fired when the mobile accordion is expanded or collapsed. This only applies on smaller screens, where the nav collapses into an accordion (see [Page layout](#page-layout)). On desktop the nav is always visible and this event does not fire.

### Event details

The `nys-verticalnav-toggle` event includes a detail object with the following properties:

- id (string): The id of the vertical nav.
- expanded (boolean): Whether the nav is now expanded.

You can listen to these events using JavaScript:
{% set code %}
// Select the vertical nav component
const verticalnav = document.querySelector('nys-verticalnav');
// Listen for the 'nys-verticalnav-toggle' event (mobile accordion only)
verticalnav.addEventListener('nys-verticalnav-toggle', (event) => {
  const { id, expanded } = event.detail;
  console.log(`Vertical nav with id="${id}" is now ${expanded ? "expanded" : "collapsed"}.`);
});
{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block dependencies %}

{% set dependencies = [
"<nys-accordion>", "<nys-accordionitem>", "<nys-verticalnavgroup>"
] %}

{% include "partials/dependencies.njk" %}

{% endblock %}

{% block updates %}{% endblock %}