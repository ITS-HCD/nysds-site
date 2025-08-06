---
title: Using Figma to Lay Out Designs with NYSDS Components
description: An alert displays a prominent message, with optional links, at the top of the screen.
image: /assets/img/components/alert.svg
image_alt: An illustration of an alert message.
image_header: /assets/img/components/alert-header.svg
tags: Demo 2, Design, Figma, Drupal
video_url: https://www.youtube-nocookie.com/embed/_M8bDuT3R1w?si=--whS5b3I_HB4bqm
navOrder: 2
draft: true
---

Working with NYSDS in Figma means fewer decisions, more consistency, and smoother handoffs. The libraries give you the same visual elements found in our web components.

## 1. Set Up the NYSDS Figma Libraries

- Open the Figma “Component Library” and “Foundations” libraries from the team.
- Enable them under **Assets > Library** so you can drag components into your designs.

## 2. Use Layout Grids + Spacing Tokens

Stick to the system:

- Use `8px` spacing increments (`--nys-space-100`, `--nys-space-200`, etc.)
- Layouts should follow the `--nys-gutter-md` or `--nys-gutter-lg` pattern (32px).
- Use Figma’s **Auto Layout** to snap elements in place with consistent padding and gaps.

## 3. Components: What’s Included

All 16 NYSDS components are available as variants:

- Buttons (primary, secondary, disabled)
- Form elements (input, select, checkbox, etc.)
- Headers and footers (global, unav)
- Utility elements like `<nys-alert>` and `<nys-avatar>`

Use these **exactly as-is**—don’t detach or override unless prototyping.

## 4. Stick to Semantic Text Styles

Use NYSDS typography tokens:

- Headings (`--nys-font-size-h1` to `h6`)
- Body (`body-md`, `body-sm`)
- UI labels (`ui-md`, `ui-sm`)

Each is mapped to a style in the Foundations library. This keeps your mockups readable and ready for dev handoff.

## 5. Accessibility in Figma

Use color styles from the token palette (like `nys-color-theme`) to meet contrast targets. If you’re unsure, use Figma plugins like **Able** or **Stark** to check WCAG contrast.

## Conclusion

Using NYSDS in Figma speeds up your design flow. You get consistency and easier dev collaboration, while future-proofing for system changes.
