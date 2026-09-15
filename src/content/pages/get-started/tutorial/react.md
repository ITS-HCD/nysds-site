---
permalink: /get-started/developers/react/
title: "React Tutorial"
navTitle: "React"
description: "A step-by-step guide to using NYS Design System components in a React + TypeScript application."
section: "Get Started"
parent: Developers
navOrder: 1
---

# React Tutorial

A step-by-step guide to using NYS Design System components in a React + TypeScript application.

## Installation

Install the two NYSDS packages: `@nysds/react` for the React-wrapped web components and `@nysds/styles` for the design tokens and global CSS.

**Note:** Both packages are versioned together. Always install matching versions to avoid token/component mismatches.

{% set code %}npm install @nysds/react @nysds/styles{% endset %}
{% set accordionLabel = "Installation" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

<nys-alert type="success" heading="That's all!" text="No registration step needed. Components self-register the moment they're imported. No need to defineCustomElements() or setup call required."></nys-alert>

## Project Setup

After installing, load the NYSDS stylesheet in your `index.html`. Unlike the vanilla HTML setup on the reference site, you do **not** need the `<script src="nysds.js">` tag. When using React with a modern build tool, component JavaScript is bundled automatically when you import it.

{% set code %}<!-- index.html -->
<link
  rel="stylesheet"
  href="node_modules/@nysds/styles/dist/nysds-full.min.css"
/>

<!-- Optional: swap in an agency theme (default is NYS blue) -->
<!-- <link rel="stylesheet" href="node_modules/@nysds/styles/dist/nysds-theme-admin.min.css" /> -->{% endset %}
{% set accordionLabel = "index.html" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Your First Component

Import directly from `@nysds/react`. This package gives you React-wrapped versions of each web component - event bindings included. Do not import from the package root; that exposes the raw Lit custom elements without React wrappers.

{% set code %}import { NysButton } from "@nysds/react";

<NysButton label="Submit" variant="primary" />{% endset %}
{% set accordionLabel = "NysButton" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

<nys-alert type="warning" text="Avoid importing from @nysds/components directly (without /react). That path exposes the raw Lit elements and skips the React event adapter layer."></nys-alert>

## Custom Events

This is the most common source of confusion for React developers new to NYSDS. Web components fire [DOM CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent), not the synthetic events React uses for native inputs. The NYSDS React wrappers map these to callback props like `onNysChange` and `onNysInput`, but the underlying type is still a DOM `Event`, not a React synthetic event.

**Note:** Full event payloads are documented on each component's page at the NYSDS reference site.

{% set code %}// ❌ This won't work! NysTextinput doesn't fire a native change event
<NysTextinput onChange={(e) => setValue(e.target.value)} />

// ✅ Use the NYSDS custom event binding
<NysTextinput
  name="email"
  onNysInput={(e) => {
    const value = (e as CustomEvent).detail.value;
    setValue(value);
  }}
/>{% endset %}
{% set accordionLabel = "Custom Event Binding" %}
{% set codeExpanded = false %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% set code %}// Type guard: only accesses detail if it really is a CustomEvent
onNysInput={(e) => {
  if (e instanceof CustomEvent) {
    setValue(e.detail.value);
  }
}}{% endset %}
{% set accordionLabel = "Type Guard" %}
{% set codeExpanded = false %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

{% set preview %}<nys-textinput
label="Type something"
name="demo"

> </nys-textinput>

<p>Current value: <strong id="current-value">...</strong></p>

<script>
  const input = document.querySelector('nys-textinput');
  const currentValue = document.querySelector('#current-value');

  input.addEventListener('nys-input', (e) => {
    currentValue.textContent = e.detail.value || '...';
  });
</script>{% endset %}

{% set code %}const [value, setValue] = useState("");

<NysTextinput
  label="Type something"
  name="demo"
  onNysInput={(e) => setValue((e as CustomEvent).detail.value)}
/>
<p>Current value: <strong>{value || "..."}</strong></p>{% endset %}
{% set accordionLabel = "Live demo" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

## Using Slots

Web components use [HTML slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) to let you inject content into specific places inside the component's shadow DOM. In JSX, you use them via the `slot` attribute on child elements.

{% set preview = "" %}
{% set code %}// Default slot — children go into the component's main content area
<NysButton>
  <img src="icon.svg" alt="" />
  Submit Form
</NysButton>

// Named slot — target a specific injection point by name
<NysToggle label="Notifications">
  <p slot="description">
    Receive email updates about your applications.
  </p>
</NysToggle>{% endset %}
{% set accordionLabel = "Slot Usage" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

{% set preview %}<nys-toggle label="Enable notifications">
  <p slot="description">
    Receive email updates about your applications.
  </p>
</nys-toggle>{% endset %}
{% set code %}<NysToggle label="Enable notifications">
  <p slot="description">
    Receive email updates about your applications.
  </p>
</NysToggle>{% endset %}
{% set accordionLabel = "Named slot in action" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

<nys-alert type="info" text="Check the NYSDS component docs to see which slots each component exposes. Not all components have named slots! Some only accept a default slot."></nys-alert>

## Forms & FormData

NYSDS form components implement the browser's [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals), which means they participate in native HTML form submission just like `<input>` and `<select>`. You don't need React state for every field. The `FormData` collects all values on submit.

{% set preview = "" %}
{% set code %}import { FormEvent } from "react";
import { NysButton, NysSelect, NysTextinput } from "@nysds/react";

const MyForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    // data = { name: "Jane Smith", topic: "general" }

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <NysTextinput name="name" label="Name" required />
      <NysSelect name="topic" label="Topic">
        <option value="general" label="General Inquiry" />
        <option value="feedback" label="Feedback" />
      </NysSelect>
      <NysButton type="submit" label="Submit" />
    </form>
  );
};{% endset %}
{% set accordionLabel = "Form Example" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

**Resetting forms:** Calling `form.reset()` resets native HTML inputs but not NYSDS web components. They maintain their own internal state. You need to clear them explicitly.

{% set code %}const formRef = useRef<HTMLFormElement>(null);

const handleReset = () => {
  formRef.current?.reset(); // clears native inputs

  // Explicitly clear NYSDS components
  formRef.current
    ?.querySelectorAll("nys-textinput, nys-select, nys-textarea")
    .forEach((el) => { (el as any).value = null; });
};{% endset %}
{% set accordionLabel = "Resetting Forms" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

<nys-alert type="info" heading="See it in practice" text="The Basic Form page in this demo shows all of these patterns together — submission, validation, conditional fields, and form reset." primaryLabel="View Basic Form on External React Demo" primaryAction="https://its-hcd.github.io/nysds-react-demo/basic-form"></nys-alert>

## What's next

You've covered the core patterns. From here, explore the full component library on the official NYSDS reference site, or browse the live examples in the Component Playground.

- [Component Playground](/showcase/)
- [Component Reference](/components/)