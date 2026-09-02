---
permalink: /get-started/react/
title: "React"
description: "Use New York State Design System web components in React with @nysds/react. Learn installation, controlled forms, React Hook Form, and Next.js integration."
section: Get Started
parent: Developers
navOrder: 1
---

# React

`@nysds/react` provides typed React wrappers for every New York State Design System component. Every wrapper is generated from the design system's manifest—props, events, and types stay in sync with the web components without hand maintenance.

Works with React 18 and React 19, including Next.js App Router and Pages Router.

## Install

```sh
npm install @nysds/react
```

`react` and `react-dom` (18 or 19) are peer dependencies. The matching `@nysds/nys-*` component packages install automatically.

## Load styles

Import the design system stylesheet once, at your app's entry point (the top-level component or page file):

{% set code %}import "@nysds/styles";{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

Without it, components render unstyled. `@nysds/styles` ships the design tokens and global styles; component-level styles live in each component's shadow DOM and need no extra setup.

## Use client directive

If you're using Next.js App Router or another server-side rendering framework, mark components that use NYSDS as client components:

{% set code %}"use client";

import { NysButton } from "@nysds/react";

export function Save() {
  return <NysButton label="Save" variant="filled" />;
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

This tells your framework to render the component in the browser where custom elements work.

## First component

```jsx
import { NysButton } from "@nysds/react";

export function Save() {
  return <NysButton label="Save" variant="filled" onNysClick={() => save()} />;
}
```

Importing a component registers its custom element as a side effect. You can also import from a subpath to keep the dependency graph narrow:

```jsx
import { NysTextinput } from "@nysds/react/textinput";
```

## Props, events, and refs

### Props

Props are typed from the underlying element class and set as DOM properties, not attributes. Use the camelCase property names (`showError`, `errorMessage`), not the kebab-case attribute names.

{% set code %}<NysTextinput
  label="First name"
  showError={isInvalid}
  errorMessage="First name is required"
/>{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

### Events

Events keep their full NYSDS names, mapped to `onNys*` props: `nys-change` becomes `onNysChange`, `nys-input` becomes `onNysInput`. The handler parameter is the typed event, so `e.detail` autocompletes:

{% set code %}<NysTextinput
  label="First name"
  onNysInput={(e) => console.log(e.detail.value)}
/>{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

There is no synthetic `onChange`. React's `onChange` prop attaches a native `change` listener, which NYSDS components don't dispatch—use `onNysChange`.

### Refs

Refs resolve to the element instance:

{% set code %}const ref = React.useRef<NysTextinputElement>(null);

<NysTextinput ref={ref} label="Name" />;
// Call imperative methods:
// ref.current?.checkValidity()
// ref.current?.setFiles([file]){% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

## Forms

### Controlled

Bind `value` and update state from `onNysInput`:

{% set code %}"use client";

import React from "react";
import { NysTextinput } from "@nysds/react";

export function Form() {
  const [name, setName] = React.useState("");

  return (
    <NysTextinput
      label="Name"
      value={name}
      onNysInput={(e) => setName(e.detail.value)}
    />
  );
}{% endset %}
{% set formsMode = "template" %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

The wrapper re-sets properties on every commit, so re-rendering with the same value snaps the element back to your state.

### Uncontrolled with a native form

NYSDS form components are form-associated custom elements: they submit with a plain `<form>` like native inputs.

{% set code %}function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(data.get("email"));
      }}
    >
      <NysTextinput label="Email" name="email" type="email" />
      <NysButton type="submit" label="Send" />
    </form>
  );
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

### React Hook Form

Use `Controller` and wire the field through the event detail:

{% set code %}import { Controller, useForm } from "react-hook-form";
import { NysTextinput } from "@nysds/react";

export function SignUp() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <NysTextinput
            label="First name"
            value={field.value}
            onNysInput={(e) => field.onChange(e.detail.value)}
            onNysBlur={field.onBlur}
          />
        )}
      />
      <NysButton type="submit" label="Save" />
    </form>
  );
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

The `useNysField` helper collapses that to a prop bag. Pass the kind of form control: `"value"` (default), `"checked"`, or `"files"`:

{% set code %}import { Controller, useForm } from "react-hook-form";
import { NysCheckbox, useNysField } from "@nysds/react";

export function SignUp() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="subscribed"
        control={control}
        render={({ field }) => (
          <NysCheckbox label="Subscribe to updates" {...useNysField(field, "checked")} />
        )}
      />
      <NysButton type="submit" label="Save" />
    </form>
  );
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

## Next.js

### App Router (recommended)

The App Router integrates seamlessly with `@nysds/react`. Mark your components as client components at the file level:

{% set code %}"use client";

import { NysButton } from "@nysds/react";
import "@nysds/styles";

export default function Home() {
  return <NysButton label="Click me" onNysClick={() => alert("Hello!")} />;
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

### Pages Router

Pages Router requires the same `"use client"` directive for components that use NYSDS:

{% set code %}"use client";

import { NysButton } from "@nysds/react";
import "@nysds/styles";

export default function Index() {
  return <NysButton label="Click me" onNysClick={() => alert("Hello!")} />;
}{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

Load styles once in `_app.tsx` (or a layout component):

{% set code %}import "@nysds/styles";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

## Troubleshooting

### "onChange" vs "onNysChange"

React's native `onChange` fires for native `change` events, which NYSDS components don't dispatch. Use `onNysChange` instead:

{% set code %}// Correct
<NysTextinput onNysInput={(e) => setState(e.detail.value)} />

// Wrong (won't fire)
<NysTextinput onChange={(e) => setState(e.target.value)} />{% endset %}
{% set frameworks = ["react"] %}
{% include "partials/code-preview.njk" %}

### Duplicate React

If you see the error "Target container is not a DOM element" or "Invalid hook call", you may have React loaded twice. Check `package-lock.json` to ensure only one version of `react` and `react-dom` is installed.

To debug:

```bash
npm ls react react-dom
```

### Hydration mismatches

If using SSR or static generation, ensure the server and client render the same markup. Avoid conditional renders based on `typeof window`:

```jsx
// Wrong (renders differently on server vs client)
{typeof window !== "undefined" && <NysButton />}

// Correct (renders the same on both)
<NysButton />
```

### Styles don't load

Ensure you've imported `@nysds/styles` in your app entry point or a layout component. Without it, components render unstyled.
