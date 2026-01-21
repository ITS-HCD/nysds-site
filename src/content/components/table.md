---
permalink: /components/table/
title: Table
description: A structured layout that displays data in rows and columns to help users scan, compare, and understand information efficiently.
image: /assets/img/components/table.svg
image_alt: An illustration of a table.
image_header: /assets/img/components/table-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=13670-31069
navOrder: 20
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-table>` is a reusable web component for use in New York State digital products. It provides a structured layout that displays data in rows and columns to help users scan, compare, and understand information efficiently.

{% endblock %}

{% block example %}
{% set preview %}
<nys-table>

  <table id="table1" name="table1">
    <caption>
      New York State High Peaks and Popular Hikes
    </caption>
    <tr>
      <th>Mountain</th>
      <th>Peak Height (ft)</th>
      <th>Hike Name</th>
    </tr>
    <tr>
      <td>Marcy</td>
      <td>5,344</td>
      <td>Van Hoevenberg Trail</td>
    </tr>
    <tr>
      <td>Algonquin</td>
      <td>5,114</td>
      <td>Northeast Trail</td>
    </tr>
    <tr>
      <td>Haystack</td>
      <td>4,960</td>
      <td>Johns Brook Trail</td>
    </tr>
    <tr>
      <td>Skylight</td>
      <td>4,926</td>
      <td>Lake Tear Trail</td>
    </tr>
    <tr>
      <td>Whiteface</td>
      <td>4,867</td>
      <td>Whiteface Mountain Trail</td>
    </tr>
  </table>
</nys-table>
{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block options %}

### Striped

Adding the `striped` property can improve readability by visually grouping row content with alternating background colors.

{% set preview %}
<nys-table id="table2" name="table2" striped>

  <table>
     <caption>
      New York State High Peaks and Popular Hikes
    </caption>
    <tr>
      <th>Mountain</th>
      <th>Peak Height (ft)</th>
      <th>Hike Name</th>
    </tr>
    <tr>
      <td>Marcy</td>
      <td>5,344</td>
      <td>Van Hoevenberg Trail</td>
    </tr>
    <tr>
      <td>Algonquin</td>
      <td>5,114</td>
      <td>Northeast Trail</td>
    </tr>
    <tr>
      <td>Haystack</td>
      <td>4,960</td>
      <td>Johns Brook Trail</td>
    </tr>
    <tr>
      <td>Skylight</td>
      <td>4,926</td>
      <td>Lake Tear Trail</td>
    </tr>
    <tr>
      <td>Whiteface</td>
      <td>4,867</td>
      <td>Whiteface Mountain Trail</td>
    </tr>
  </table>
</nys-table>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Bordered

Adding the `bordered` property can improve readability by adding a line between cells.

{% set preview %}
<nys-table id="table3" name="table3" bordered>

  <table>
     <caption>
      New York State High Peaks and Popular Hikes
    </caption>
    <tr>
      <th>Mountain</th>
      <th>Peak Height (ft)</th>
      <th>Hike Name</th>
    </tr>
    <tr>
      <td>Marcy</td>
      <td>5,344</td>
      <td>Van Hoevenberg Trail</td>
    </tr>
    <tr>
      <td>Algonquin</td>
      <td>5,114</td>
      <td>Northeast Trail</td>
    </tr>
    <tr>
      <td>Haystack</td>
      <td>4,960</td>
      <td>Johns Brook Trail</td>
    </tr>
    <tr>
      <td>Skylight</td>
      <td>4,926</td>
      <td>Lake Tear Trail</td>
    </tr>
    <tr>
      <td>Whiteface</td>
      <td>4,867</td>
      <td>Whiteface Mountain Trail</td>
    </tr>
  </table>
</nys-table>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Sortable

Adding the `sortable` property allows for the table to be reordered in ascending or descending order.

<nys-alert type="warning">
<p>Currently the <code>sortable</code> property does <strong>NOT</strong> support <code>rowspan</code> or <code>colspan</code>.</p>
</nys-alert>

{% set preview %}
<nys-table id="table4" name="table4" sortable>

  <table>
     <caption>
      New York State High Peaks and Popular Hikes
    </caption>
    <tr>
      <th>Mountain</th>
      <th>Peak Height (ft)</th>
      <th>Hike Name</th>
    </tr>
    <tr>
      <td>Marcy</td>
      <td>5,344</td>
      <td>Van Hoevenberg Trail</td>
    </tr>
    <tr>
      <td>Algonquin</td>
      <td>5,114</td>
      <td>Northeast Trail</td>
    </tr>
    <tr>
      <td>Haystack</td>
      <td>4,960</td>
      <td>Johns Brook Trail</td>
    </tr>
    <tr>
      <td>Skylight</td>
      <td>4,926</td>
      <td>Lake Tear Trail</td>
    </tr>
    <tr>
      <td>Whiteface</td>
      <td>4,867</td>
      <td>Whiteface Mountain Trail</td>
    </tr>
  </table>
</nys-table>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Download

Adding the `download` property adds a button which downloads the data that is being displayed. The `download` property takes in a string that points to the dataset. It does not parse and download the content in the `<nys-table>`.

{% set preview %}
<nys-table id="table5" name="table5" download="path/to/downloadable-data.csv">

  <table>
     <caption>
      New York State High Peaks and Popular Hikes
    </caption>
    <tr>
      <th>Mountain</th>
      <th>Peak Height (ft)</th>
      <th>Hike Name</th>
    </tr>
    <tr>
      <td>Marcy</td>
      <td>5,344</td>
      <td>Van Hoevenberg Trail</td>
    </tr>
    <tr>
      <td>Algonquin</td>
      <td>5,114</td>
      <td>Northeast Trail</td>
    </tr>
    <tr>
      <td>Haystack</td>
      <td>4,960</td>
      <td>Johns Brook Trail</td>
    </tr>
    <tr>
      <td>Skylight</td>
      <td>4,926</td>
      <td>Lake Tear Trail</td>
    </tr>
    <tr>
      <td>Whiteface</td>
      <td>4,867</td>
      <td>Whiteface Mountain Trail</td>
    </tr>
  </table>
</nys-table>
{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block usage %}

### When to use this component

- Displaying tabular data. When you need to display tabular information, such as statistical data.
- Displaying directories. When listing locations or resources that have similarly structured content for many items.

### When to consider something else

- Non-tabular data. Depending on the type of content, consider using other presentation formats, such as definition lists or hierarchical lists.
- Dashboards and other layouts. Don't use tables in place of a layout grid. Table content should follow a consistent structure using headers and logical columns and rows.
- Long-form content. Table cell content should be brief and scannable. If you find yourself drafting multiple bullet points or paragraphs within a single table cell, the content is likely better off under conventional page headers or in an accordion.

{% endblock %}

{% block usagedo %}

- Use for displaying tabular data.
- Use for displaying directories.

{% endblock %}

{% block usagedont %}

- Use for layouts
- Add `rowspan` or `colspan` with the `sortable` property
{% endblock %}

{% block accessibility %}

The `nys-table` component includes the following accessibility-focused features:

- Proper use of `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements to ensure semantic structure.
- Support for keyboard navigation, allowing users to navigate through table rows and cells using the keyboard.
  {% endblock %}

{% block properties %}

| Property   | Type    |
| ---------- | ------- |
| `id`       | String  |
| `name`     | String  |
| `striped`  | Boolean |
| `bordered` | Boolean |
| `sortable` | Boolean |
| `download` | String  |

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-table>` component does not emit any events.

{% endblock %}

{% block updates %}{% endblock %}
