---
permalink: /getting-started/developers/
title: "Getting started for developers - Excelsior, New York State's Design System"
description: "Excelsior makes it easier to build accessible, usable websites for New York State."
section: Getting Started
---

{% block content %}

# Developers

<!-- **Note**: This project is currently in development and not yet ready for production use. The instructions here are for developers who want to evaluate or provide feedback on the Excelsior Design System. -->

## Install the core libraries in your project:
To start using Excelsior in your project, you need to install the core libraries:

```html
npm install @nys-excelsior/components @nys-excelsior/styles
```

## Reference the files in your application:
```html
<script type="module" src="[path-to-dir]/excelsior.js"></script>
<link rel="stylesheet" href="[path-to-dir]/excelsior.min.css" />
```

**If you are not using a package manager**, you can download the files directly from the [Excelsior Components NPM](https://www.npmjs.com/package/@nys-excelsior/components) and [Excelsior Style NPM](https://www.npmjs.com/package/@nys-excelsior/styles). Keep in mind, you will need to manually update the files when new versions are released.

## Start using Excelsior components in your application:
All that's left is to start using Excelsior components in your application.

{% highlight "html" %}
<nys-alert 
  dismissible
  theme="success" 
  heading="Application Submitted" 
  text="Your application has been submitted. You will receive a confirmation email shortly."> 
</nys-alert>
{% endhighlight %}

### Demo
<nys-alert 
  dismissible
  theme="success" 
  heading="Application Submitted" 
  text="Your application has been submitted. You will receive a confirmation email shortly."> 
</nys-alert>

## Component documentation

Explore the **[Components]({{ site.url | url }}/components/)** page to find documentation, usage guidance, and interactive previews for each of the components in the Excelsior Design System.

## Applying Agency-Specific Themes
Excelsior's default theme uses the default New York State blue, but theme stylesheets for NYS agency groups are included with specific agency branding. Components that use themed design tokens like `--nys-color-theme` will be styled according to the selected theme.

To use a theme in an application, include a reference to the theme stylesheet after the global stylesheet:

```html
<link rel="stylesheet" href="[path-to-dir]/excelsior.min.css">
<link rel="stylesheet" href="[path-to-dir]/excelsior-theme-health.min.css">
```

Every Excelsior component or element using one of the themed design tokens will now reflect that agency grouping's branding.

### Available Themes
  - Administration: `excelsior-theme-admin.min.css`
  - Business: `excelsior-theme-business.min.css`
  - Recreation and Environment: `excelsior-theme-environment.min.css`
  - Health and Human Services: `excelsior-theme-health.min.css`
  - Local and Regional Authorities: `excelsior-theme-local.min.css`
  - Public Safety: `excelsior-theme-safety.min.css`
  - Transportation and Utilities: `excelsior-theme-transportation.min.css`


{% endblock %}
