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

The `<nys-avatar>` component is used to visually represent a user or entity.

By default, a generic icon is displayed. Personalize avatars with custom props like `icon`, `initials`, or `image`, and always include a `ariaLabel` for accessibility.
{% endblock %}

{% block example %}
  {% set preview %}<nys-avatar ariaLabel="User avatar"></nys-avatar>{% endset %}
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
  - On tablets and larger breakpoints, prefer showing the full name next to the avatar.
  - Place the full name of the user or entity to the right of the avatar.
  - Ensure the text of initial avatars meets WCAG 2.1 contrast ratio against the avatar's background.
  - Use the `nys-icon` slot only when the icon prop isn't sufficient.
{% endblock %}

{% block usagedont %}

  - Don't skip the `ariaLabel` attribute for screen reader users.
  - Don't use the `nys-icon` as a slot when icon prop can satisfy your use.
  - Don't overload the avatar with unnecessary customizations.
  - Don’t override default avatar icons unless additional context is essential, doing so creates inconsistency across NYS interfaces.
{% endblock %}

{% block accessibility %}

The `<nys-avatar>` component includes the following accessibility-focused features:

  - For initial avatars, include the person's full name as descriptive alt text if the person's full name is not shown next to the avatar: `alt="John Smith"`
  - For photo avatars, describe the avatar, and include the person's full name if it is not shown next to the avatar: `alt="Photo of John Smith"`
  - Proper ARIA roles and attributes to ensure screen readers can interpret the avatar correctly.
  - A `ariaLabel` property to provide accessible text for screen readers.
{% endblock %}

{% block options %}

### Images
To display an image in the avatar, set the `image` and `ariaLabel` attributes. Images will take **priority** and **override** initials and icons. You can also enable lazy loading for avatar images by setting the `lazy` boolean attribute.

{% set preview %}<nys-avatar ariaLabel="User avatar" image="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=100" lazy>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Initials

If an image is unavailable, you can set the `initials` attribute to display a personalized placeholder instead of an icon. Initials will take **priority** and **override** icons.

{% set preview %}<nys-avatar ariaLabel="User avatar" initials="NY"></nys-avatar>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows an icon called "account_circle", but you can customize this with any other name found in `<nys-icon>` using the `icon` prop or customize directly within `<nys-avatar>` with the icon slot.

{% set preview %}
<nys-avatar ariaLabel="User avatar"></nys-avatar>
<nys-avatar ariaLabel="Youtube avatar" color="#f2efee">
  <nys-icon ariaLabel="youtube icon" name="social_youtube" color="#b2071d" size="lg"></nys-icon>
</nys-avatar>
<nys-avatar ariaLabel="Snow avatar" icon="ac_unit"></nys-avatar>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Shapes

To change the shape of the avatar, set the `shape` attribute. The default shape is **"circle"**, but you can also set it to **"square"** or **"rounded"**.

{% set preview %}
<nys-avatar ariaLabel="User avatar" shape="circle"></nys-avatar>
<nys-avatar ariaLabel="User avatar" shape="rounded"></nys-avatar>
<nys-avatar ariaLabel="User avatar" shape="square"></nys-avatar></nys-avatar>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Background Color

You can change the background color of an Avatar. This attribute accepts any valid color value, including [design tokens](https://designsystem.ny.gov/foundations/tokens/), such as `color="var(--nys-color-theme)"`.

**Note:** images will naturally cover over the background color.

{% set preview %}
<nys-avatar ariaLabel="User avatar" color="purple"></nys-avatar>{% endset %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

| Property   | Type                                     |
|------------|------------------------------------------|
| `id`       | String                                   |
| `color`    | String (CSS HEX, CSS color name, or CSS) |
| `icon`     | String (`<nys-icon name>`)               |
| `image`    | URL                                      |
| `initials` | String (2 letters)                       |
| `ariaLabel`| String                                   |
| `lazy`     | boolean                                  |
| `shape`    | `"square"` \| `"rounded"` \| `"circle"`  |


{% endblock %}
[[TODO]]
| Variable             | Description                 |
|----------------------|-----------------------------|
| `--nys-toggle-width` | Width of the toggle switch. |

{% block cssvariables %}


{% endblock %}

{% block events %}

{% endblock %}

{% block updates %}{% endblock %}
