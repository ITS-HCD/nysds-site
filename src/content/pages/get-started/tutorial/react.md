---
permalink: /get-started/developers/react/
title: "React Quick Start"
navTitle: "React"
description: "A step-by-step guide to using NYS Design System components in a React + TypeScript application."
section: "Get Started"
parent: Developers
---

# React Quick Start

<nys-video videourl="https://youtu.be/5XawJALkDxQ" titleText="Quick Start: React + NYS Design System"></nys-video>

## Installation

A step-by-step guide to using NYS Design System components in a React + TypeScript application.

**Requirements:** React and React DOM `18` or `19`

To start from scratch, install the Vite React app:

{% set code %}npm create vite@latest my-app -- --template react-ts{% endset %}
{% set accordionLabel = "Setup a new React " %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

## Install NYSDS

Install the two NYSDS packages:
- `@nysds/react` for the React-wrapped web components
- `@nysds/styles` for the design tokens and global CSS.

**Note:** Both packages are versioned together. Always install matching versions to avoid token/component mismatches.

{% set code %}npm install @nysds/react @nysds/styles{% endset %}
{% set accordionLabel = "Install NYSDS" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

<nys-alert type="success" heading="That's all!" text="No registration step needed. Components self-register the moment they're imported. No need to defineCustomElements() or setup call required."></nys-alert>

## Project Setup

For styling, import the NYSDS CSS in your entry file:

{% set code %}import "@nysds/styles/full";{% endset %}
{% set accordionLabel = "main.tsx" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

The stylesheet provides the design tokens and global styles; each component's own styles live in its shadow DOM and need no extra setup.

## Your First Component

Open your App.tsx file and import directly from `@nysds/react`. This package gives you React-wrapped versions of each web component; event bindings included. If you'd rather not pull in the whole library, import from a subpath instead, e.g. `@nysds/react/button`.

{% set code %}import { NysButton } from "@nysds/react/button";

<NysButton label="Submit" variant="primary" />{% endset %}
{% set accordionLabel = "App.tsx" %}
{% set codeExpanded = false %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

## Props
 
Props are typed from the underlying web component and set as DOM properties, not attributes. Use the camelCase property names (`showError`, `errorMessage`), not the kebab-case attribute names.

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
></nys-textinput>

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

## Forms

NYSDS form components are form-associated custom elements built on the browser's [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals), which means they participate in native HTML form submission just like `<input>` and `<select>`.

#### Controlled inputs
 
Bind `value` and update state from `onNysInput`:
 
{% set preview = "" %}
{% set code %}const [name, setName] = useState("");
 
<NysTextinput
  label="Name"
  value={name}
  onNysInput={(e) => setName(e.detail.value)}
/>{% endset %}
{% set accordionLabel = "Controlled Input" %}
{% set codeExpanded = false %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

#### Submitting with FormData

You don't need React state for every field. The `FormData` collects all values on submit.

{% set preview = "" %}
{% set code %}import { SyntheticEvent } from "react";
import { NysButton, NysSelect, NysTextinput } from "@nysds/react";

const MyForm = () => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
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

<nys-alert type="info" heading="See it in practice" text="The Basic Form page in this demo shows all of these patterns together — submission, validation, conditional fields, and form reset." primaryLabel="View Basic Form on External React" primaryAction="https://its-hcd.github.io/nysds-react-demo/basic-form"></nys-alert>

## Server-Side Rendering and Next.js
 
Every wrapper carries a `"use client"` directive, so the Next.js App Router works with a normal import. You only need `"use client"` in your own files if they hold state.
 
- **App Router:** import wrappers from any client component. A server component can't render a wrapper directly; pass it through a client boundary.
- **Pages Router:** import and use anywhere.
- Components render client side. There is no declarative shadow DOM server rendering in this release.

## What's next

You've covered the core patterns. From here, explore the full component library on the official NYSDS reference site, or browse the NYSDS React Demo repo.

- [Component Reference](/components/)
- [React Demo Repo](https://github.com/ITS-HCD/nysds-react-demo)
