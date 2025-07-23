---
permalink: /components/icon/
title: Icon
description: Visual symbols used to concisely convey information and increase visual appearance.
image: /assets/img/components/icon.svg
image_alt: An illustration of an icon.
image_header: /assets/img/components/icon-header.svg
navOrder: 10
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-icon>` is a visual symbol used to concisely convey meaning or action and can add to visual appearance. Icons are meant to enhance, not replace textual information. NYSDS includes a curated subset of the Google Material Symbols rounded icon set.
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
  {% set name = "account_circle" %}{% include "partials/icon-preview.njk" %}
  {% set name = "calendar_month" %}{% include "partials/icon-preview.njk" %}
  {% set name = "cancel" %}{% include "partials/icon-preview.njk" %}
  {% set name = "check" %}{% include "partials/icon-preview.njk" %}
  {% set name = "close" %}{% include "partials/icon-preview.njk" %}
  {% set name = "download" %}{% include "partials/icon-preview.njk" %}
  {% set name = "download_done" %}{% include "partials/icon-preview.njk" %}
  {% set name = "drive_folder_upload" %}{% include "partials/icon-preview.njk" %}
  {% set name = "edit_square" %}{% include "partials/icon-preview.njk" %}
  {% set name = "help" %}{% include "partials/icon-preview.njk" %}
  {% set name = "language" %}{% include "partials/icon-preview.njk" %}
  {% set name = "menu" %}{% include "partials/icon-preview.njk" %}
  {% set name = "more_vert" %}{% include "partials/icon-preview.njk" %}
  {% set name = "open_in_new" %}{% include "partials/icon-preview.njk" %}
  {% set name = "publish" %}{% include "partials/icon-preview.njk" %}
  {% set name = "search" %}{% include "partials/icon-preview.njk" %}
  {% set name = "share" %}{% include "partials/icon-preview.njk" %}
  {% set name = "sms" %}{% include "partials/icon-preview.njk" %}
  {% set name = "thumb_down" %}{% include "partials/icon-preview.njk" %}
  {% set name = "thumb_up" %}{% include "partials/icon-preview.njk" %}
  {% set name = "upload_file" %}{% include "partials/icon-preview.njk" %}
  {% set name = "visibility" %}{% include "partials/icon-preview.njk" %}
  {% set name = "visibility_off" %}{% include "partials/icon-preview.njk" %}
  {% set name = "notifications" %}{% include "partials/icon-preview.njk" %}
  {% set name = "add" %}{% include "partials/icon-preview.njk" %}
  {% set name = "remove" %}{% include "partials/icon-preview.njk" %}
  {% set name = "content_copy" %}{% include "partials/icon-preview.njk" %}
</div>

### Social
<div class="nys-grid-row nys-grid-gap-2">
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
  {% set name = "social_tumblr" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_vimeo" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_x" %}{% include "partials/icon-preview.njk" %}
  {% set name = "social_youtube" %}{% include "partials/icon-preview.njk" %}
</div>

### Arrows
<div class="nys-grid-row nys-grid-gap-2">
  {% set name = "arrow_back" %}{% include "partials/icon-preview.njk" %}
</div>

### Chevrons
<div class="nys-grid-row nys-grid-gap-2">
  {% set name = "chevron_down" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_up" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_left" %}{% include "partials/icon-preview.njk" %}
  {% set name = "chevron_right" %}{% include "partials/icon-preview.njk" %}
</div>

### Environmental
<div class="nys-grid-row nys-grid-gap-2">
  {% set name = "ac_unit" %}{% include "partials/icon-preview.njk" %}
  {% set name = "air" %}{% include "partials/icon-preview.njk" %}
  {% set name = "clear_day" %}{% include "partials/icon-preview.njk" %}
  {% set name = "coronavirus" %}{% include "partials/icon-preview.njk" %}
  {% set name = "rainy" %}{% include "partials/icon-preview.njk" %}
</div>

### Intent
<div class="nys-grid-row nys-grid-gap-2">
  {% set name = "check_circle" %}{% include "partials/icon-preview.njk" %}
  {% set name = "emergency_home" %}{% include "partials/icon-preview.njk" %}
  {% set name = "error" %}{% include "partials/icon-preview.njk" %}
  {% set name = "info" %}{% include "partials/icon-preview.njk" %}
  {% set name = "warning" %}{% include "partials/icon-preview.njk" %}
</div>

### Filled
<div class="nys-grid-row nys-grid-gap-2">
  {% set name = "account_balance_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "cancel_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "language_filled" %}{% include "partials/icon-preview.njk" %}
  {% set name = "lock_filled" %}{% include "partials/icon-preview.njk" %}
</div>

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

  - **Include a visual text label paired with the icon**; only a very few icons are consistently understood universally across the digital-using public of the world. Combine icons with text to improve clarity.
  - **Be consistent with icon meaning.** use the same icon and label for the same meaning throughout your app.
  - Use `ariaLabel` when the icon is focusable and conveys meaning, so screen readers can announce its purpose.
  - Align icons with text visually and semantically.
  - Use icons from the NYSDS library; if not available, use Google Material Symbols (rounded, unfilled).
  - Match icon size and color to the design system.
  - Test for clarity with real users when possible.

{% endblock %}

{% block usagedont %}

  - Don't overuse icons; too many icons on a page can create visual noise and makes it difficult for the user to focus.
  - Replace meaningful text with an icon unless its meaning is universally recognized or accompanied by a text label.
  <!-- - Use icons that lack clarity or context for their intended purpose. -->
  - Use excessive customization that distracts from UI and established design patterns.

{% endblock %}

{% block accessibility %}

The `<nys-icon>` component includes the following accessibility-focused features:

**ARIA Hidden by Default**: If no `ariaLabel` is provided, the icon is hidden from screen readers by setting aria-hidden="true".

**Customizable ARIA Label**: If a `ariaLabel` is provided, the component automatically adds an aria-label attribute, making the icon accessible to screen readers.
{% endblock %}

{% block options %}

### Size
You can scale icons either relatively (based on the parent element’s font size) or literally (with predefined size values). The icons support two sizing systems: relative sizes and literal sizes.

#### Relative Sizing
To scale an icon relative to the inherited font size, pass a size variant like size=[variant name] as a prop. The values will scale based on the current font size of the parent element.

  - `2xs` (extra-extra small): 75% of parent font size 
  - `xs` (extra small): 87.5% of parent font size 
  - `sm` (small): 100% of parent font size -- **Default** 
  - `md` (medium): 112.5% of parent font size 
  - `lg` (large): 125% of parent font size 
  - `xl` (extra large): 150% of parent font size 
  - `2xl` (double extra large): 187.5% of parent font size 
  - `3xl` (triple extra large): 225% of parent font size 
  - `4xl` (quadruple extra large): 300% of parent font size

  {% set preview %}<nys-icon name="upload_file" size="2xs"></nys-icon>
<nys-icon name="upload_file" size="lg"></nys-icon>
<nys-icon name="upload_file" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

#### Literal Sizing
For fixed, predefined sizes, you can use literal sizes. These sizes are defined in rem units, which provide fixed scaling options.

  - `12`: 0.75rem = 12px
  - `16`: 1rem = 16px
  - `24`: 1.5rem = 24px
  - `32`: 2rem = 32px
  - `48`: 3rem = 48px
  - `64`: 4rem = 64px

  {% set preview %}<nys-icon name="upload_file" size="16"></nys-icon>
<nys-icon name="upload_file" size="32"></nys-icon>
<nys-icon name="upload_file" size="64"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Color

You can override the color of an icon by setting a `color` prop. You can use CSS HEX values, CSS color names, or CSS variables

  {% set preview %}<nys-icon label="upload_file icon" name="upload_file" color="#db117d" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Rotate
You can `rotate` an icon by passing the angle as a number i.e: `rotate="20"` will rotate the icon by 20 degrees clockwise.

  {% set preview %}<nys-icon rotate="20" label="upload_file icon" name="upload_file" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

### Flip
Set an icon to flip horizontally, vertically, or in both directions by using the `flip` property. Available values are `horizontal`, `vertical`, and `both`. This example is `both`.

  {% set preview %}<nys-icon flip="both" label="upload_file icon" name="social_linkedin" size="4xl"></nys-icon>{% endset %}
  {% set code = preview %}
  {% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property          | Type                                                                                                                                                   |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ariaLabel`           | String                                                                                                                                                 |
| `color`           | String (CSS HEX, CSS color name, or CSS variable)                                                                                                      |
| `flip`            | `"horizontal"` \| `"vertical"` \| `"both"`                                                                                                             |
| `name`            | String                                                                                                                                                 |
| `rotate`          | integer                                                                                                                                                |
| `size`            | `"2xs"` \| `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` \| `"3xl"` \| `"4xl"` \| `"12"` \| `"16"` \| `"24"` \| `"32"` \| `"48"` \| `"64"` |


{% endblock %}

{% block cssvariables %}


{% endblock %}
[[TODO]]
The `<nys->` component emits **three** custom Javascript events:
1.  **`change`** – Fired when the toggle state changes (checked/unchecked).
2.  **`focus`** – Fired when the toggle gains focus.
3.  **`blur`** – Fired when the toggle loses focus.
4.  **`keydown`** – Fired when a key is pressed while the toggle is focused.

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