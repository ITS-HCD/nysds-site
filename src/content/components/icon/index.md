---
permalink: /components/icon/
title: Icon
description: Visual symbols are used to concisely convey information and increase visual appearance.
image: /assets/img/components/icon.svg
image_alt: An illustration of an icon.
image_header: /assets/img/components/icon-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu/%F0%9F%92%A0-NYS-Design-System?node-id=4019-63198&t=Fz3PChrCAbfpr60Y-4
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-icon>` is a visual symbol used to concisely convey meaning, action, status, or feedback and can add to visual appearance. Icons are meant to enhance, not replace, textual information. NYS Design System includes a curated subset of the Google Material Symbols rounded icon set.

{% endblock %}

{% block example %}
{% set preview %}<nys-icon name="check_circle" size="5xl" color="var(--nys-color-success)"></nys-icon>{% endset %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usagedo %}

- Use icons to draw attention to actions, help users scan for key information, or enhance recognizable common actions (e.g., search, download, share).
- Pair icons with a text label—few icons are universally understood alone.
- Use icons consistently: same icon and label for the same meaning throughout your app.
- Use `ariaLabel` when the icon conveys meaning, so screen readers can announce its purpose.
- Use icons from the NYS Design System library; if unavailable, use Google Material Symbols (rounded, unfilled).
- Match icon size and color to the design system.

{% endblock %}

{% block usagedont %}

- Use an icon if its meaning isn't immediately clear—if you suspect users won't recognize it, remove it.
- Use icons to compensate for unclear page hierarchy or confusing content organization.
- Use standalone icons for actions—use `<nys-button>` with an icon inside instead.
- Replace meaningful text with icons unless the icon is universally recognized or paired with a label.
- Overuse icons—too many create visual noise and reduce focus.
- Use excessive icon customization that breaks design consistency.

{% endblock %}

{% block accessibility %}

The `<nys-icon>` component includes the following accessibility-focused features:

**ARIA Hidden by Default**: If no `ariaLabel` is provided, the icon is hidden from screen readers by setting aria-hidden="true".

**Customizable ARIA Label**: If an `ariaLabel` is provided, the component automatically adds an aria-label attribute, making the icon accessible to screen readers.
{% endblock %}

{% block options %}

### Size

You can scale icons either relatively (based on the parent element’s font size) or literally (with predefined size values). The icons support two sizing systems: relative sizes and literal sizes.

#### Relative Sizing

To scale an icon relative to the inherited font size, pass a size variant like `size=[variant name]` as a prop. The values will scale based on the current font size of the parent element.

- `xs` (extra small): 75% of parent font size
- `sm` (small): 87.5% of parent font size
- `md` (medium): 100% of parent font size -- **Default**
- `lg` (large): 112.5% of parent font size
- `xl` (extra large): 125% of parent font size
- `2xl` (double extra large): 150% of parent font size
- `3xl` (triple extra large): 187.5% of parent font size
- `4xl` (quadruple extra large): 225% of parent font size
- `5xl` (quintuple extra large): 300% of parent font size

{% set preview %}<nys-icon name="upload_file" size="xs"></nys-icon>
<nys-icon name="upload_file" size="xl"></nys-icon>
<nys-icon name="upload_file" size="5xl"></nys-icon>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

#### Literal Sizing

For fixed, predefined sizes, you can use literal sizes. These sizes are defined in rem units, which provide fixed scaling options.

- `12`: 0.75rem = 12px
- `14`: 0.875rem = 14px
- `16`: 1rem = 16px
- `18`: 1.125rem = 18px
- `20`: 1.25rem = 20px
- `24`: 1.5rem = 24px
- `32`: 2rem = 32px
- `40`: 2.5rem = 40px
- `50`: 3.125rem = 50px

{% set preview %}<nys-icon name="upload_file" size="16"></nys-icon>
<nys-icon name="upload_file" size="32"></nys-icon>
<nys-icon name="upload_file" size="50"></nys-icon>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Color

You can override the color of an icon by setting a `color` prop. You can use CSS HEX values, CSS color names, or CSS variables

{% set preview %}<nys-icon ariaLabel="Upload file icon" name="upload_file" color="#db117d" size="5xl"></nys-icon>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Rotate

You can `rotate` an icon by passing the angle as a number i.e: `rotate="20"` will rotate the icon by 20 degrees clockwise.

{% set preview %}<nys-icon rotate="20" ariaLabel="Upload file icon" name="upload_file" size="5xl"></nys-icon>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Flip

Set an icon to flip horizontally, vertically, or in both directions by using the `flip` property. Available values are `horizontal`, `vertical`, and `both`. This example is `both`.

{% set preview %}<nys-icon flip="both" ariaLabel="Upload file icon" name="social_linkedin" size="5xl"></nys-icon>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}
<div class="icon-examples">

### Core

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "account_circle" %}{% include "partials/icon-preview.njk" %}
  {% set name = "add" %}{% include "partials/icon-preview.njk" %}
  {% set name = "attach_file" %}{% include "partials/icon-preview.njk" %}
  {% set name = "calendar_month" %}{% include "partials/icon-preview.njk" %}
  {% set name = "cancel" %}{% include "partials/icon-preview.njk" %}
  {% set name = "code" %}{% include "partials/icon-preview.njk" %}
  {% set name = "content_copy" %}{% include "partials/icon-preview.njk" %}
  {% set name = "check" %}{% include "partials/icon-preview.njk" %}
  {% set name = "close" %}{% include "partials/icon-preview.njk" %}
  {% set name = "delete" %}{% include "partials/icon-preview.njk" %}
  {% set name = "download" %}{% include "partials/icon-preview.njk" %}
  {% set name = "download_done" %}{% include "partials/icon-preview.njk" %}
  {% set name = "drive_folder_upload" %}{% include "partials/icon-preview.njk" %}
  {% set name = "edit_square" %}{% include "partials/icon-preview.njk" %}
  {% set name = "expand_all" %}{% include "partials/icon-preview.njk" %}
  {% set name = "filter_list" %}{% include "partials/icon-preview.njk" %}
  {% set name = "filter_alt" %}{% include "partials/icon-preview.njk" %}
  {% set name = "help" %}{% include "partials/icon-preview.njk" %}
  {% set name = "language" %}{% include "partials/icon-preview.njk" %}
  {% set name = "link" %}{% include "partials/icon-preview.njk" %}
  {% set name = "mail" %}{% include "partials/icon-preview.njk" %}
  {% set name = "menu" %}{% include "partials/icon-preview.njk" %}
  {% set name = "more_vert" %}{% include "partials/icon-preview.njk" %}
  {% set name = "open_in_new" %}{% include "partials/icon-preview.njk" %}
  {% set name = "print" %}{% include "partials/icon-preview.njk" %}
  {% set name = "phone_in_talk" %}{% include "partials/icon-preview.njk" %}
  {% set name = "progress_activity" %}{% include "partials/icon-preview.njk" %}
  {% set name = "publish" %}{% include "partials/icon-preview.njk" %}
  {% set name = "remove" %}{% include "partials/icon-preview.njk" %}
  {% set name = "search" %}{% include "partials/icon-preview.njk" %} 
  {% set name = "share" %}{% include "partials/icon-preview.njk" %}
  {% set name = "sort" %}{% include "partials/icon-preview.njk" %}
  {% set name = "sms" %}{% include "partials/icon-preview.njk" %}
  {% set name = "thumb_down" %}{% include "partials/icon-preview.njk" %}
  {% set name = "thumb_up" %}{% include "partials/icon-preview.njk" %}
  {% set name = "upload_file" %}{% include "partials/icon-preview.njk" %}
  {% set name = "visibility" %}{% include "partials/icon-preview.njk" %}
  {% set name = "visibility_off" %}{% include "partials/icon-preview.njk" %}
  {% set name = "notifications" %}{% include "partials/icon-preview.njk" %}
</div>

### Social

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "social_bluesky" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_facebook" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_flickr" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_google_play" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_instagram" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_linkedin" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_pinterest" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_rss" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_snapchat" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_soundcloud" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_tiktok" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_threads" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_tumblr" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_vimeo" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_x" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_youtube" %}{% include "partials/icon-preview.njk" %}
</div>

### Arrows

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "arrow_back" %}{% include "partials/icon-preview.njk" %}
  {% set name = "arrow_downward" %}{% include "partials/icon-preview.njk" %}
  {% set name = "arrow_forward" %}{% include "partials/icon-preview.njk" %}
  {% set name = "arrow_upward" %}{% include "partials/icon-preview.njk" %}
</div>

### Chevrons

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "chevron_down" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_up" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_left" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_right" %}{% include "partials/icon-preview.njk" %}
</div>

### Environmental

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "ac_unit" %}{% include "partials/icon-preview.njk" %}
  {% set name = "air" %}{% include "partials/icon-preview.njk" %}
  {% set name = "clear_day" %}{% include "partials/icon-preview.njk" %}
  {% set name = "coronavirus" %}{% include "partials/icon-preview.njk" %}
  {% set name = "rainy" %}{% include "partials/icon-preview.njk" %}
</div>

### Intent

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "check_circle" %}{% include "partials/icon-preview.njk" %}
  {% set name = "emergency_home" %}{% include "partials/icon-preview.njk" %}
  {% set name = "error" %}{% include "partials/icon-preview.njk" %}
  {% set name = "info" %}{% include "partials/icon-preview.njk" %}
  {% set name = "warning" %}{% include "partials/icon-preview.njk" %}
</div>

### Filled

<div class="nys-grid-row nys-grid-gap-200">
  {% set name = "account_balance_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "cancel_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "language_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "lock_filled" %}{% include "partials/icon-preview.njk" %}
</div>
</div><!-- icon_examples closing DIV -->

## Load an external library

When using the `<nys-icon>`, you can choose to load in icons from any other library. You can serve the icons locally or via a Content Delivery Network (CDN). Below, you will find two examples which retreive icons from Font Awesome and Material.

<section>

### Font Awesome icon demo
{% set preview = "" %}
{% set code %}
<script src="nysds.js"></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  // ── Font Awesome (loaded from CDN) ────────
  NYSDS.registerIconLibrary("font-awesome", {
    resolver: (name) =>
      `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/solid/${name}.svg`,
    mutator: (svg) => {
      svg.setAttribute("fill", "currentColor");
    },
  });
});
</script>
{% endset %}
{% set language = "javascript" %}
{% set showTip = false %}
{% set accordionLabel = "Load Font Awesome icons" %}
{% include "partials/code-preview.njk" %}

<div class="icon-examples">
{% set library="font-awesome" %}
<div class="nys-grid-row nys-grid-gap-200">
    {% set name="house" %}{% include "partials/icon-preview.njk" %}
    {% set name="user" %}{% include "partials/icon-preview.njk" %}
    {% set name="star" %}{% include "partials/icon-preview.njk" %}
    {% set name="heart" %}{% include "partials/icon-preview.njk" %}
    {% set name="bell" %}{% include "partials/icon-preview.njk" %}
    {% set name="magnifying-glass" %}{% include "partials/icon-preview.njk" %}
    {% set name="circle-check" %}{% include "partials/icon-preview.njk" %}
    {% set name="triangle-exclamation" %}{% include "partials/icon-preview.njk" %}
</div>
</div>
  </section>

<section>

### Material icon demo
{% set code %}
<script src="nysds.js"></script>
<script>
  // ── Material (loaded from local file system) ────────
  NYSDS.registerIconLibrary("material", {
    resolver: (name) =>
      `./my_local_filesystem/icons/${name}.svg`,
    mutator: (svg) => {
      svg.setAttribute("fill", "currentColor");
    },
  });
</script>
{% endset %}
{% set showTip = false %}
{% set accordionLabel = "Load Material icons" %}
{% include "partials/code-preview.njk" %}
<div class="icon-examples">
{% set library="material" %}
<div class="nys-grid-row nys-grid-gap-200">
    {% set name="home" %} {% include "partials/icon-preview.njk" %}
    {% set name="person" %}{% include "partials/icon-preview.njk" %}
    {% set name="star" %}{% include "partials/icon-preview.njk" %}
    {% set name="favorite" %}{% include "partials/icon-preview.njk" %}
    {% set name="notifications" %}{% include "partials/icon-preview.njk" %}
    {% set name="search" %}{% include "partials/icon-preview.njk" %}
    {% set name="check_circle" %}{% include "partials/icon-preview.njk" %}
    {% set name="warning" %}{% include "partials/icon-preview.njk" %}
</div>
</div>
</section>


<script>
  document.addEventListener("DOMContentLoaded", () => {

  // ── Font Awesome (solid) ─────────────────────────────────────────────────
    NYSDS.registerIconLibrary("font-awesome", {
      resolver: (name) =>
        `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/solid/${name}.svg`,
      mutator: (svg) => {
        svg.setAttribute("fill", "currentColor");
      },
    });

    // ── Material (outlined) ─────────────────────────────────────────────────
    NYSDS.registerIconLibrary("material", {
      resolver: (name) =>
        `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${name}/default/24px.svg`,
      mutator: (svg) => {
        svg.setAttribute("fill", "currentColor");
      },
    });
  });
</script>
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
      <td><code>ariaLabel</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>String (CSS HEX, CSS color name, or CSS variable)</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>flip</code></td>
      <td><code>"horizontal"</code>, <code>"vertical"</code>, <code>"both"</code></td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>library</code></td>
      <td>String</td>
      <td><code>"default"</code></td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>rotate</code></td>
      <td>integer</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>"xs"</code>, <code>"sm"</code>, <code>"md"</code>, <code>"lg"</code>, <code>"xl"</code>, <code>"2xl"</code>, <code>"3xl"</code>, <code>"4xl"</code>, <code>"5xl"</code>, <code>"12"</code>, <code>"14"</code>, <code>"16"</code>, <code>"18"</code>, <code>"20"</code>, <code>"24"</code>, <code>"32"</code>, <code>"40"</code>, <code>"50"</code></td>
      <td><code>"md"</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}

{% set variables = [
  { name: "--nys-icon-size", description: "Width and height of the component"}
]%}
{% include "partials/css-vars.njk" %}
{% endblock %}

{% block events %}

This component does not emit any custom events.

{% endblock %}

{% block updates %}{% endblock %}

{% block scripts %}



{% endblock %}
