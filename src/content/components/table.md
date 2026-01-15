---
permalink: /components/table/
title: Table
description: A structured layout that displays data in rows and columns to help users scan, compare, and understand information efficiently.
image: /assets/img/components/table.svg
image_alt: An illustration of a table.
image_header: /assets/img/components/table-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=13670-31069
navOrder: 19
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

- TODO
- TODO

### When to consider something else

- TODO
- TODO

{% endblock %}

{% block usagedo %}

- TODO
- TODO
- TODO

{% endblock %}

{% block usagedont %}

- TODO
- TODO

{% endblock %}

{% block accessibility %}

The `nys-table` component includes the following accessibility-focused features:

- TODO
- TODO

{% endblock %}

{% block properties %}

| Property    | Type    |
| ----------- | ------- |
| `id`        | String  |
| `name`      | String  |
| `striped`   | Boolean |
| `bordered`  | Boolean |
| `sortable`  | Boolean |
| `download`  | String  |

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}

{% block events %}

The `<nys-table>` component does not emit any events.

{% endblock %}

{% block updates %}{% endblock %}
