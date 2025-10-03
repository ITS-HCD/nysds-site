---
permalink: /components/pagination/
title: Pagination
description: Pagination allows users to navigate through a large set of content or data that has been divided into smaller, more manageable sections or "pages."
image: /assets/img/components/pagination.svg
image_alt: An illustration of a pagination.
image_header: /assets/img/components/pagination-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=10600-10347
navOrder: 13
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-pagination>` provides users with the ability to to navigate through a large set of content or data that has been divided into smaller, more manageable sections or "pages."

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
  - When displaying large data sets or search results that would be overwhelming to display all at once
  - When users need control and orientation to navigate to a specific part of the content, such as page 5 of search results
  - When performance and load times matter, since pagination lets you fetch and render smaller chunks of data instead of everything at once.

### When to consider something else
  - If the collection is shorter than 3–4 screen lengths, it’s better to display all items at once rather than using pagination.
  - When you need to show progress through a series of tasks that must be completed in order—such as an onboarding process—use the `<nys-stepper>` component.
{% endblock %}

{% block usagedo %}

  - Use when content would be better to be spread across multiple pages.
  - When there is too much content to display all at once.
  - For tables and search results.
{% endblock %}

{% block usagedont %}

  - If the displayed collection can fit on less than 3 or 4 pages, consider displaying all items at once and using a scroll.
  - For interactive pages or collecting information, instead consider the `<nys-stepper>`

{% endblock %}

{% block accessibility %}

The `<nys-pagination>` component includes the following accessibility-focused features:

- Fewer buttons on a pagination interface are preferable because they minimize cognitive load, reduce visual clutter, and improve usability, especially on smaller screens. A simpler design helps users focus on the content and prevents analysis paralysis. Larger paginations use more space without proportional increases to the component’s functionality.
- Provide a clear, visible focus indicator for buttons so users can see where they are.
- Keyboard navigation support, allowing users to toggle the pages using the keyboard.
- Visual focus indicators to help users navigate the component.
{% endblock %}

{% block options %}

### Small Screens

  The `<nys-pagination>` component automatically renders in a condensed format on small screens.

**Note:** If totalPages is 1 then the `<nys-pagination>` component will not be visible.

### Current Page
The prop `currentPage` takes in the page number you are currently on. This value cannot be larger than the value of totalPages. If a value larger than totalPages is passed in, it will return the last available page. The default value is 1.

### Total Pages
The prop `totalPages` takes in the number of total pages to view.

{% endblock %}

{% block properties %}

| Property       | Type             |
|----------------|------------------|
| `id`           | String           |
| `name`         | String           |
| `currentPage`  | Number           |
| `totalPages`   | Number           |


{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-pagination>` component emits <strong>one</strong> custom Javascript event:

1.  **`nys-change`** – Fired when the `currentPage` value is changed.

#### Event details
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