---
title: Avatar
layout: layouts/component.njk
permalink: /components/avatar/
description: Avatars visually represent a user or entity as initials, a photo, or an icon.
long_description: >-
  The `<nys-avatar>` component is used to visually represent a user or entity.


  By default, a generic icon is displayed. Personalize avatars with custom props like `icon`, `initials`, or `image`, and always include a `label` for accessibility.
navOrder: 3
mainexample: <nys-avatar label="User avatar"></nys-avatar>
usage: >
  ### When to use this component


  - To visually represent users, objects, or entities in a UI.

  - Ideal for profiles, account settings, or comment threads.


  ### When to consider something else


  - If you need to show a large visual representation of a user or entity, use a photo.

  - When a simple label or text works better.
do: >
  - Use for clear, simple user or entity representation.

  - On Tablet and above, prefer showing the full name of the user or entity.

  - Place the full name of the user or entity to the right of the avatar.

  - Ensure the text of initial avatars meets WCAG 2.1 contrast ratio against the avatar's background.

  - Use `nys-icon` as a slot when you need further customizations that the `icon` prop can't provide.
dont: >
  - Don't overload the avatar with unnecessary customizations.

  - Don't override the default user or entity avatar icons unless needed to communicate additional context to the viewer; doing so provides an inconsistent user experience across NYS applications and websites.

  - [Dev] Don't skip the `label` attribute for screen reader users.

  - [Dev] Don't use the `nys-icon` as a slot when icon prop can satisfy your use.
accessibility: >
  The `<nys-avatar>` component includes the following accessibility-focused
  features:


  - For initial avatars, include the person's full name as descriptive alt text if the person's full name is not shown next to the avatar: `alt="John Smith"`

  - For photo avatars, describe the avatar, and include the person's full name if it is not shown next to the avatar: `alt="Photo of John Smith"`

  - Proper ARIA roles and attributes to ensure screen readers can interpret the avatar correctly.

  - A label property to provide accessible text for screen readers.
properties: |-
  | Property   | Type                                     |
  |------------|------------------------------------------|
  | `id`       | String                                   |
  | `color`    | String (CSS HEX, CSS color name, or CSS) |
  | `icon`     | String (`<nys-icon name>`)               |
  | `image`    | URL                                      |
  | `initials` | String (2 letters)                       |
  | `label`    | String                                   |
  | `lazy`     | boolean                                  |
  | `shape`    | `"square"` \| `"rounded"` \| `"circle"`  |
cssvars: none
eventsdescription: none
eventscode: ""
component_options:
  - type: option
    description: >-
      ### Images

      To display an image in the avatar, set the `image` and `label` attributes. Images will take **priority** and **override** initials and icons. You can also enable lazy loading for avatar images by setting the `lazy` boolean attribute.
    examplecode: <nys-avatar label="User avatar"
      image="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=100"
      lazy>
  - type: option
    description: >-
      ### Initials


      If an image is unavailable, you can set the `initials` attribute to display a personalized placeholder instead of an icon. Initials will take **priority** and **override** icons.
    examplecode: <nys-avatar label="User avatar" initials="NY"></nys-avatar>
  - type: option
    description: >-
      ### Custom Icons


      When no image or initials are set, an icon will be shown. The default avatar shows an icon called "account_circle", but you can customize this with any other name found in `<nys-icon>` using the `icon` prop or customize directly within `<nys-avatar>` with the icon slot.
    examplecode: >-
      <nys-avatar label="User avatar"></nys-avatar>

      <nys-avatar label="Youtube avatar" color="#f2efee">
        <nys-icon label="youtube icon" name="social_youtube" color="#b2071d" size="lg"></nys-icon>
      </nys-avatar>

      <nys-avatar label="Snow avatar" icon="ac_unit"></nys-avatar>
  - type: option
    description: >-
      ### Shapes


      To change the shape of the avatar, set the `shape` attribute. The default shape is **"circle"**, but you can also set it to **"square"** or **"rounded"**.
    examplecode: |-
      <nys-avatar label="User avatar" shape="circle"></nys-avatar>
      <nys-avatar label="User avatar" shape="rounded"></nys-avatar>
      <nys-avatar label="User avatar" shape="square"></nys-avatar></nys-avatar>
  - type: option
    description: >
      ### Background Color


      You can change the background color of an Avatar. This attribute accepts any valid color value, including [design tokens](/foundations/tokens/), such as `color="var(--nys-color-theme)"`.


      **Note:** images will naturally cover over the background color.
    examplecode: <nys-avatar label="User avatar" color="rebeccapurple"></nys-avatar>
imagery:
  - type: smallcard
    smallcardimage: /assets/img/components/avatar.svg
    smallcardimagealt: Three circles with lined imagery
  - type: pageheader
    pageheaderimage: /assets/img/components/avatar-header.svg
    pageheaderimagealt: Avatar Header Image. Geometric shapes
image: /assets/img/components/avatar.svg
---
