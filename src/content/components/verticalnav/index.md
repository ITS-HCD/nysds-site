---
permalink: /components/verticalnav/
title: Vertical Navigation
description: Responsive side navigation that collapses into an accordion on smaller screens.
image: /assets/img/components/verticalnav.svg
image_alt: An illustration of a vertical navigation menu.
image_header: /assets/img/components/verticalnav-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=27438-7659
eleventyExcludeFromCollections: true
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-verticalnav>` component renders a side navigation menu on desktop and collapses into a `<nys-accordion>` on tablet and mobile. It is commonly used on sites and applications with many links that may not fit in a horizontal navigation.

{% endblock %}

{% block example %}
{% set preview %}
<nys-verticalnav header="Freshwater Fishing" headerLevel="h2">
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

### Header slot

Replace the default heading with custom markup using the `header` slot.

{% set preview %}
<nys-verticalnav header="Freshwater Fishing" headerLevel="h2">
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
<nys-verticalnav header="Freshwater Fishing" headerLevel="h2">
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
<nys-verticalnav header="NYS Design System" headerLevel="h2">
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
<nys-verticalnav header="NYS Design System" headerLevel="h2">
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

### Hidden header 

Use `hideHeader` when the nav doesn't need a visible heading. The `header` text is still used as the accessible label for the accordion in smaller screens.

{% set preview %}
<nys-verticalnav header="Section nav" hideHeader>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nys-verticalnav>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Page layout

Use `<nys-verticalnav>` alongside a global header and footer to build a full page layout. On screens below 1024px, the nav collapses into an accordion automatically.

**Note:** The example below is for guidance only. Adjust the styles to fit your application's layout needs.

{% set preview %}
<style>
  .page-layout {
    display: flex;
    flex-direction: column;
  }
  .page-layout__body {
    display: flex;
    flex: 1;
  }
  .page-layout__main {
    flex: 1;
    padding: var(--nys-space-400, 32px);
  }
  @media (max-width: 1023px) {
    .page-layout__body {
      flex-direction: column;
      padding: var(--nys-space-400, 32px);
    }
  }
</style>
<div class="page-layout">
  <nys-unavheader></nys-unavheader>
  <nys-globalheader homepageLink="https://ny.gov" agencyName="Office of Information Technology Services">
    <ul>
      <li><a href="https://its.ny.gov/services">Services</a></li>
      <li><a href="https://its.ny.gov/get-help">Help Center</a></li>
    </ul>
  </nys-globalheader>
  <div class="page-layout__body">
    <nys-verticalnav header="NYS Design System" headerLevel="h2">
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
    <main class="page-layout__main">
      <p>Place content here.</p>
    </main>
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
      <td><code>header</code></td>
      <td>String</td>
      <td><code>"Page navigation"</code></td>
      <td>Heading text, and the accessible label when <code>hideHeader</code> is set.</td>
    </tr>
    <tr>
      <td><code>headerLevel</code></td>
      <td><code>"h1" | "h2" | "h3" | "h4" | "h5" | "h6"</code></td>
      <td><code>"h2"</code></td>
      <td>Heading tag used for the auto-generated header.</td>
    </tr>
    <tr>
      <td><code>hideHeader</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
      <td>Hides the visible heading. <code>header</code> is still used as the nav's accessible label.</td>
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

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}