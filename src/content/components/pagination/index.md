---
permalink: /components/pagination/
title: Pagination
description: Enables users to navigate through large sets of content or data divided into smaller, more manageable pages.
image: /assets/img/components/pagination.svg
image_alt: An illustration of a pagination.
image_header: /assets/img/components/pagination-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=10600-10347
navOrder: 17
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-pagination>` component provides Previous/Next buttons and numbered page links for navigating large sets of content or data. It auto-collapses page numbers with ellipses when there are many pages, and renders a compact layout on mobile.

{% endblock %}

{% block example %}
  {% set preview %}<nys-pagination currentPage="2" totalPages="7"></nys-pagination>
 {% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}

### When to use this component
  - Use for search results, such as a professional license lookup that returns hundreds of matches across the state.
  - Use for data tables, such as paginated case records, permit applications, or document listings.
  - Use when performance matters. Pagination lets you fetch and render smaller data chunks instead of loading everything at once.
  - Use when users need to navigate to a specific part of a result set, such as jumping to page 5 of an agency directory.

### When to consider something else
  - If the result set is short enough to display on a single page (fewer than 3-4 screen heights), show all items and skip pagination.
  - When you need to show progress through a series of sequential tasks -- such as a benefits enrollment workflow -- use the `<nys-stepper>` component instead.
  - For infinite-scroll patterns (e.g., a news feed), pagination is not the right fit.
{% endblock %}

{% block usagedo %}

  - Set `totalPages` based on your data set and page size. Update `currentPage` in response to `nys-change` events.
  - Position the pagination component below the content it controls, so users see results before navigating.
  - Scroll users to the top of the results area when they change pages, so they start reading from the beginning of the new page.
{% endblock %}

{% block usagedont %}

  - Don't use pagination when content fits on a single scrollable page. Splitting short content across multiple pages adds unnecessary clicks.
  - Don't use pagination for step-based workflows where users complete tasks in order. Use `<nys-stepper>` instead.
  - Don't set `currentPage` to a value greater than `totalPages`. The component clamps the value automatically, but your application logic should prevent this.

{% endblock %}

{% block accessibility %}

The `<nys-pagination>` component includes the following accessibility-focused features:

- Each page button includes an `ariaLabel` of "Page N" so screen readers announce the page number clearly.
- Previous and Next buttons are disabled (not removed) when at the first or last page, so screen readers can still discover them and understand the navigation range.
- On mobile, Previous and Next buttons switch to icon-only versions with `ariaLabel` attributes ("Previous Page" / "Next Page") to maintain accessibility without visible labels.
- All buttons are keyboard-focusable. Users can `Tab` through pagination controls and activate them with `Enter` or `Space`.
- The component auto-collapses page numbers with ellipsis buttons to reduce cognitive load, especially on smaller screens.
{% endblock %}

{% block options %}

### First Page
When `currentPage` is `1`, the Previous button is disabled. The component shows the first few page numbers and the last page.

{% set preview %}<nys-pagination currentPage="1" totalPages="12"></nys-pagination>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Middle Page
When the user is in the middle of the result set, the component shows ellipsis on both sides with the current page centered.

{% set preview %}<nys-pagination currentPage="6" totalPages="12"></nys-pagination>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Last Page
When `currentPage` equals `totalPages`, the Next button is disabled. The component shows the first page and the last few page numbers.

{% set preview %}<nys-pagination currentPage="12" totalPages="12"></nys-pagination>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Few Pages
When there are only a handful of pages, all page numbers are shown without ellipsis.

{% set preview %}<nys-pagination currentPage="2" totalPages="3"></nys-pagination>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Single Page
When `totalPages` is `1`, the component renders nothing. Pagination is unnecessary when all content fits on one page.

{% set code %}<nys-pagination currentPage="1" totalPages="1"></nys-pagination>
<!-- Nothing renders -->{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Responsive Behavior
On screens below 768px, the component automatically switches to a condensed layout: Previous and Next buttons become icon-only, and neighboring page numbers are hidden to save space.

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
      <td><code>name</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>currentPage</code></td>
      <td>Number</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>totalPages</code></td>
      <td>Number</td>
      <td><code>1</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-pagination>` component emits <strong>one</strong> custom Javascript event:

1.  **`nys-change`** – Fired when the `currentPage` value is changed.

### Event details
The `nys-change` event includes a detail object with the following properties:

  - id (string): The id of the pagination component.
  - page (integer): The new value of `currentPage`

You can listen to these events using JavaScript:
{% set code %}// Select the pagination component
const pagination = document.querySelector("nys-pagination");
// Listen for the 'nys-change' event
pagination.addEventListener("nys-change", (event) => {
	console.log("Pagination is changed to page ${event.detail.page}");
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}