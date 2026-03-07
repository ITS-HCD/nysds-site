---
permalink: /foundations/components/
title: "How Components Work"
description: "Understand how NYSDS web components work — custom elements, shadow DOM, slots, CSS custom properties, and the patterns you need to use them effectively."
layout: layouts/3-col.njk
navOrder: 5
---

{% block content %}

# How Components Work

The NYS Design System component library is a set of [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) — custom HTML elements that work in any framework or no framework at all. If your project uses React, Angular, Vue, .NET Razor Pages, or plain HTML, NYSDS components work the same way.

This page explains the key concepts behind how these components are built, how they behave, and what you need to know to use them effectively. For installation and setup, see [Get Started as a Developer](/get-started/developers/).

<section id="what-are-web-components">

## What Are Web Components

Web components are a set of browser-native APIs that let you define new HTML elements with their own behavior, markup, and styles. They are built on three core technologies:

- **Custom Elements** — The ability to define new HTML tags like `<nys-alert>` or `<nys-button>` that the browser treats as first-class elements, just like `<input>` or `<select>`.
- **Shadow DOM** — An encapsulation boundary that keeps a component's internal markup and styles separate from the rest of the page.
- **HTML Templates** — A way to declare reusable markup that is rendered only when a component is created.

When you write `<nys-alert heading="Enrollment period ends Friday">` in your HTML, the browser recognizes `nys-alert` as a registered custom element, creates an instance of the component class, and renders its internal template inside a shadow root. The result looks and behaves like a native HTML element.

</section>

<section id="why-web-components">

## Why NYSDS Uses Web Components

New York State agencies run a wide range of tech stacks — .NET MVC, Angular, React, Vue, legacy jQuery applications, and static HTML sites. A design system that requires a specific framework would exclude many of those teams.

Web components solve this problem. They are **built on web standards, not a framework**, so they work anywhere the browser runs:

- **Framework-agnostic** — Drop `<nys-button label="Submit application">` into a React JSX file, an Angular template, a .NET Razor view, or a plain HTML page. It works the same way in all of them.
- **Encapsulated** — Shadow DOM prevents your page styles from accidentally breaking a component, and prevents component styles from leaking into your page. This is especially valuable when integrating with legacy applications that have unpredictable global CSS.
- **Future-proof** — Because web components are a browser standard (not a library that could be deprecated), they will continue to work as browsers evolve. There is no framework version to upgrade.

</section>

<section id="how-nysds-components-are-built">

## How NYSDS Components Are Built

NYSDS components are built with [Lit](https://lit.dev/), a lightweight library that makes authoring web components simpler. Lit handles reactive property updates, efficient re-rendering, and the boilerplate of defining custom elements. Components are written in TypeScript and styled with SCSS.

As a developer using the components, you do not need to know Lit or TypeScript. NYSDS components are standard HTML elements — you interact with them through HTML attributes, DOM properties, and JavaScript events, the same way you would with a native `<input>` or `<select>`.

</section>

<section id="shadow-dom">

## Shadow DOM

Shadow DOM is the most important web component concept to understand because it directly affects how you style and interact with components.

### What shadow DOM does

Every NYSDS component creates a **shadow root** — an isolated DOM tree attached to the element. The component's internal markup lives inside this shadow root. For example, `<nys-button label="Search">` internally renders a `<button>` element, focus styles, icon slots, and layout structure — all hidden inside the shadow root.

This isolation means:

- Your page CSS **cannot** target elements inside the shadow root. A rule like `button { color: red; }` in your stylesheet will not affect the `<button>` inside `<nys-button>`.
- The component's internal styles **cannot** leak out and affect your page. An `<nys-alert>` will never accidentally restyle your headings or paragraphs.

### Why this matters

If you are coming from a system where you override component styles with CSS selectors, shadow DOM changes the game. You cannot write `.my-page nys-button button { ... }` to restyle the internal button. This is by design — it prevents accidental breakage and ensures components look and behave consistently across every agency site.

### How to customize component styles

NYSDS components expose **CSS custom properties** (also called CSS variables) that pierce the shadow DOM boundary. These are the designated styling API for each component.

For example, to change the background color of a button on your agency's landing page:

{% set code %}
<style>
  .apply-now-section nys-button {
    --nys-button-background-color: var(--nys-color-success-600);
    --nys-button-background-color--hover: var(--nys-color-success-700);
  }
</style>
<div class="apply-now-section">
  <nys-button label="Apply for benefits"></nys-button>
</div>
{% endset %}
{% set accordionLabel = "CSS Custom Properties Example" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Each component's reference page lists its available CSS custom properties. You can find the full list of NYSDS design tokens at the [token reference](/tokens/), and learn how the token system works at [Design Tokens](/foundations/tokens/).

</section>

<section id="slots">

## Slots: Content Projection

Slots let you pass your own content into a component's internal template. This is how web components handle the equivalent of "children" in React or "transclusion" in Angular.

### Default slots

Some components accept content in a **default slot** — you just place it between the opening and closing tags. For example, `<nys-alert>` lets you provide custom body content this way:

{% set code %}
<nys-alert type="warning" heading="Office closure">
  <p>The <strong>Albany DMV office</strong> will be closed
  December 25 through January 1. <a href="/locations">Find
  other locations</a>.</p>
</nys-alert>
{% endset %}
{% set accordionLabel = "Default Slot Example" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

### Named slots

When a component has multiple insertion points, it uses **named slots**. You target a named slot with the `slot` attribute on your content:

{% set code %}
<nys-textinput label="Search license records" name="search">
  <span slot="description">Enter a license number or applicant name.</span>
</nys-textinput>
{% endset %}
{% set accordionLabel = "Named Slot Example" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

Each component's reference page documents which slots it supports.

</section>

<section id="component-lifecycle">

## Component Lifecycle

### Registration

When the NYSDS JavaScript file loads, it registers every component with the browser's custom element registry. Until registration completes, the browser treats tags like `<nys-button>` as unknown elements — they exist in the DOM but have no behavior or styling.

This registration is automatic. You do not need to call `customElements.define()` yourself.

### Waiting for a component to be ready

If you need to interact with a component programmatically — for example, to set a property or read a value — wait until its definition has loaded:

{% set code %}
// Wait for nys-select to be registered, then set its value
customElements.whenDefined('nys-select').then(() => {
  const regionSelect = document.querySelector('nys-select#region');
  regionSelect.value = 'capital-district';
});
{% endset %}
{% set accordionLabel = "whenDefined Example" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

### Waiting for a render to complete

NYSDS components (built with Lit) expose an `updateComplete` promise that resolves after the component has re-rendered in response to a property change. Use this when you need to read the DOM after changing a property:

{% set code %}
const stepper = document.querySelector('nys-stepper#application-progress');
stepper.activeStep = 3;
// Wait for the component to finish rendering
await stepper.updateComplete;
// Now the DOM reflects the updated step
const activeLabel = stepper.shadowRoot.querySelector('.step--active');
console.log('Current step:', activeLabel.textContent);
{% endset %}
{% set accordionLabel = "updateComplete Example" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

### Preventing flash of unstyled content (FOUC)

Before the NYSDS JavaScript loads, custom elements appear as unstyled text or empty boxes. To prevent this flash, place the `<script>` tag for `nysds.js` before the closing `</body>` tag so the DOM is fully loaded before components initialize. For additional strategies, see the [developer setup guide](/get-started/developers/).

</section>

---

<section id="working-with-events">

## Working With Events

NYSDS components communicate through standard DOM events. Most components emit custom events prefixed with `nys-` that you can listen for with `addEventListener()`:

{% set code %}
const dateField = document.querySelector('nys-datepicker#appointment-date');
dateField.addEventListener('nys-change', (event) => {
  const selectedDate = event.detail.value;
  console.log('Appointment date selected:', selectedDate);
  // Update the confirmation summary
  document.querySelector('#confirm-date').textContent = selectedDate;
});
{% endset %}
{% set accordionLabel = "Event Listener Example" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

Events bubble up through the DOM like any other event, so you can also listen on a parent element. Each component's reference page documents the events it emits and the data available in `event.detail`.

</section>

<section id="component-proposal">

## Proposing a New Component

The NYSDS component library grows based on the needs of New York State agencies. If your team needs a component that does not exist yet, you can propose one.

The proposal process helps the NYSDS team evaluate whether a component should be shared across the system or is better suited as a custom one-off for your project. Proposals are reviewed based on:

- **Reusability** — Would multiple agencies benefit from this component?
- **Accessibility** — Can it meet WCAG 2.2 AA standards?
- **Scope** — Is it a distinct component or a variant of an existing one?

<a href="https://github.com/ITS-HCD/nysds/issues/new?template=component-proposal.md" target="_blank" rel="noopener noreferrer">Submit a component proposal on GitHub<nys-icon name="open_in_new" size="lg"></nys-icon></a>

</section>

{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}
