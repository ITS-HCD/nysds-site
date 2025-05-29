---
permalink: /components/avatar/
title: Avatar
description: Avatars visually represent a user or entity as initials, a photo, or an icon.
image: /assets/img/components/avatar.svg
image_alt: An illustration of an avatar icon.
image_header: /assets/img/components/avatar-header.svg
navOrder: 3
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The <code class="language-js">&lt;nys-avatar&gt;</code> component is used to visually represent a user or entity.

By default, a generic icon is displayed. Personalize avatars with a custom <code class="language-js">icon</code>, <code class="language-js">initials</code>, or <code class="language-js">image</code>, and always include a <code class="language-js">label</code> for accessibility.
{% endblock %}

{% block example %}
  {% set preview %}<nys-avatar label="User avatar"></nys-avatar>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

- To visually represent users, objects, or entities in a UI.
- Ideal for profiles, account settings, or comment threads.

### When to consider something else

  - If you need to show a large visual representation of a user or entity, use a photo.
  - When a simple label or text works better.

{% endblock %}

{% block usagedo %}

  - Use for clear, simple user or entity representation.
  - On Tablet and above, prefer showing the full name of the user or entity.
  - Place the full name of the user or entity to the right of the avatar.
  - Ensure the text of initial avatars meets WCAG 2.1 contrast ratio against the avatar's background.
  - Use <code class="language-js">nys-icon</code> as a slot when you need further customizations that the <code class="language-js">icon</code> prop can't provide.
{% endblock %}

{% block usagedont %}

  - Don't overload the avatar with unnecessary customizations.
  - Don't override the default user or entity avatar icons unless needed to communicate additional context to the viewer; doing so provides an inconsistent user experience across NYS applications and websites.
  - [Dev] Don't skip the <code class="language-js">label</code> attribute for screen reader users.
  - [Dev] Don't use the <code class="language-js">nys-icon</code> as a slot when icon prop can satisfy your use.
{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-avatar&gt;</code> component includes the following accessibility-focused features:

  - For initial avatars, include the person's full name as descriptive alt text if the person's full name is not shown next to the avatar: <code>alt="John Smith"</code>
  - For photo avatars, describe the avatar, and include the person's full name if it is not shown next to the avatar: <code>alt="Photo of John Smith"</code>
  - Proper ARIA roles and attributes to ensure screen readers can interpret the avatar correctly.
  - A label property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Images
<p>To display an image in the avatar, set the <code class="language-js">image</code> and <code class="language-js">label</code> attributes. Images will take <strong>priority</strong> and <strong>override</strong> initials and icons. You can also enable lazy loading for avatar images by setting the <code class="language-js">lazy</code> boolean attribute.</p>

  {% set preview %}<nys-avatar label="User avatar" image="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=100" lazy>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Initials

<p>If an image is unavailable, you can set the <code class="language-js">initials</code> attribute to display a personalized placeholder instead of an icon. Initials will take <strong>priority</strong> and <strong>override</strong> icons.</p>

  {% set preview %}<nys-avatar label="User avatar" initials="NY"></nys-avatar>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Custom Icons

<p>When no image or initials are set, an icon will be shown. The default avatar shows an icon called "account_circle", but you can customize this with any other name found in <code class="language-js">&lt;nys-icon&gt;</code> using the <code class="language-js">icon</code> prop or customize directly within <code class="language-js">&lt;nys-avatar&gt;</code> with the icon slot.</p>

  {% set preview %}<nys-avatar label="User avatar"></nys-avatar>
<nys-avatar label="Youtube avatar" color="#f2efee">
  <nys-icon label="youtube icon" name="social_youtube" color="#b2071d" size="lg"></nys-icon>
</nys-avatar>
<nys-avatar label="Snow avatar" icon="ac_unit"></nys-avatar>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Shapes

<p>To change the shape of the avatar, set the <code class="language-js">shape</code> attribute. The default shape is <strong>circle</strong>, but you can also set it to <strong>square</strong> or <strong>rounded</strong>.</p>

  {% set preview %}<nys-avatar label="User avatar" shape="circle"></nys-avatar>
<nys-avatar label="User avatar" shape="rounded"></nys-avatar>
<nys-avatar label="User avatar" shape="square"></nys-avatar></nys-avatar>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Background Color

You can change the background color of an Avatar. Note that images will naturally cover over the background color.

  {% set preview %}<nys-avatar label="User avatar" color="purple"></nys-avatar>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

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
      <td><code>label</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>URL</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>initials</code></td>
      <td>string (2 letters)</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>string (&lt;nys-icon&gt;)</td>
    </tr>
    <tr>
      <td><code>shape</code></td>
      <td>string (square, roundedd, circle)</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>#HEXVAL</td>
    </tr>
    <tr>
      <td><code>lazy</code></td>
      <td>boolean</td>
    </tr>
  </tbody>
</table>

{% endblock %}
[[TODO]]
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--nys-toggle-width</code></td>
      <td>Width of the toggle switch.</td>
    </tr>
  </tbody>
  </table>

{% block cssvariables %}


{% endblock %}

{% block events %}

{% endblock %}

{% block updates %}{% endblock %}
