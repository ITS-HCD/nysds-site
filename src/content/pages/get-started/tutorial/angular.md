---
permalink: /get-started/developers/angular/
title: "Angular Tutorial"
navTitle: "Angular"
description: "A step-by-step guide to using NYS Design System components in an Angular application."
section: "Get Started"
parent: Developers
navOrder: 2
---

### Angular

Modern Angular apps are fully supported through our dedicated `@nysds/angular` package, which provides Angular-wrapped versions of NYSDS components. Because they are true Angular components, no `CUSTOM_ELEMENTS_SCHEMA` is required.

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