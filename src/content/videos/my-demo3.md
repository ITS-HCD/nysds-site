---
title: How NYSDS Supports Accessibility (And How You Can Too)
description: An alert displays a prominent message, with optional links, at the top of the screen.
image: /assets/img/components/alert.svg
image_alt: An illustration of an alert message.
image_header: /assets/img/components/alert-header.svg
tags: Demo, Web Components, Drupal
video_url: https://www.youtube-nocookie.com/embed/M0H7kt_n1gM?si=SH9jdbqWF8cfwT5P
navOrder: 2
draft: true
---

Accessibility isn’t just a checklist—it’s part of our foundation. NYSDS builds accessible components by default, so you don’t have to guess.

## 1. Semantic HTML First

Every component in the system is built with semantic elements under the hood:

- `<button>` for actions
- `<input>` and `<label>` for forms
- Proper heading levels in headers and footers

This helps screen readers interpret content structure.

## 2. Focus Styles and Keyboard Navigation

We ship built-in focus rings using `--nys-color-focus` for consistency. Try this:

``css
:focus {
  outline: 2px solid var(--nys-color-focus);
  outline-offset: 2px;
}
``

And yes—every component is tab-navigable.

## 3. ARIA Where It Matters

We use ARIA roles sparingly, only when semantic HTML doesn’t cover it. For example:

- `<nys-alert>` includes `role="alert"` to announce dynamic content
- Form controls use `aria-describedby` for error/help messages

## 4. Color Contrast from Tokens

All color tokens meet or exceed WCAG AA contrast standards:

- Text colors (e.g. `--nys-color-ink`) work on light and dark backgrounds
- Intent colors (success, warning, danger) are tuned for visibility

Tested combinations:

- `--nys-color-theme` on white: ✅ Passes 4.5:1
- `--nys-color-info` on light blue: ✅ Passes 3:1 for large text

## 5. Accessible Figma Styles

The Foundations library includes accessible color pairings and typography styles that meet contrast ratios. This keeps visual design in line with the system’s coded reality.

## Conclusion

Accessibility isn’t optional. It’s built into NYSDS, so you can focus on content and experience—not compliance. Use the system, check the docs, and keep testing with real users.
