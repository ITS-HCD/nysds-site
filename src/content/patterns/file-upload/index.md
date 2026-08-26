---
permalink: /patterns/file-upload/
title: "File Upload and Verification"
description: "A comprehensive guide and interactive simulator demonstrating accessible document upload queues built with NYSDS components, complying with WCAG 2.2 AA standards."
---

{% block content %}

# File Upload and Verification

Many New York State digital services require residents to submit documents—such as proof of identity, tax statements, utility bills, or business certifications—to verify their eligibility. The **File Upload and Verification** pattern guides developers on structuring clear, accessible file upload queues with reactive progress trackers, error feedback loops, and robust keyboard navigation.

This pattern demonstrates how to compose the `<nys-fileinput>` component, status badges (`<nys-badge>`), and action buttons (`<nys-button>`) into a cohesive, highly accessible file upload list.

---

## Interactive Demo

The following simulator demonstrates an **Identity Verification** upload workflow. Select files using the input (try uploading standard documents, files exceeding 5MB, or invalid file types) to see how the dynamic queue handles progress and validation:

{% set preview %}
<div class="upload-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <!-- Upload Header and Input -->
  <div style="margin-bottom: var(--nys-space-400);">
    <h3 style="margin: 0 0 var(--nys-space-100) 0; font-size: 1.3rem; font-weight: bold; color: var(--nys-color-text);">
      Submit Required Documents
    </h3>
    <p style="margin: 0 0 var(--nys-space-300) 0; font-size: 0.95rem; color: var(--nys-color-text-weak); line-height: 1.5;">
      Please upload one proof of identity (e.g. Driver's License) and one proof of residency (e.g. Utility Bill). Accepted formats: PDF, JPEG, or PNG. Maximum file size: 5MB.
    </p>

    <nys-fileinput 
      id="demo-file-input" 
      label="Choose files to upload" 
      helpText="Drag & drop files or click to browse"
    ></nys-fileinput>
  </div>

  <!-- Dynamic Upload Queue Section -->
  <div>
    <h4 id="queue-heading" style="margin: 0 0 var(--nys-space-200) 0; font-size: 1.1rem; font-weight: bold; color: var(--nys-color-text); display: flex; justify-content: space-between; align-items: center;">
      <span>Uploaded Documents Queue</span>
      <span id="queue-count" style="font-size: 0.9rem; font-weight: normal; color: var(--nys-color-text-weak);">(0 files)</span>
    </h4>

    <!-- Empty State -->
    <div id="queue-empty-state" style="text-align: center; border: 2px dashed var(--nys-color-base); border-radius: 6px; padding: var(--nys-space-400); color: var(--nys-color-text-weak);">
      <p style="margin: 0; font-size: 0.95rem;">No files uploaded yet. Select files above to begin verification.</p>
    </div>

    <!-- Active Upload List Container -->
    <div id="queue-list" style="display: flex; flex-direction: column; gap: var(--nys-space-200); max-height: 350px; overflow-y: auto;">
      <!-- Upload cards injected dynamically -->
    </div>
  </div>

  <!-- Invisible Assertive Screen-Reader Announcer for WCAG AA compliance -->
  <div 
    id="upload-status-announcer" 
    role="status" 
    aria-live="assertive" 
    style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"
  ></div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("demo-file-input");
    const queueList = document.getElementById("queue-list");
    const queueEmptyState = document.getElementById("queue-empty-state");
    const queueCount = document.getElementById("queue-count");
    const announcer = document.getElementById("upload-status-announcer");

    let uploadedFiles = [];
    const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
    const ALLOWED_EXTENSIONS = ["pdf", "jpg", "jpeg", "png"];

    // Triggered when files are selected or dropped
    fileInput.addEventListener("nys-change", (e) => {
      const files = e.detail?.files || fileInput.files;
      if (!files || files.length === 0) return;

      Array.from(files).forEach(file => {
        const fileId = "file-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5);
        const fileName = file.name;
        const fileSizeStr = (file.size / (1024 * 1024)).toFixed(2) + " MB";

        // Validate File Constraints
        const fileExt = fileName.split(".").pop().toLowerCase();
        let uploadError = null;

        if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
          uploadError = "Invalid file type. Only PDF, JPEG, and PNG are allowed.";
        } else if (file.size > MAX_FILE_SIZE_BYTES) {
          uploadError = "File size exceeds 5MB limit.";
        }

        const newFileRecord = {
          id: fileId,
          name: fileName,
          size: fileSizeStr,
          progress: 0,
          status: uploadError ? "error" : "uploading",
          error: uploadError
        };

        uploadedFiles.push(newFileRecord);
        renderQueue();

        if (uploadError) {
          // WCAG Compliance: Announce validation errors assertively to screen readers
          announceStatus(`Error: File ${fileName} failed validation. ${uploadError}`);
        } else {
          // Simulate dynamic upload progress
          simulateUpload(fileId);
        }
      });

      // Reset the file input value so the same file can be uploaded again if deleted
      fileInput.value = "";
    });

    // Helper to vocalize changes to assistive technologies
    const announceStatus = (message) => {
      announcer.textContent = "";
      setTimeout(() => {
        announcer.textContent = message;
      }, 50);
    };

    // Simulate progress bar updating
    const simulateUpload = (id) => {
      const fileRecord = uploadedFiles.find(f => f.id === id);
      if (!fileRecord) return;

      announceStatus(`Uploading ${fileRecord.name}...`);

      const interval = setInterval(() => {
        const record = uploadedFiles.find(f => f.id === id);
        if (!record || record.status !== "uploading") {
          clearInterval(interval);
          return;
        }

        record.progress += 25;
        
        if (record.progress >= 100) {
          record.progress = 100;
          record.status = "success";
          clearInterval(interval);
          renderQueue();
          
          // WCAG Compliance: Announce complete status to screen readers
          announceStatus(`Upload complete: ${record.name} verified successfully.`);
        } else {
          renderQueue();
        }
      }, 600);
    };

    // Render visual queue list cards
    const renderQueue = () => {
      queueCount.textContent = `(${uploadedFiles.length} file${uploadedFiles.length === 1 ? '' : 's'})`;

      if (uploadedFiles.length === 0) {
        queueList.style.display = "none";
        queueEmptyState.style.display = "block";
        return;
      }

      queueList.style.display = "flex";
      queueEmptyState.style.display = "none";

      queueList.innerHTML = "";
      uploadedFiles.forEach(record => {
        // Construct queue item using visual cards and layout grids
        const card = document.createElement("div");
        card.className = "card card__no-border card__flat";
        card.style.border = `1px solid ${record.status === 'error' ? 'var(--nys-color-danger)' : 'var(--nys-color-base)'}`;
        card.style.borderRadius = "4px";
        card.style.backgroundColor = "var(--nys-color-surface-raised)";
        card.style.padding = "var(--nys-space-200) var(--nys-space-300)";

        let statusBadge = "";
        let progressBar = "";
        
        if (record.status === "uploading") {
          statusBadge = '<nys-badge label="Uploading" intent="info" size="sm"></nys-badge>';
          progressBar = `
            <div style="width: 100%; height: 6px; background-color: var(--nys-color-base-weak); border-radius: 3px; overflow: hidden; margin-top: var(--nys-space-150);">
              <div style="width: ${record.progress}%; height: 100%; background-color: var(--nys-color-info); transition: width 0.3s ease;"></div>
            </div>
          `;
        } else if (record.status === "success") {
          statusBadge = '<nys-badge label="Verified" intent="success" size="sm" prefixIcon="star"></nys-badge>';
        } else {
          statusBadge = '<nys-badge label="Error" intent="danger" size="sm"></nys-badge>';
        }

        card.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: var(--nys-space-100);">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: var(--nys-space-200);">
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-weight: bold; font-size: 0.95rem; word-break: break-all; color: var(--nys-color-text);">${record.name}</span>
                <span style="font-size: 0.85rem; color: var(--nys-color-text-weak);">${record.size}</span>
              </div>
              <div style="display: flex; align-items: center; gap: var(--nys-space-250);">
                ${statusBadge}
                <nys-button 
                  label="Remove" 
                  variant="secondary" 
                  size="sm" 
                  id="btn-remove-${record.id}"
                  aria-label="Remove ${record.name} from upload queue"
                ></nys-button>
              </div>
            </div>
            ${record.error ? `<div style="font-size: 0.85rem; font-weight: bold; color: var(--nys-color-danger); margin-top: 4px;">${record.error}</div>` : ""}
            ${progressBar}
          </div>
        `;

        queueList.appendChild(card);

        // Bind delete trigger
        document.getElementById(`btn-remove-${record.id}`).addEventListener("click", () => {
          uploadedFiles = uploadedFiles.filter(f => f.id !== record.id);
          renderQueue();
          announceStatus(`Removed file ${record.name} from queue.`);
          
          // WCAG Focus Management: Shift focus to queue header when a record is deleted
          document.getElementById("queue-heading").focus();
        });
      });
    };

    // Initial render
    renderQueue();
  });
</script>
{% endset %}

{% set accordionLabel = "Upload Queue Markup and Simulation Script" %}
{% set code %}
<!-- HTML Component Form Structure -->
<div style="margin-bottom: var(--nys-space-400);">
  <h3 style="margin-bottom: 8px;">Submit Required Documents</h3>
  <p>Accepted formats: PDF, JPEG, PNG. Maximum size: 5MB.</p>

  <nys-fileinput 
    id="demo-file-input" 
    label="Choose files to upload" 
    helpText="Drag & drop files or click to browse"
  ></nys-fileinput>
</div>

<div>
  <h4 id="queue-heading" tabindex="-1">Uploaded Documents Queue <span id="queue-count">(0 files)</span></h4>
  
  <div id="queue-empty-state">
    <p>No files uploaded yet.</p>
  </div>

  <div id="queue-list" style="display: flex; flex-direction: column; gap: var(--nys-space-200);">
    <!-- Injected dynamically in Javascript -->
  </div>
</div>

<!-- Accessible Vocalization Region -->
<div id="upload-status-announcer" role="status" aria-live="assertive" class="sr-only"></div>

<script>
  // JavaScript Event Wiring:
  const fileInput = document.getElementById("demo-file-input");
  const queueList = document.getElementById("queue-list");
  const announcer = document.getElementById("upload-status-announcer");
  let uploadedFiles = [];

  // Listen to file selection
  fileInput.addEventListener("nys-change", (e) => {
    const files = e.detail?.files || fileInput.files;
    Array.from(files).forEach(file => {
      // Validate format and size
      if (file.size > 5 * 1024 * 1024) {
        // WCAG REQUIREMENT: Assertively vocalize constraints failure immediately
        announceStatus(`Error: File ${file.name} exceeds 5MB limit.`);
        return;
      }
      
      // Add record to DOM list and animate progress indicator
      addFileToQueue(file);
    });
  });

  function announceStatus(message) {
    announcer.textContent = "";
    setTimeout(() => { announcer.textContent = message; }, 50);
  }

  function removeFile(fileId, fileName) {
    uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
    renderQueue();
    announceStatus(`Removed file ${fileName} from queue.`);
    
    // ACCESSIBILITY: Shift programmatic focus to keep keyboard navigation context intact
    document.getElementById("queue-heading").focus();
  }
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing File Upload Queues

When designing file submission queues in New York State services, incorporate these visual patterns:

1. **Clear Boundaries**: Utilize high-contrast dashed border frames around drag-and-drop targets so users easily locate the input interaction zone.
2. **Real-Time Badging**: Consistently tag records with colored badges:
   * Use **Blue Badges** for files actively processing or uploading.
   * Use **Green Badges** for fully uploaded and validated files.
   * Use **Red Badges** for error states (e.g. invalid formats, large files).
3. **Queue Empty States**: Show explicit placeholder cards when the file queue is empty to confirm that no submissions have been staged.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Assertive Screen-Reader Alerts (`aria-live="assertive"`)
* When files are processing or fail constraints, assistive technologies must be notified immediately.
* Use an invisible utility `div` equipped with `role="status"` and `aria-live="assertive"`.
* When an upload is triggered, completed, or triggers size validations, update this text content in JavaScript.
* Assistive screen readers will interrupt active speech to announce the changes immediately (e.g., *"Error: Scan.pdf exceeds 5MB limit"*), ensuring sight-impaired users are kept fully informed of asynchronous failures.

### 2. Focus Management on Item Removal
* When a user removes a file from the upload queue (by clicking the "Remove" trigger), the card element is deleted from the page DOM.
* If keyboard focus was sitting on the clicked button, the focus becomes lost (stranding keyboard and screen reader users at the top of the body viewport).
* To prevent this, assign `tabindex="-1"` and `outline: none;` to the queue's heading (`<h4>`).
* Inside the item removal event handler, immediately call `.focus()` on the heading to restore visual structure and keep keyboard users in the correct visual flow.

### 3. Screen-Reader Labels (`aria-label`)
* A standard "Remove" button provides insufficient details when multiple files exist in a queue list.
* Attach unique, descriptive `aria-label` attributes to each delete button (e.g., `aria-label="Remove Proof-of-Residency.pdf from upload queue"`), giving sight-impaired keyboard users full context on what specific item is being targeted.

{% endblock %}
