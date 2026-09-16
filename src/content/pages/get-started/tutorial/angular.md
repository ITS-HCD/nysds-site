---
permalink: /get-started/developers/angular/
title: "Angular Tutorial"
navTitle: "Angular"
description: "A step-by-step guide to using NYS Design System components in an Angular application."
section: "Get Started"
parent: Developers
navOrder: 2
---

# Angular Tutorial

A step-by-step guide to using NYS Design System components in an Angular application.

## Installation

Install the two NYSDS packages: `@nysds/angular` for the Angular-wrapped components and `@nysds/styles` for the design tokens and global CSS.

**Note:** Both packages are versioned together. Always install matching versions to avoid token/component mismatches.

{% set code %}npm install @nysds/angular @nysds/styles{% endset %}
{% set accordionLabel = "Installation" %}
{% set codeExpanded = true %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

<nys-alert type="success" heading="That's all!" text="No CUSTOM_ELEMENTS_SCHEMA needed. NYSDS Angular components are true Angular components, not raw custom elements, so they work with Angular's template type-checking out of the box."></nys-alert>

## Project Setup

After installing, load the NYSDS stylesheet by importing it at the top of your global stylesheet (`src/styles.css` or `src/styles.scss`). Angular's build tools resolve the package import automatically, so you don't need to reference a path inside `node_modules`.

{% set code %}/* src/styles.css */
@import "@nysds/styles/full";
{% endset %}
{% set accordionLabel = "Global CSS Import" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

### Usage

NYSDS Angular components are true Angular components, so they work with Angular's template type-checking and don't require `CUSTOM_ELEMENTS_SCHEMA`.

#### 1. Standalone Components (Modern Angular)

In modern Angular (v14+), import individual NYSDS components directly into your standalone component's `imports` array:

{% set code %}import { Component } from '@angular/core';
import { NysButtonComponent } from '@nysds/angular';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [NysButtonComponent],
  template: `
    <nys-button
      label="Submit"
      variant="primary"
      (nysClick)="handleSubmit()"
    ></nys-button>
  `
})
export class MyComponent {
  handleSubmit() {
    console.log('Button clicked!');
  }
}{% endset %}
{% set accordionLabel = "Angular Standalone Example" %}
{% set codeExpanded = false %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}

#### 2. Module-based Apps (NgModule)

If you're using an NgModule-based architecture, or want to import all components at once, import `NysAngularModule` into your app or feature module:

{% set code %}import { NgModule } from '@angular/core';
import { NysAngularModule } from '@nysds/angular';

@NgModule({
  imports: [NysAngularModule]
})
export class AppModule {}{% endset %}
{% set accordionLabel = "Angular Module Setup" %}
{% set codeExpanded = false %}
{% include "partials/code-preview.njk" %}

#### 3. Forms Integration (Two-Way Binding)

Our Angular components support `ControlValueAccessor` natively, so they work with both Angular Template-driven forms (`[(ngModel)]`) and Reactive forms (`formControlName`), including built-in form validation:

{% set code %}<!-- Template-driven forms -->
<nys-textinput
  label="First name"
  name="firstName"
  [(ngModel)]="firstName"
></nys-textinput>

<!-- Reactive forms -->
<nys-textinput
  label="First name"
  name="firstName"
  formControlName="firstName"
></nys-textinput>{% endset %}
{% set accordionLabel = "Angular Forms Example" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

## Icon Library Setup (Optional)

`<nys-icon>` loads icons through a registered `library`. The default works out of the box for most apps. If you want to self-host icon assets locally (offline builds, stricter CSP), you'll need three things: install the components package, copy the icon assets into your build, and register a resolver pointing at them.

Install `@nysds/components` — `@nysds/angular` doesn't pull this in for you:

{% set code %}npm install @nysds/components{% endset %}
{% set accordionLabel = "Install @nysds/components" %}
{% set codeExpanded = true %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

Add the icons to your `assets` array in `angular.json`:

{% set code %}"assets": [
  ...
  {
    "glob": "**/*",
    "input": "node_modules/@nysds/components/dist/icons",
    "output": "/icons/"
  }
]{% endset %}
{% set accordionLabel = "Copy Icon Assets in angular.json" %}
{% set codeExpanded = false %}
{% set codeLanguage = "json" %}
{% include "partials/code-preview.njk" %}

Then register a resolver pointing at `/icons/` — see [Managing your icon library](/components/icon/#managing-your-icon-library) for setup and usage.
## What's next

You've covered the core patterns. From here, explore the full component library on the official NYSDS reference site, or browse the live examples in the Component Playground.

- [Component Playground](/showcase/)
- [Component Reference](/components/)