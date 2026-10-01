---
permalink: /get-started/developers/vue/
title: "Vue Tutorial"
navTitle: "Vue"
description: "A step-by-step guide to using NYS Design System components in a Vue 3 application."
section: "Get Started"
parent: Developers
navOrder: 3
---

# Vue Tutorial

A step-by-step guide to using NYS Design System components in a Vue 3 application.

## Installation

Install the two NYSDS packages: `@nysds/vue` for the Vue-wrapped components and `@nysds/styles` for the design tokens and global CSS. `@nysds/vue` requires Vue 3.4 or later.

**Note:** Both packages are versioned together. Always install matching versions to avoid token/component mismatches.

{% set code %}npm install @nysds/vue @nysds/styles{% endset %}
{% set accordionLabel = "Installation" %}
{% set codeExpanded = true %}
{% include "partials/code-preview.njk" %}

<nys-alert type="success" heading="That's all!" text="No app.use() call or global registration needed. Importing a wrapper component registers its custom element as a side effect."></nys-alert>

## Project Setup

After installing, import the NYSDS stylesheet once, at the top of your entry file (`src/main.ts`):

{% set code %}// src/main.ts
import "@nysds/styles/full";
{% endset %}
{% set accordionLabel = "Entry point" %}
{% set codeExpanded = true %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

Without it, components render unstyled. `@nysds/styles` ships the design tokens and global styles. Component-level styles live in each component's shadow DOM and need no extra setup.

<nys-alert type="warning" heading="TypeScript build error?" text="Vue's default TypeScript config rejects side-effect imports it can't resolve, and stylesheets aren't modules. If npm run build fails with TS2882: Cannot find module or type declarations for side-effect import of '@nysds/styles/full', declare the stylesheet once in env.d.ts."></nys-alert>

**Optional agency theme:** set `<html data-theme="health">` (or `admin`, `business`, `environment`, `local`, `safety`, `transportation`). Fonts aren't bundled, so load them the way your agency normally does.

## Your First Component

Import from `@nysds/vue`. Importing a wrapper registers its custom element for you, so there's no `app.use()` call needed.

{% set code %}<script setup lang="ts">
import { NysAlert, NysButton } from "@nysds/vue";

const start = () => console.log("started");
</script>

<template>
  <NysAlert type="info" heading="Welcome" />
  <NysButton label="Start" @nys-click="start" />
</template>{% endset %}
{% set accordionLabel = "First Component" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

## Props, Events, and Slots

**Props** are set as DOM properties. Use either camelCase or kebab-case in templates: `appName` and `app-name` are the same prop. Bind numbers and booleans with `:` so they keep their type, not a string:

{% set code %}<NysPagination :total-pages="5" :current-page="1" />
<NysTextinput label="Name" required :disabled="locked" />{% endset %}
{% set accordionLabel = "Prop Binding" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

<nys-alert type="warning" text="total-pages=&quot;5&quot; passes the string &quot;5&quot;, not a number. Components expecting a number type won't parse it, so always bind numeric and boolean props with a colon."></nys-alert>

**Events** keep their full NYSDS names. Listen with `@nys-change`, `@nys-input`, and so on. The handler receives the typed event, so `e.detail` autocompletes:

{% set code %}<NysTextinput
  label="First name"
  @nys-input="(e) => console.log(e.detail.value)"
/>{% endset %}
{% set accordionLabel = "Event Binding" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

Use the `nys-*` events instead of native `@input` or `@change`. They cover cases native events don't, like a combobox selection or a date picked from the calendar.

**Slots** work with `<template #name>`. The default slot renders as direct children:

{% set code %}<NysTextinput label="Email">
  <template #description>We'll never share it.</template>
</NysTextinput>

<NysTooltip text="Tooltip text">
  <NysButton label="Hover me" />
</NysTooltip>{% endset %}
{% set accordionLabel = "Slot Usage" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

## Forms

### `v-model`

Every form control supports `v-model`, bound to the property the component's form contract defines:

<nys-table bordered striped>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th><code>v-model</code> value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>NysTextinput</code>, <code>NysTextarea</code>, <code>NysSelect</code>, <code>NysCombobox</code>, <code>NysDatepicker</code>, <code>NysRadiogroup</code></td>
        <td><code>string</code></td>
      </tr>
      <tr>
        <td><code>NysCheckboxgroup</code></td>
        <td><code>string[]</code></td>
      </tr>
      <tr>
        <td><code>NysCheckbox</code>, <code>NysToggle</code></td>
        <td><code>boolean</code></td>
      </tr>
    </tbody>
  </table>
</nys-table>

{% set code %}<script setup lang="ts">
import { reactive } from "vue";
import {
  NysButton,
  NysCheckbox,
  NysCheckboxgroup,
  NysRadiobutton,
  NysRadiogroup,
  NysTextinput,
} from "@nysds/vue";

const model = reactive({
  firstName: "",
  agree: false,
  languages: [] as string[],
  contact: "",
});

function onSubmit() {
  console.log(model);
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <NysTextinput v-model="model.firstName" label="First name" required />
    <NysCheckbox v-model="model.agree" label="I agree to the terms" />

    <NysCheckboxgroup v-model="model.languages" label="Languages">
      <NysCheckbox label="English" value="en" />
      <NysCheckbox label="Spanish" value="es" />
    </NysCheckboxgroup>

    <NysRadiogroup v-model="model.contact" label="Preferred contact" name="contact">
      <NysRadiobutton label="Email" name="contact" value="email" />
      <NysRadiobutton label="Phone" name="contact" value="phone" />
    </NysRadiogroup>

    <NysButton type="submit" label="Submit" />
  </form>
</template>{% endset %}
{% set accordionLabel = "v-model Example" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

Bind checkbox and radio groups on `NysCheckboxgroup` and `NysRadiogroup`, not on each child. The model updates on the component's `nys-input` and `nys-change` events. Add `.lazy` (`v-model.lazy`) to update on `nys-change` alone, as with a native input.

**File input has no `v-model`.** Listen for the change event and read the files from its detail:

{% set code %}<NysFileinput
  label="Resume"
  @nys-change="(e) => (model.resume = e.detail.files[0]?.name ?? '')"
/>{% endset %}
{% set accordionLabel = "File Input" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

### Submit and Validate

NYSDS form components are form-associated custom elements. They submit with a plain `<form>` like native inputs, and `required`, `pattern`, and the rest drive the component's own validation and error display.

{% set code %}<form @submit.prevent="onSubmit">
  <NysTextinput v-model="model.firstName" label="First name" required />
  <NysButton type="submit" label="Submit" />
</form>{% endset %}
{% set accordionLabel = "Form Example" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

A `NysButton` with `type="submit"` submits through `form.requestSubmit()`, so an invalid field blocks `@submit` and the component shows its own error.

To drive errors from your own validation library instead, set the component's error props directly:

{% set code %}<NysTextinput
  v-model="model.firstName"
  label="First name"
  :show-error="!!errors.firstName"
  :error-message="errors.firstName"
/>{% endset %}
{% set accordionLabel = "Custom Validation" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

**Resetting forms:** setting the model back to its initial values resets every bound control. The file input has no bound value, so also call `reset()` on the form itself:

{% set code %}const form = ref<HTMLFormElement | null>(null);

function reset() {
  Object.assign(model, initialModel());
  form.value?.reset();
}{% endset %}
{% set accordionLabel = "Resetting Forms" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

## What's next

Explore the full component library on the official NYSDS reference site.

- [Component Reference](/components/)