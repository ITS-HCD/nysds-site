---
permalink: /get-started/angular/
title: "Angular"
description: "Use New York State Design System web components in Angular with @nysds/angular. Learn installation, forms setup, and troubleshooting."
section: Get Started
parent: Developers
navOrder: 2
---

# Angular

`@nysds/angular` provides Angular components and directives for every New York State Design System component. Every wrapper is generated from the design system's manifest—properties, events, and types stay in sync with the web components without hand maintenance.

Works with Angular 20+ (core, common, forms). Supports standalone components, NgModule apps, template-driven forms, Reactive Forms, and Signal Forms.

## Install

```bash
npm install @nysds/angular @nysds/components
```

Peer dependencies: Angular `>=20.0.0` (core, common, forms).

## Load styles

Add NYSDS styles to your `angular.json` or import them in your app component:

{% set code %}
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@nysds/styles/dist/full.css"
            ]
          }
        }
      }
    }
  }
}
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

Or import in your main component:

{% set code %}
import "@nysds/styles/dist/full.css";
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## First component

### Standalone (recommended)

Import components directly into your component:

{% set code %}
import { Component } from "@angular/core";
import { NysTextinputComponent, NysButtonComponent } from "@nysds/angular";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [NysTextinputComponent, NysButtonComponent],
  template: `
    <nys-textinput label="Your name"></nys-textinput>
    <nys-button label="Submit"></nys-button>
  `,
})
export class ExampleComponent {}
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

### NgModule

Use `NysAngularModule` for traditional module-based apps:

{% set code %}
import { NgModule } from "@angular/core";
import { NysAngularModule } from "@nysds/angular";

@NgModule({
  imports: [NysAngularModule],
  // ...
})
export class AppModule {}
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Inputs, outputs, and two-way binding

All properties are typed inputs; events are typed outputs. No `CUSTOM_ELEMENTS_SCHEMA` needed:

{% set code %}
import { Component } from "@angular/core";
import { NysTextinputComponent } from "@nysds/angular";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [NysTextinputComponent],
  template: `
    <nys-textinput
      [label]="'Email'"
      [required]="true"
      (nysChange)="onEmailChange($event)"
    ></nys-textinput>
  `,
})
export class FormComponent {
  onEmailChange(event: NysTextinputChangeEvent) {
    console.log(event.detail.value); // autocompletes
  }
}
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Forms

### Template-driven forms

Use `[(ngModel)]` with form components:

{% set code %}
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NysTextinputComponent, NysCheckboxComponent, NysButtonComponent } from "@nysds/angular";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [FormsModule, NysTextinputComponent, NysCheckboxComponent, NysButtonComponent],
  template: `
    <form (ngSubmit)="onSubmit()">
      <nys-textinput [(ngModel)]="email" name="email" label="Email"></nys-textinput>
      <nys-checkbox [(ngModel)]="agreed" name="agreed" label="I agree"></nys-checkbox>
      <nys-button type="submit" label="Sign Up"></nys-button>
    </form>
  `,
})
export class SignupComponent {
  email = "";
  agreed = false;

  onSubmit() {
    console.log(this.email, this.agreed);
  }
}
{% endset %}
{% set formsMode = "template" %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

### Reactive Forms

Use `formControl` or `formControlName`:

{% set code %}
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NysTextinputComponent, NysButtonComponent } from "@nysds/angular";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [ReactiveFormsModule, NysTextinputComponent, NysButtonComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <nys-textinput formControlName="email" label="Email"></nys-textinput>
      <nys-button type="submit" label="Sign Up"></nys-button>
    </form>
  `,
})
export class SignupComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
{% endset %}
{% set formsMode = "reactive" %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

### Signal Forms (Angular 21+)

Use `[formField]` with a form field definition:

{% set code %}
import { Component, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { NysTextinputComponent } from "@nysds/angular";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [ReactiveFormsModule, NysTextinputComponent],
  template: `
    <nys-textinput [formField]="emailControl" label="Email"></nys-textinput>
  `,
})
export class SignupComponent {
  emailControl = new FormControl("", Validators.required);
}
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Group controls

`nys-checkboxgroup` and `nys-radiogroup` bind at group level:

{% set code %}
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NysCheckboxgroupComponent, NysCheckboxComponent } from "@nysds/angular";

@Component({
  selector: "app-preferences",
  standalone: true,
  imports: [ReactiveFormsModule, NysCheckboxgroupComponent, NysCheckboxComponent],
  template: `
    <form [formGroup]="form">
      <nys-checkboxgroup formControlName="languages" label="Languages">
        <nys-checkbox value="en" label="English"></nys-checkbox>
        <nys-checkbox value="es" label="Spanish"></nys-checkbox>
      </nys-checkboxgroup>
    </form>
  `,
})
export class PreferencesComponent {
  form = this.fb.group({
    languages: [["en"], Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
{% endset %}
{% set formsMode = "reactive" %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Disabled state

Set the `disabled` property on form components:

{% set code %}
<nys-textinput
  [disabled]="!editable"
  label="Name"
  [(ngModel)]="name"
  name="name"
></nys-textinput>
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Validation

NYSDS form components work with Angular's built-in validators. Set `[showError]` and `[errorMessage]` from your form control:

{% set code %}
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NysTextinputComponent } from "@nysds/angular";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, NysTextinputComponent],
  template: `
    <form [formGroup]="form">
      <nys-textinput
        formControlName="email"
        label="Email"
        [showError]="isEmailInvalid && emailControl.touched"
        [errorMessage]="getEmailError()"
      ></nys-textinput>
    </form>
  `,
})
export class FormComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  get emailControl() {
    return this.form.get("email")!;
  }

  get isEmailInvalid() {
    return this.emailControl.invalid;
  }

  getEmailError() {
    if (this.emailControl.hasError("required")) return "Email is required";
    if (this.emailControl.hasError("email")) return "Enter a valid email";
    return "";
  }
}
{% endset %}
{% set formsMode = "reactive" %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## SSR and hydration

NYSDS components work with Angular's SSR. Ensure custom elements are registered before rendering:

{% set code %}
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

// Styles load globally
import "@nysds/styles/dist/full.css";

bootstrapApplication(AppComponent).catch((err) => console.error(err));
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

For pre-rendering or hydration, custom elements must be available at build time. Build your app normally—custom elements are registered by the `@nysds/angular` components.

## Zoneless apps

NYSDS components work with zoneless change detection (Angular 19+). No special setup required:

{% set code %}
import { bootstrapApplication } from "@angular/platform-browser";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
{% endset %}
{% set frameworks = ["angular"] %}
{% include "partials/code-preview.njk" %}

## Troubleshooting

### "'nys-button' is not a known element"

If you see this error, the component is not imported. Ensure you:

1. Imported the component class (e.g., `NysButtonComponent`)
2. Added it to `imports` in standalone components or `declarations`/`imports` in modules
3. Did not use `CUSTOM_ELEMENTS_SCHEMA` (not needed with typed components)

### Form control not updating

If a form control doesn't update when you change the input:

1. Ensure you're using `[(ngModel)]` (two-way binding) for template-driven forms
2. Ensure `formControlName` is bound correctly in Reactive Forms
3. Check that the form control name matches the component name

### Styles don't load

Ensure `@nysds/styles` is imported in `angular.json` or your app component. Without it, components render unstyled.

### Memory leaks with subscriptions

Always unsubscribe from form control value changes if you subscribe manually:

```typescript
ngOnInit() {
  this.emailControl.valueChanges.subscribe((value) => {
    // ...
  }).add(() => {
    // Cleanup happens automatically with modern Angular
  });
}
```

Or use `takeUntilDestroyed`:

```typescript
constructor() {
  this.emailControl.valueChanges
    .pipe(takeUntilDestroyed())
    .subscribe((value) => {
      // Automatically unsubscribes on destroy
    });
}
```
