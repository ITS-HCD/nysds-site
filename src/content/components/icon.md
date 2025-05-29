---
permalink: /components/icon/
title: Icon
description: Visual symbols used to concisely convey information and increase visual appearance.
image: /assets/img/components/icon.svg
image_alt: An illustration of an icon.
image_header: /assets/img/components/icon-header.svg
navOrder: 8
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

An icon (<code class="language-js">&lt;nys-icon&gt;</code>) is a visual symbol used to concisely convey meaning or action and can add to visual appearance. Icons are meant to enhance, not replace textual information. NYSDS includes a curated subset of the Google Material Symbols rounded icon set.
{% endblock %}

{% block example %}
  {% set preview %}<nys-icon name="check_circle" size="4xl" color="var(--nys-color-success)"></nys-icon>{% endset %}
  {% set code = preview %}
  {% set showTip = true %}
  {% include "partials/code-preview.njk" %}
{% endblock %}


{% block usage %}
<div class="icon-examples">

### General
<div class="nys-grid-row nys-grid-gap-2">
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="account_circle" size="4xl"></nys-icon></div><div class="card__desc"> account_circle</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="calendar_month" size="4xl"></nys-icon></div><div class="card__desc"> calendar_month</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="cancel" size="4xl"></nys-icon></div><div class="card__desc"> cancel</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="check" size="4xl"></nys-icon></div><div class="card__desc"> check</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="close" size="4xl"></nys-icon></div><div class="card__desc"> close</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="download" size="4xl"></nys-icon></div><div class="card__desc"> download</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="download_done" size="4xl"></nys-icon></div><div class="card__desc"> download_done</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="drive_folder_upload" size="4xl"></nys-icon></div><div class="card__desc"> drive_folder_upload</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="edit_square" size="4xl"></nys-icon></div><div class="card__desc"> edit_square</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="help" size="4xl"></nys-icon></div><div class="card__desc"> help</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="language" size="4xl"></nys-icon></div><div class="card__desc"> language</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="menu" size="4xl"></nys-icon></div><div class="card__desc"> menu</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="more_vert" size="4xl"></nys-icon></div><div class="card__desc"> more_vert</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="open_in_new" size="4xl"></nys-icon></div><div class="card__desc"> open_in_new</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="publish" size="4xl"></nys-icon></div><div class="card__desc"> publish</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="search" size="4xl"></nys-icon></div><div class="card__desc"> search</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="share" size="4xl"></nys-icon></div><div class="card__desc"> share</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="sms" size="4xl"></nys-icon></div><div class="card__desc"> sms</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="thumb_down" size="4xl"></nys-icon></div><div class="card__desc"> thumb_down</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="thumb_up" size="4xl"></nys-icon></div><div class="card__desc"> thumb_up</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="upload_file" size="4xl"></nys-icon></div><div class="card__desc"> upload_file</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="visibility" size="4xl"></nys-icon></div><div class="card__desc"> visibility</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="visibility_off" size="4xl"></nys-icon></div><div class="card__desc"> visibility_off</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="notifications" size="4xl"></nys-icon></div><div class="card__desc"> notifications</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="add" size="4xl"></nys-icon></div><div class="card__desc"> add</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="remove" size="4xl"></nys-icon></div><div class="card__desc"> remove</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="content_copy" size="4xl"></nys-icon></div><div class="card__desc"> content_copy</div></div></div>
</div>

### Social
<div class="nys-grid-row nys-grid-gap-2">
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_facebook" size="4xl"></nys-icon></div><div class="card__desc"> social_facebook</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_flickr" size="4xl"></nys-icon></div><div class="card__desc"> social_flickr</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_google_play" size="4xl"></nys-icon></div><div class="card__desc"> social_google_play</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_instagram" size="4xl"></nys-icon></div><div class="card__desc"> social_instagram</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_linkedin" size="4xl"></nys-icon></div><div class="card__desc"> social_linkedin</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_pinterest" size="4xl"></nys-icon></div><div class="card__desc"> social_pinterest</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_rss" size="4xl"></nys-icon></div><div class="card__desc"> social_rss</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_snapchat" size="4xl"></nys-icon></div><div class="card__desc"> social_snapchat</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_soundcloud" size="4xl"></nys-icon></div><div class="card__desc"> social_soundcloud</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_tiktok" size="4xl"></nys-icon></div><div class="card__desc"> social_tiktok</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_tumblr" size="4xl"></nys-icon></div><div class="card__desc"> social_tumblr</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_vimeo" size="4xl"></nys-icon></div><div class="card__desc"> social_vimeo</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_x" size="4xl"></nys-icon></div><div class="card__desc"> social_x</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="social_youtube" size="4xl"></nys-icon></div><div class="card__desc"> social_youtube</div></div></div>
</div>

### Arrows
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="arrow_back" size="4xl"></nys-icon></div><div class="card__desc"> arrow_back</div></div></div>
</div>

### Chevrons
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_down" size="4xl"></nys-icon></div><div class="card__desc"> chevron_down</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_up" size="4xl"></nys-icon></div><div class="card__desc"> chevron_up</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_left" size="4xl"></nys-icon></div><div class="card__desc"> chevron_left</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="chevron_right" size="4xl"></nys-icon></div><div class="card__desc"> chevron_right</div></div></div>
</div>

### Environmental
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="ac_unit" size="4xl"></nys-icon></div><div class="card__desc"> ac_unit</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="air" size="4xl"></nys-icon></div><div class="card__desc"> air</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="clear_day" size="4xl"></nys-icon></div><div class="card__desc"> clear_day</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="coronavirus" size="4xl"></nys-icon></div><div class="card__desc"> coronavirus</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="rainy" size="4xl"></nys-icon></div><div class="card__desc"> rainy</div></div></div>
</div>

### Intent
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="check_circle" size="4xl"></nys-icon></div><div class="card__desc"> check_circle</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="emergency_home" size="4xl"></nys-icon></div><div class="card__desc"> emergency_home</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="error" size="4xl"></nys-icon></div><div class="card__desc"> error</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="info" size="4xl"></nys-icon></div><div class="card__desc"> info</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="warning" size="4xl"></nys-icon></div><div class="card__desc"> warning</div></div></div>
</div>

### Filled
<div class="nys-grid-row nys-grid-gap-2">
  <div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="account_balance_filled" size="4xl"></nys-icon></div><div class="card__desc"> account_balance_filled</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="cancel_filled" size="4xl"></nys-icon></div><div class="card__desc"> cancel_filled</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="language_filled" size="4xl"></nys-icon></div><div class="card__desc"> language_filled</div></div></div>
<div class="nys-grid-col-6 nys-tablet:nys-grid-col-3"><div class="card nys-flex-fill"><div class="card__title"><nys-icon name="lock_filled" size="4xl"></nys-icon></div><div class="card__desc"> lock_filled</div></div></div>
</div>
</div> 

<!-- .icon-example -->

### When to use this component
  - Draw attention to actions. Icons, when paired with text, grab attention and show actions to take. Make sure each icon directly relates to any text it accompanies.
  - Help readers find key information. Use icons as scannable, easy-to-understand visual cues for key information, like a phone number or email address.
  - To provide recognizable visual representations for **common actions or objects** (e.g., search, download, social media links).
  - Enhance an actionable target. Icons increase the size of a button, which makes those buttons easier to click. Use an icon for common actions, like opening a menu or sharing an article.
  - Ideal for enhancing navigation menus, buttons, or other interactive elements with visual cues.

### When to consider something else
  - Ambiguous meaning. Use icons only in a common or conventional way. Icon utility hinges on people quickly recognizing what each icon means. If you suspect that an icon’s intent isn’t perfectly clear, consider removing it.
  - Page structure. Don’t rely on an icon to help draw attention to something important that’s otherwise hard to find. Icons don’t fix unclear page hierarchy or confusing content organization.
  - If an icon does not add meaningful value to the context or might confuse users.
  - When a descriptive label or plain text provides clearer communication.
{% endblock %}

{% block usagedo %}

  - **Include a visual text label paired with the icon**; only a very few icons are consistently understood universally across the digital-using public of the world; among them a house for home, printer for printing, and magnifying glass for search. Combine icons with text to improve clarity.
  - **Be consistent with icon meaning.** When an icon appears multiple times within a page or across pages of an application, it should represent the same concept and have identical text descriptions in every instance. For example, if a blank paper icon means "new document" across most screens, don't use it to mean "reformat document" elsewhere. This consistency benefits users with cognitive disabilities, helps those who may be distracted or scanning the page, and improves the overall user experience.
  - Align icons vertically with accompanying typography.
  - Prefer icons that are included in the NYSDS icon library; use Google Material Symbol rounded unfilled icons if you must use an icon not in the library. If you have a need for an icon not in the library, please contact the NYSDS Design System team in MS Teams NYSDS Troubleshooting channel for advisement on which icon is best for your use case.
  - Test icons for recognition and memorability with representative users of your application or website.
  - Use icons to enhance user interfaces with clear, recognizable icons.
  - Use appropriate icons align with the purpose and context of the UI elements they accompany.
  - [Dev] Provide an accessible label using the label attribute to ensure screen readers can interpret the icon's purpose (if warranted).
  - Customize icon sizes and colors to match the design system.
{% endblock %}

{% block usagedont %}

  - Don't overuse icons; too many icons on a page can create visual noise and makes it difficult for the user to focus.
  - Replace meaningful text with an icon unless its meaning is universally recognized or accompanied by a text label.
  <!-- - Use icons that lack clarity or context for their intended purpose. -->
  - Use excessive customization that distracts from UI and established design patterns.

{% endblock %}

{% block accessibility %}

The <code class="language-js">&lt;nys-icon&gt;</code> component includes the following accessibility-focused features:

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
  - <code class="language-js">sm</code> (small): 100% of parent font size -- <strong>Default</strong>
  - <code class="language-js">md</code> (medium): 112.5% of parent font size
  - <code class="language-js">lg</code> (large): 125% of parent font size
  - <code class="language-js">xl</code> (extra large): 150% of parent font size
  - <code class="language-js">2xl</code> (double extra large): 187.5% of parent font size
  - <code class="language-js">3xl</code> (triple extra large): 225% of parent font size
  - <code class="language-js">4xl</code> (quadruple extra large): 300% of parent font size

  {% set preview %}<nys-icon name="upload_file" size="2xs"></nys-icon>
<nys-icon name="upload_file" size="lg"></nys-icon>
<nys-icon name="upload_file" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

#### Literal Sizing
For fixed, predefined sizes, you can use literal sizes. These sizes are defined in rem units, which provide fixed scaling options.

  - <code class="language-js">12</code>: 0.75rem = 12px
  - <code class="language-js">16</code>: 1rem = 16px
  - <code class="language-js">24</code>: 1.5rem = 24px
  - <code class="language-js">32</code>: 2rem = 32px
  - <code class="language-js">48</code>: 3rem = 48px
  - <code class="language-js">64</code>: 4rem = 64px

  {% set preview %}<nys-icon name="upload_file" size="16"></nys-icon>
<nys-icon name="upload_file" size="32"></nys-icon>
<nys-icon name="upload_file" size="64"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Color

You can override the color of an icon by setting a <code class="language-js">color</code> prop. You can use CSS HEX values, CSS color names, or CSS variables

  {% set preview %}<nys-icon label="upload_file icon" name="upload_file" color="#db117d" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Rotate
You can <code class="language-js">rotate</code> an icon by passing the angle as a number, like rotate="20" (without "deg").

  {% set preview %}<nys-icon rotate="20" label="upload_file icon" name="upload_file" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Flip
Set an icon to flip horizontally, vertically, or in both directions by using the <code class="language-js">flip</code> property. Available values are `horizontal`, `vertical`, and `both`. This example is `both`.

  {% set preview %}<nys-icon flip="both" label="upload_file icon" name="social_linkedin" size="4xl"></nys-icon>{% endset %}
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

{% block events %}

{% endblock %}

{% block updates %}{% endblock %}