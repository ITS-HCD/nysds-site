---
permalink: /getting-started/developers/
title: "Developers"
description: "Integrate the New York State Design System into your project with web components, design tokens, and styles. Learn how to install, customize, and use it in Angular, .NET, React, and more."
section: Getting Started
---

# Developers

## Install the libraries

To start using NYSDS in your project, you need to install the core libraries:

<div class="code-preview-container">
  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_down" size="xl"></nys-icon>
        <p>CLI Command</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy</div>
    </div>
    <div class="code-preview__code-container open">
      <div class="code-preview__code-block">
{% highlight "html" %}
npm install @nysds/components @nysds/styles
{% endhighlight %}
        </div>
    </div>
  </div>
</div>

## Reference the files in your application
Once the packages are installed, you need to reference the required files in your HTML or app's entry point:

<div class="code-preview-container">
  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_down" size="xl"></nys-icon>
        <p>CLI Command</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy</div>
    </div>
    <div class="code-preview__code-container open">
      <div class="code-preview__code-block">
{% highlight "html" %}
<script type="module" src="[path-to-dir]/nysds.js"></script>
<link rel="stylesheet" href="[path-to-dir]/nysds-full.min.css" />
{% endhighlight %}
        </div>
    </div>
  </div>
</div>

## Copying Assets (Alternative Step)
If you prefer to store the assets within your project directory instead of referencing them from node_modules, run this command:

<div class="code-preview-container">
  <div class="code-preview__source">
    <div class="code-preview__buttons">
      <div class="code-preview__dropdown" onClick="showSourceCode(this)">
        <nys-icon class="code-preview__dropdown-icon" name="chevron_down" size="xl"></nys-icon>
        <p>CLI Command</p>
      </div>
      <nys-button class="copy-btn" prefixIcon="publish" label="Copy" variant="ghost" size="xl" onClick="copyCode(this)"></nys-button>
      <div class="copy-tooltip">Copy</div>
    </div>
    <div class="code-preview__code-container open">
      <div class="code-preview__code-block">
{% highlight "html" %}
mkdir -p src/assets/css/vendor && mkdir -p src/assets/js/vendor && cp -r node_modules/@nysds/components/dist/nysds.* src/assets/js/vendor && cp -r node_modules/@nysds/styles/dist/* src/assets/css/vendor
{% endhighlight %}
        </div>
    </div>
  </div>
</div>
This ensures that the required styles and scripts are available locally, but note that you will need to manually update them when new versions are released.

{% block scripts %}
{% endblock %}