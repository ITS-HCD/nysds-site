---
permalink: /components/unav-header/
title: UNav Header
description: A small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.
image: 
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-unavheader&gt;</code> is a reusable web component for use in New York State digital products. It helps provide users with a small NYS-branded header at the top of every page to ensure users they are on a secure NYS site.

<nys-icon name="info"></nys-icon> The Universal Navigation Header remains consistent across all sites.

{% endblock %}

{% block example %}

<nys-unavheader></nys-unavheader>
{% endblock %}

{% block examplecode %}

<nys-unavheader></nys-unavheader>

{% endblock %}

{% block usage %}

### When to use this component
  - Use `nys-unavheader` at the top of every page.
### When to consider something else
  - Do not place the `nys-unavheader` anywhere other than the top of the page.

{% endblock %}

{% block usagedo %}

  - Place it only at the top of the page as the final footer.
  - Toggle search and translate on/off depending on your needs

{% endblock %}

{% block usagedont %}

  - Don't place it anywhere other than the top of the page.
  - Don't modify the header

{% endblock %}

{% block accessibility %}

The <code class="language-js">nys-unavheader</code> component includes the following accessibility-focused features:

  - Proper use of `<header>` and `<a>` elements ensures compatibility with assistive technologies.
  - Keyboard navigation: Users can tab through all links in the header.
{% endblock %}

{% block options %}

### Search toggle

<nys-unavheader hideSearch></nys-unavheader>

<details>
<summary>Example Code</summary>

```html
<nys-unavheader hideSearch></nys-unavheader>
```
</details>

### Translate toggle

<nys-unavheader hideTranslate ></nys-unavheader>

<details>
<summary>Example Code</summary>

```html
<nys-unavheader hideTranslate></nys-unavheader>
```
</details>

{% endblock %}

{% block properties %}

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hideTranslate</code></td>
      <td>boolean</td>
    </tr>
    <tr>
      <td><code>hideSearch</code></td>
      <td>boolean</td>
    </tr>
  </tbody>
</table>
{% endblock %}



{% block cssvariables %}{% endblock %}

{% block events %}{% endblock %}

{% block updates %}{% endblock %}
