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


**Requirements:** Angular `>=20.0.0` (core, common, forms)

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
After installing, load the NYSDS styles using one of the options below.

#### Option 1: Global stylesheet import

Import the NYSDS stylesheet at the top of your global stylesheet (`src/styles.css` or `src/styles.scss`). Angular's build tools resolve the package import automatically, so you don't need to reference a path inside `node_modules`.

{% set code %}
@import "@nysds/styles/full";
{% endset %}
{% set accordionLabel = "Global CSS Import" %}
{% set codeExpanded = true %}
{% set codeLanguage = "css" %}
{% include "partials/code-preview.njk" %}

#### Option 2: angular.json

Add the NYSDS stylesheet to the `styles` array in your `angular.json`:
 
{% set code %}{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@nysds/styles/dist/nysds-full.min.css"
            ]
          }
        }
      }
    }
  }
}{% endset %}
{% set accordionLabel = "angular.json Styles" %}
{% set codeExpanded = false %}
{% set codeLanguage = "json" %}
{% include "partials/code-preview.njk" %}

#### Option 3: Import in your main component

Or import the stylesheet in your main component:
 
{% set code %}import "@nysds/styles/full.css";{% endset %}
{% set accordionLabel = "Component Style Import" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
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


## Forms
 
Our Angular components support `ControlValueAccessor` natively, so they work with both Template-driven forms and Reactive forms, including built-in form validation.

#### Template-driven forms
 
Use `[(ngModel)]` for two-way binding:
 
{% set code %}<nys-textinput
  label="First name"
  name="firstName"
  [(ngModel)]="firstName"
></nys-textinput>{% endset %}
{% set accordionLabel = "Template-driven Forms" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}
 
#### Reactive forms
 
Use `formControlName`:
 
{% set code %}<nys-textinput
  label="First name"
  name="firstName"
  formControlName="firstName"
></nys-textinput>{% endset %}
{% set accordionLabel = "Reactive Forms" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

#### Group controls
 
`nys-checkboxgroup` and `nys-radiogroup` bind at the group level, not on each individual checkbox or radio:
 
{% set code %}<nys-checkboxgroup formControlName="languages">
  <nys-checkbox value="en">English</nys-checkbox>
  <nys-checkbox value="es">Spanish</nys-checkbox>
</nys-checkboxgroup>{% endset %}
{% set accordionLabel = "Group Controls" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}

#### Validation
 
By default, the component owns validation. Its `required` and `pattern` attributes drive validation, which is shown on blur.
 
To let Angular own validation instead, add the `nysControlErrors` directive. It subscribes to `control.errors` and sets the component's `showError` and `errorMessage`:
 
{% set code %}<nys-textinput
  formControlName="email"
  nysControlErrors
></nys-textinput>{% endset %}
{% set accordionLabel = "nysControlErrors Directive" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}
 
Override the default error messages with the `NYS_ERROR_MESSAGES` provider:
 
{% set code %}providers: [
  {
    provide: NYS_ERROR_MESSAGES,
    useValue: {
      required: () => "Please fill in this field",
      email: () => "Enter a valid email",
    },
  },
]{% endset %}
{% set accordionLabel = "Custom Error Messages" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

## Inputs, Outputs, and Events
 
All properties are typed inputs and events are typed outputs:
 
{% set code %}<nys-textinput
  [label]="'Email'"
  [required]="true"
  (nysChange)="onEmailChange($event)"
></nys-textinput>{% endset %}
{% set accordionLabel = "Inputs and Outputs" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}
 
Event detail is typed
 
{% set code %}onEmailChange(event: NysTextinputChangeEvent) {
  console.log(event.detail.value); // autocompletes
}{% endset %}
{% set accordionLabel = "Typed Event Detail" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}

## Subpath Imports
 
To import individual components, use the per-component subpaths:
 
{% set code %}import { NysTextinputComponent } from "@nysds/angular/textinput";
import { NysCheckboxComponent } from "@nysds/angular/checkbox";{% endset %}
{% set accordionLabel = "Subpath Imports" %}
{% set codeExpanded = false %}
{% set codeLanguage = "ts" %}
{% include "partials/code-preview.njk" %}
 
## Server-Side Rendering
 
The components render client-side. If your app uses SSR, wrap containers in `ngSkipHydration`:
 
{% set code %}<div ngSkipHydration>
  <nys-textinput></nys-textinput>
</div>{% endset %}
{% set accordionLabel = "ngSkipHydration" %}
{% set codeExpanded = false %}
{% set codeLanguage = "html" %}
{% include "partials/code-preview.njk" %}
Or use `provideClientHydration` if registering components client-only.

## What's next

You've covered the core patterns. From here, explore the full component library on the official NYSDS reference site, or browse the live examples in the Component Playground.

- [Component Playground](/showcase/)
- [Component Reference](/components/)