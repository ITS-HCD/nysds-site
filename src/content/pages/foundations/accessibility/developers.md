---
permalink: /foundations/accessibility/developers/
title: Accessibility for Developers
navTitle: Developers
description: Tools, guides, and resources for building accessible websites and applications for New York State.
parent: Accessibility
layout: layouts/3-col.njk
navOrder: 1
---

{% block content %}

# Accessibility for Developers

Building accessible web applications means writing markup, styles, and interactions that work for everyone — including people using screen readers, keyboard navigation, voice control, and other assistive technologies.

The NYSDS components handle many accessibility patterns for you: ARIA attributes, keyboard interactions, focus management, and screen reader announcements. But components alone do not make an accessible page. You are responsible for the structure and content that surrounds them.

## What You Are Responsible For

Even when using NYSDS components, your pages need:

- **Logical heading hierarchy** — One `h1` per page, followed by `h2`, `h3`, etc. in order. Do not skip levels.
- **Landmark regions** — Use `<main>`, `<nav>`, `<header>`, `<footer>`, and `<aside>` so screen readers can navigate by region.
- **Meaningful link text** — "Apply for benefits" instead of "Click here." Links should make sense out of context.
- **Alternative text** — Descriptive alt text on informational images. Empty `alt=""` on decorative images.
- **Visible focus indicators** — Do not remove the default focus outline with `outline: none` unless you replace it with an equally visible indicator.
- **Language attribute** — Set `lang="en"` (or the appropriate language) on the `<html>` element.
- **Page titles** — Every page needs a unique, descriptive `<title>`.
- **Skip navigation** — Use the [`nys-skipnav` component](/components/skipnav/) to let keyboard users bypass repetitive navigation.

## Testing Tools

Automated tools catch roughly 30-40% of accessibility issues. Manual testing catches the rest. Use both.

### Automated Testing

Run these during development to catch common issues early:

- **[Deque Axe](https://www.deque.com/axe/)** — Chrome and Firefox extension for in-browser accessibility testing. Start here.
- **[Google Lighthouse](https://developers.google.com/web/tools/lighthouse)** — Built into Chrome DevTools. Runs accessibility audits alongside performance.
- **[Wave](https://wave.webaim.org/extension/)** — Browser extension that visually overlays accessibility errors and warnings on your page.
- **[HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)** — Bookmarklet that checks the current page against WCAG criteria in real time.
- **[Accessibility Insights](https://accessibilityinsights.io/)** — Microsoft's testing and reporting suite. Includes guided manual assessments.
- **[a11y.css](https://ffoodd.github.io/a11y.css/)** — A CSS file that highlights potential accessibility issues by flagging problematic markup visually.

### CI/CD Integration

Incorporate automated checks into your build pipeline:

- **[Pa11y](https://pa11y.org/)** — Command-line tool for running WCAG checks in CI. Supports multiple reporters.
- **[accessibility-checker](https://www.npmjs.com/package/accessibility-checker)** — IBM's Node.js module for automated accessibility scanning. Works in test frameworks.

### Screen Reader Testing

Automated tools cannot evaluate whether content *makes sense* when read aloud. Test with real screen readers:

- **[NVDA](https://webaim.org/articles/nvda/)** — Free screen reader for Windows. The most common screen reader among users.
- **VoiceOver** — Built into macOS and iOS. Activate with Cmd+F5 on Mac.
- **TalkBack** — Built into Android devices.

Test at minimum with NVDA on Windows and VoiceOver on macOS. Navigate your page using only the keyboard and screen reader — do not look at the screen.

## Coding Techniques

### Forms

NYSDS form components ([Text Input](/components/textinput/), [Select](/components/select/), [Checkbox](/components/checkbox/), [Radio Button](/components/radiobutton/), [Textarea](/components/textarea/)) handle label association, error messaging, and required field announcements automatically. When building custom form patterns:

- Always associate labels with inputs using `for`/`id` pairs or wrapping the input in a `<label>`.
- Group related fields with `<fieldset>` and `<legend>`.
- Announce errors in context — place error text next to the field and link it with `aria-describedby`.
- Never rely on color alone to indicate errors. Include text and, where appropriate, an icon.

See [Creating Accessible Forms (WebAIM)](https://webaim.org/techniques/forms/) for a thorough reference.

### Dynamic Content

When content changes without a full page reload:

- Use `aria-live` regions to announce updates to screen readers. Use `aria-live="polite"` for non-urgent updates and `aria-live="assertive"` sparingly for critical alerts.
- Manage focus intentionally. When a modal opens, move focus into it. When it closes, return focus to the element that triggered it. NYSDS components like [`nys-modal`](/components/modal/) handle this automatically.
- Avoid moving focus unexpectedly. If a user action triggers a content change, let the user initiate the next navigation step.

### Images and Media

- Informational images: `<img src="chart.png" alt="Bar chart showing 2024 application processing times by county">`
- Decorative images: `<img src="decorative-wave.svg" alt="" role="presentation">`
- Complex images (charts, diagrams): provide a text summary in the alt attribute and a detailed description nearby or linked.
- Video: include synchronized captions and a transcript.

## NYS Internal Resources

The following resources are available to New York State staff:

- **Accessibility Teams Channel** — Ask questions, share findings, get help with specific issues.
- **Accessibility SharePoint** — Policies, templates, and internal guidance documents.
- **Accessibility Review Request Form** — Submit your site or application for an accessibility review by the NYSDS team.

Contact the NYSDS team for links to these internal resources.

## Further Reading

- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — The filterable, practical version of the full guidelines.
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) — Patterns and examples for complex interactive widgets.
- [Deque University: Accessibility for Front-End Developers](https://on.ny.gov/4eksOwH) (SLMS login) — NYS-available online course.
- See our [Learning Resources](/foundations/accessibility/learn/) page for additional courses and references.

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
