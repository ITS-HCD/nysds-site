---
title: Icon
description: Visual symbols used to convey meaning or action.
image: /assets/img/components/icon.svg
image_alt: An illustration of an icon.
---

{% extends "layouts/component.njk" %}

{% block longdescription %}
The <code class="language-js">&lt;nys-icon&gt;</code> component is a reusable web component for use in New York State digital products. It provides users with the ability to choose a specific svg icon to use.
{% endblock %}

{% block example %}
<nys-icon name="check_circle" size="4xl" color="var(--nys-color-success)"></nys-icon>
{% endblock %}

{% block examplecode %}
<nys-icon
  name="check_circle"
  size="4xl"
  color="var(--nys-color-success)"
>
{% endblock %}


{% block usage %}
### General
<div class="nys-grid-row nys-grid-gap-2">


<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="account_circle"></nys-icon></div><div class="card__desc"> account_circle</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="calendar_month"></nys-icon></div><div class="card__desc"> calendar_month</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="cancel"></nys-icon></div><div class="card__desc"> cancel</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="check"></nys-icon></div><div class="card__desc"> check</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="close"></nys-icon></div><div class="card__desc"> close</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="download"></nys-icon></div><div class="card__desc"> download</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="download_done"></nys-icon></div><div class="card__desc"> download_done</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="drive_folder_upload"></nys-icon></div><div class="card__desc"> drive_folder_upload</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="edit_square"></nys-icon></div><div class="card__desc"> edit_square</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="help"></nys-icon></div><div class="card__desc"> help</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="language"></nys-icon></div><div class="card__desc"> language</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="menu"></nys-icon></div><div class="card__desc"> menu</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="more_vert"></nys-icon></div><div class="card__desc"> more_vert</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="open_in_new"></nys-icon></div><div class="card__desc"> open_in_new</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="publish"></nys-icon></div><div class="card__desc"> publish</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="search"></nys-icon></div><div class="card__desc"> search</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="share"></nys-icon></div><div class="card__desc"> share</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="sms"></nys-icon></div><div class="card__desc"> sms</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="thumb_down"></nys-icon></div><div class="card__desc"> thumb_down</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="thumb_up"></nys-icon></div><div class="card__desc"> thumb_up</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="upload_file"></nys-icon></div><div class="card__desc"> upload_file</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="visibility"></nys-icon></div><div class="card__desc"> visibility</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="visibility_off"></nys-icon></div><div class="card__desc"> visibility_off</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="notifications"></nys-icon></div><div class="card__desc"> notifications</div></div></div>
</div>

### Social
<div class="nys-grid-row nys-grid-gap-2">
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_facebook"></nys-icon></div><div class="card__desc"> social_facebook</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_flickr"></nys-icon></div><div class="card__desc"> social_flickr</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_google_play"></nys-icon></div><div class="card__desc"> social_google_play</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_instagram"></nys-icon></div><div class="card__desc"> social_instagram</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_linkedin"></nys-icon></div><div class="card__desc"> social_linkedin</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_pinterest"></nys-icon></div><div class="card__desc"> social_pinterest</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_rss"></nys-icon></div><div class="card__desc"> social_rss</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_snapchat"></nys-icon></div><div class="card__desc"> social_snapchat</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_soundcloud"></nys-icon></div><div class="card__desc"> social_soundcloud</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_tiktok"></nys-icon></div><div class="card__desc"> social_tiktok</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_tumblr"></nys-icon></div><div class="card__desc"> social_tumblr</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_vimeo"></nys-icon></div><div class="card__desc"> social_vimeo</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_x"></nys-icon></div><div class="card__desc"> social_x</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_youtube"></nys-icon></div><div class="card__desc"> social_youtube</div></div></div>
</div>

### Arrows
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="arrow_back"></nys-icon></div><div class="card__desc"> arrow_back</div></div></div>
</div>

### Chevrons
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_down"></nys-icon></div><div class="card__desc"> chevron_down</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_up"></nys-icon></div><div class="card__desc"> chevron_up</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_left"></nys-icon></div><div class="card__desc"> chevron_left</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_right"></nys-icon></div><div class="card__desc"> chevron_right</div></div></div>
</div>

### Environmental
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="ac_unit"></nys-icon></div><div class="card__desc"> ac_unit</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="air"></nys-icon></div><div class="card__desc"> air</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="clear_day"></nys-icon></div><div class="card__desc"> clear_day</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="coronavirus"></nys-icon></div><div class="card__desc"> coronavirus</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="rainy"></nys-icon></div><div class="card__desc"> rainy</div></div></div>
</div>

### Intent
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="check_circle"></nys-icon></div><div class="card__desc"> check_circle</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="emergency_home"></nys-icon></div><div class="card__desc"> emergency_home</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="error"></nys-icon></div><div class="card__desc"> error</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="info"></nys-icon></div><div class="card__desc"> info</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="warning"></nys-icon></div><div class="card__desc"> warning</div></div></div>
</div>

### Filled
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="account_balance_filled"></nys-icon></div><div class="card__desc"> account_balance_filled</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="cancel_filled"></nys-icon></div><div class="card__desc"> cancel_filled</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="language_filled"></nys-icon></div><div class="card__desc"> language_filled</div></div></div>
<div class="nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="lock_filled"></nys-icon></div><div class="card__desc"> lock_filled</div></div></div>
</div>

### When to use this component
  - To provide recognizable visual representations for common actions or objects (e.g., search, download, social media links).
  - Ideal for enhancing navigation menus, buttons, or other interactive elements with visual cues.
### When to consider something else
  - If an icon does not add meaningful value to the context or might confuse users.
  - When a descriptive label or plain text provides clearer communication.
{% endblock %}

{% block usagedo %}
  - Use icons to enhance user interfaces with clear, recognizable icons.
  - Use appropriate icons align with the purpose and context of the UI elements they accompany.
  - Provide an accessible label using the label attribute to ensure screen readers can interpret the icon's purpose (if warranted).
  - Customize icon sizes and colors to match the design system.
{% endblock %}

{% block usagedont %}
<ul>
<li><p>Use icons that lack clarity or context for their intended purpose.</p></li>
<li><p>Use excessive customization that distracts from UI and established design patterns.</p></li>
<li><p>Replace meaningful text with an icon unless its meaning is universally recognized or accompanied by a text label.</p></li>
</ul>
{% endblock %}

{% block accessibility %}
The <code class="language-js">nys-icon</code> component includes the following accessibility-focused features:

**ARIA Hidden by Default**: If no label is provided, the icon is hidden from screen readers by setting aria-hidden="true".

**Customizable ARIA Label**: If a label is provided, the component automatically adds an aria-label attribute, making the icon accessible to screen readers.
{% endblock %}

{% block options %}
### Size
You can scale icons either relatively (based on the parent element’s font size) or literally (with predefined size values). The icons support two sizing systems: relative sizes and literal sizes.

#### Relative Sizing
To scale an icon relative to the inherited font size, pass a size variant like size=[variant name] as a prop. The values will scale based on the current font size of the parent element.

  - <code class="language-js">2xs</code> (extra-extra small): 75% of parent font size
  - <code class="language-js">xs</code> (extra small): 87.5% of parent font size
  - <code class="language-js">sm</code> (small): 100% of parent font size
  - <code class="language-js">md</code> (medium): 112.5% of parent font size
  - <code class="language-js">lg</code> (large): 125% of parent font size
  - <code class="language-js">xl</code> (extra large): 150% of parent font size
  - <code class="language-js">2xl</code> (double extra large): 187.5% of parent font size
  - <code class="language-js">3xl</code> (triple extra large): 225% of parent font size
  - <code class="language-js">4xl</code> (quadruple extra large): 300% of parent font size

#### Literal Sizing
For fixed, predefined sizes, you can use literal sizes. These sizes are defined in rem units, which provide fixed scaling options.

  - <code class="language-js">12</code>: 0.75rem = 12px
  - <code class="language-js">16</code>: 1rem = 16px
  - <code class="language-js">24</code>: 1.5rem = 24px
  - <code class="language-js">32</code>: 2rem = 32px
  - <code class="language-js">48</code>: 3rem = 48px
  - <code class="language-js">64</code>: 4rem = 64px

### Color

You can override the color of an icon by setting a `color` prop. You can use CSS HEX values, CSS color names, or CSS variables

      <nys-icon label="upload_file icon" name="upload_file" color="#db117d" size="4xl"></nys-icon>

### Rotate
You can `rotate` an icon by passing the angle as a number, like rotate="20" (without "deg").

      <nys-icon label="upload_file icon" name="upload_file" rotate="20" size="4xl"></nys-icon>


### Flip
Set an icon to flip horizontally, vertically, or in both directions by using the `flip` property. Available values are `horizontal`, `vertical`, and `both`.

<nys-icon label="upload_file icon" name="upload_file" flip="horizontal" size="4xl"></nys-icon>



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
      <td><code>name</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>string (2xs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 12, 16, 24, 32, 48, 64)</td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>string (CSS HEX, CSS color name, or CSS variable)</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
    </tr>
    <tr>
      <td><code>rotate</code></td>
      <td>integer</td>
    </tr>
    <tr>
      <td><code>flip</code></td>
      <td>string (horizontal, vertical, both)</td>
    </tr>
  </tbody>
</table>

{% endblock %}

{% block cssvariables %}
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

{% endblock %}

{% block events %}
[[TODO]]
<p>The <code class="language-js">&lt;nys-&gt;</code> component emits <strong>three</strong> custom Javascript events:</p>
<ol>
<li><strong><code>change</code></strong> – Fired when the toggle state changes (checked/unchecked).</li>
<li><strong><code>focus</code></strong> – Fired when the toggle gains focus.</li>
<li><strong><code>blur</code></strong> – Fired when the toggle loses focus.</li>
<li><strong><code>keydown</code></strong> – Fired when a key is pressed while the toggle is focused.</li>
</ol>

You can listen to these events using JavaScript:
{% highlight "js" %}
// Select the toggle component
  const toggle = document.querySelector('nys-toggle');

  // Listen for the 'change' event
  toggle.addEventListener('change', (event) => {
    console.log('Checkbox changed:', event.target.checked);
  });
{% endhighlight %}
{% endblock %}

{% block updates %}{% endblock %}