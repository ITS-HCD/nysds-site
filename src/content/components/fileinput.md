---
permalink: /components/fileinput/
title: File Input
description: Used for selecting and uploading one or more files from the user’s device.
image: /assets/img/components/fileinput.svg
image_alt: An illustration of a file input.
image_header: /assets/img/components/fileinput-header.svg
stable: true
figma_link: https://www.figma.com/design/U2QpuSUXRTxbgG64Fzi9bu?node-id=4739-1812
navOrder: 10
---

{% extends "layouts/component.njk" %}

{% block longdescription %}

The `<nys-fileinput>` component is a reusable web component that allows users to select and upload one or more files from their device (like a computer or phone) to a server or app.

{% endblock %}

{% block example %}
{% set preview %}
<nys-fileinput
  id="fileinput1"
  name="fileinput1"
  label="Upload a file"
  description="Accepted file types: .jpg, .png, .pdf"
  accept="image/png, image/jpeg, .pdf"
></nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% set showTip = true %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block usage %}

### When to use this component

- When you need to upload a file as part of a form.
- When you want to support drag-and-drop file uploads.

### When to consider something else

- When uploading large files requiring resumable upload logic.
- When selecting only from camera input or other device-native features.
{% endblock %}

{% block usagedo %}

  - Use when a file is required in a form.
  - Use when multiple file selection is needed.
{% endblock %}

{% block usagedont %}

  - Don't use when uploading sensitive data without encryption
  - Don't use `<nys-fileinput>` when it is not necessary for the task.
{% endblock %}

{% block accessibility %}

The `<nys-fileinput>` component includes the following accessibility-focused features:

  - Uses `ElementInternals` for form association and validation.
  - Keyboard navigable with `Tab` key
  - Implements ARIA attributes for required and invalid states.

{% endblock %}

{% block options %}

The `accept` attribute sets the allowed file types using MIME types or file extensions (i.e. image/png, .pdf).

**IMPORTANT:** This component relies on the file extension or MIME type provided by the browser to determine if a file is acceptable. If a file does not match the allowed types, it will still appear in the list with an error message for the user, but it will be excluded from form submission.

### Dropzone
Use the `dropzone` attribute to allow users to drag and drop files instead of (or in addition to) clicking the "Choose file" button.

{% set preview %}
<nys-fileinput
  label="Upload a file"
  description="Accepted file types: .jpg, .png, .pdf"
  accept="image/png, image/jpeg, .pdf"
  dropzone
></nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Width
Available width values are: `full` (default) and `lg`

{% set preview %}
<nys-fileinput
  id="fileinput1"
  name="fileinput1"
  label="Upload a file"
  description="Accepted file types: .jpg, .png, .pdf"
  accept="image/png, image/jpeg, .pdf"
></nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Multiple files
Set `multiple` to `true` to allow the selection of more than one file. Each selected file will display its own item in the list with progress and validation feedback.

{% set preview %}
<nys-fileinput
  id="fileinput1"
  name="fileinput1"
  label="Upload a file"
  description="Accepted file types: .jpg, .png, .pdf"
  accept="image/png, image/jpeg, .pdf"
  multiple
></nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Disabled
Set `disabled` to prevent interaction with the file input. Useful when the input should not be used under certain form conditions.

{% set preview %}
<nys-fileinput
  id="fileinput1"
  name="fileinput1"
  label="Upload a file"
  description="Accepted file types: .jpg, .png, .pdf"
  accept="image/png, image/jpeg, .pdf"
  disabled
></nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

### Description Slot
You can supply a description via our `description` prop for plain text or by embedding HTML within our component via our slot for higher customization.

{% set preview %}
<nys-fileinput
  id="fileinput-slot"
  name="fileinput-slot"
  label="Upload a file"
  width="full"
>
  <span slot="description">
    Learn more at
    <a href="https://www.ny.gov" target="_blank" rel="noopener">ny.gov</a>
  </span>
</nys-fileinput>
{% endset %}
{% set backgroundSolid = true %}
{% set code = preview %}
{% include "partials/code-preview.njk" %}

{% endblock %}

{% block properties %}

<nys-table striped>
  <table>
    <tr>
      <th>Property</th>
      <th>Type</th>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td><code>"full"</code> , <code>"lg"</code></td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>accept</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>errorMessage</code></td>
      <td>String</td>
    </tr>
    <tr>
      <td><code>showError</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>dropzone</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>optional</code></td>
      <td>Boolean</td>
    </tr>
    <tr>
      <td><code>form</code></td>
      <td>String , <code>null</code></td>
    </tr>
  </table>
</nys-table>

{% endblock %}

{% block cssvariables %}{% include "partials/css-vars.njk" %}{% endblock %}


{% block events %}

The `<nys-fileinput>` component emits **one** custom Javascript events:

1.  **`nys-change`** – Fired when the file list is updated, either by selecting new files or removing existing ones.

### Event details
The `nys-change` event includes a detail object with the following properties:

- id (string): The id of the file input.
- files (Array of file entries): A list of files with status and progress information.
  - file (File): The raw File object.
  - progress (number): Upload or processing progress (0–100).
  - status ("pending" | "processing" | "done" | "error"): Current state of the file.
  - errorMsg (string): Optional error message if status is "error".

You can listen to these events using JavaScript:
{% set code %}// Select the button component
const fileinput = document.querySelector('nys-fileinput');
// Listen for the 'nys-change' event
fileinput.addEventListener("nys-change", () => {
  console.log("Files have changed:", event.detail.files);
  // Getting more specific details about each file(s)
  const { id, files } = event.detail;
  console.log(`Fileinput (${id}) changed:`);
    files.forEach(({ file, progress, status, errorMsg }) => {
      console.log(`- ${file.name} (${status}, ${progress}%)`, errorMsg || "");
  });
});{% endset %}
{% set accordionLabel = "Sample Code" %}
{% set codeExpanded = true %}
{% set codeLanguage = "js" %}
{% include "partials/code-preview.njk" %}
{% endblock %}

{% block updates %}{% endblock %}
