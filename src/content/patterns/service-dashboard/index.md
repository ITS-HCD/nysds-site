---
permalink: /patterns/service-dashboard/
title: "Service Dashboard / Task Tracker"
description: "A comprehensive pattern guide and interactive dashboard demonstrating transaction tracking tables, badges, action-item alerts, and tab-panel filters complying with WCAG 2.2 AA standards."
---

{% block content %}

# Service Dashboard / Task Tracker

Digital portals serve as primary check-in points for residents tracking active benefit applications, scholarship awards, business licenses, or permit reviews. Presenting complex, multi-system statuses as a single, coherent dashboard reduces support center backlogs and empowers users with clear next steps.

This pattern demonstrates how to compose `<nys-table>`, badges (`<nys-badge>`), dismissible alerts (`<nys-alert>`), and button controls into an interactive **Benefits Task Tracker Dashboard**.

---

## Interactive Demo

The following interactive portal simulates a citizen's active **NYS benefits dashboard**. Use the filter buttons to query applications, or click **"Complete Action"** inside the alerts and task cards to clear outstanding requirements:

{% set preview %}
<div class="dashboard-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <!-- Portal Header Greeting -->
  <div style="border-bottom: 2px solid var(--nys-color-base); padding-bottom: var(--nys-space-200); margin-bottom: var(--nys-space-300); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--nys-space-150);">
    <div>
      <h3 style="margin: 0; font-size: 1.4rem; font-weight: bold; color: var(--nys-color-text);">
        Welcome back, Jane
      </h3>
      <span style="font-size: 0.85rem; color: var(--nys-color-text-weak);">NYS Citizen Portal &bull; Case ID: Case-48192-A</span>
    </div>
    <div id="dash-live-announcer" role="status" aria-live="polite" style="font-size: 0.9rem; font-weight: bold; color: var(--nys-color-theme); padding: var(--nys-space-50) var(--nys-space-150); background-color: var(--nys-color-theme-faint); border-radius: 20px;">
      All systems active
    </div>
  </div>

  <!-- Dynamic Global Action Alert Banner -->
  <nys-alert id="dash-action-alert" type="warning" title="ACTION REQUIRED: Missing Document" style="margin-bottom: var(--nys-space-300); display: block;">We require your W-2 Tax Form to complete your Tuition Assistance Program review. Upload this document today to prevent application delays.<div slot="actions" style="margin-top: var(--nys-space-100);"><nys-button id="btn-goto-task" label="Go To Task Checklist" variant="primary" size="sm"></nys-button></div></nys-alert>

  <div class="nys-grid-row nys-grid-gap-300">
    
    <!-- Left Column: Active Applications Table (8 Columns) -->
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-8">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--nys-space-200); flex-wrap: wrap; gap: var(--nys-space-150);">
        <h4 id="table-heading" tabindex="-1" style="margin: 0; font-size: 1.15rem; font-weight: bold; color: var(--nys-color-text); outline: none;">
          Your Active Applications
        </h4>
        
        <!-- Filter Tabs (Segmented Button list) -->
        <div style="display: flex; gap: var(--nys-space-50); background-color: var(--nys-color-base-weak); padding: 2px; border-radius: 4px;">
          <nys-button id="btn-filter-all" label="All" variant="primary" size="sm"></nys-button>
          <nys-button id="btn-filter-pending" label="Pending" variant="secondary" size="sm"></nys-button>
          <nys-button id="btn-filter-approved" label="Approved" variant="secondary" size="sm"></nys-button>
        </div>
      </div>

      <!-- Semantic Status Application Table -->
      <nys-table striped id="dash-app-table" style="margin-bottom: var(--nys-space-300);">
        <table>
          <thead>
            <tr>
              <th scope="col" style="text-align: left; padding: var(--nys-space-150);">Application Program</th>
              <th scope="col" style="text-align: left; padding: var(--nys-space-150);">Status</th>
              <th scope="col" style="text-align: left; padding: var(--nys-space-150);">Last Updated</th>
            </tr>
          </thead>
          <tbody id="table-body-target">
            <!-- Table rows dynamically injected -->
          </tbody>
        </table>
      </nys-table>
    </div>

    <!-- Right Column: Outstanding Checklist Tasks (4 Columns) -->
    <div class="nys-grid-col-12 nys-desktop:nys-grid-col-4">
      <h4 id="checklist-heading" tabindex="-1" style="margin: 0 0 var(--nys-space-200) 0; font-size: 1.15rem; font-weight: bold; color: var(--nys-color-text); outline: none;">
        Your Tasks Checklist
      </h4>

      <div id="checklist-container" style="display: flex; flex-direction: column; gap: var(--nys-space-200);">
        <!-- Interactive Task Card 1 -->
        <div id="task-card-w2" class="card card__no-border card__flat" style="border: 1px solid var(--nys-color-danger); border-radius: 4px; background-color: var(--nys-color-surface-raised); padding: var(--nys-space-200) var(--nys-space-300);">
          <div style="display: flex; flex-direction: column; gap: var(--nys-space-100);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: bold; font-size: 0.9rem; color: var(--nys-color-text);">Upload 2025 W-2 Form</span>
              <nys-badge label="Required" intent="danger" size="sm"></nys-badge>
            </div>
            <p style="font-size: 0.85rem; color: var(--nys-color-text-weak); margin: 0 0 var(--nys-space-150) 0;">Tuition Assistance Program (TAP)</p>
            <nys-button id="btn-complete-w2" label="Complete Upload" variant="primary" size="sm"></nys-button>
          </div>
        </div>

        <!-- Interactive Task Card 2 -->
        <div id="task-card-survey" class="card card__no-border card__flat" style="border: 1px solid var(--nys-color-base); border-radius: 4px; background-color: var(--nys-color-surface-raised); padding: var(--nys-space-200) var(--nys-space-300);">
          <div style="display: flex; flex-direction: column; gap: var(--nys-space-100);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: bold; font-size: 0.9rem; color: var(--nys-color-text);">Provide Phone Feedback</span>
              <nys-badge label="Optional" intent="neutral" size="sm"></nys-badge>
            </div>
            <p style="font-size: 0.85rem; color: var(--nys-color-text-weak); margin: 0 0 var(--nys-space-150) 0;">SNAP Intake Interview Survey</p>
            <nys-button id="btn-complete-survey" label="Complete Survey" variant="secondary" size="sm"></nys-button>
          </div>
        </div>

        <!-- Tasks Completed Empty State -->
        <div id="tasks-complete-empty" style="display: none; text-align: center; border: 2px dashed var(--nys-color-base); border-radius: 6px; padding: var(--nys-space-400); color: var(--nys-color-text-weak);">
          <nys-icon name="check" size="lg" style="color: var(--nys-color-success); margin-bottom: var(--nys-space-100);"></nys-icon>
          <p style="margin: 0; font-size: 0.95rem; font-weight: bold; color: var(--nys-color-text);">All tasks complete!</p>
          <p style="margin: 0; font-size: 0.85rem; margin-top: 4px;">There are no outstanding actions at this time.</p>
        </div>
      </div>
    </div>

  </div>
</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Array Database
    const appsData = [
      { name: "SNAP Benefits (Food Assistance)", status: "pending", badgeLabel: "Under Review", badgeIntent: "neutral", date: "Aug 24, 2026" },
      { name: "Excelsior Scholarship Program", status: "pending", badgeLabel: "Action Required", badgeIntent: "danger", date: "Sep 01, 2026" },
      { name: "Home Energy Assistance (HEAP)", status: "approved", badgeLabel: "Approved", badgeIntent: "success", date: "Aug 15, 2026" }
    ];

    let currentFilter = "all";

    // Elements
    const tableBody = document.getElementById("table-body-target");
    const liveAnnouncer = document.getElementById("dash-live-announcer");
    const actionAlert = document.getElementById("dash-action-alert");
    const emptyTasksState = document.getElementById("tasks-complete-empty");

    // Task cards
    const taskW2 = document.getElementById("task-card-w2");
    const taskSurvey = document.getElementById("task-card-survey");

    // Buttons
    const btnAll = document.getElementById("btn-filter-all");
    const btnPending = document.getElementById("btn-filter-pending");
    const btnApproved = document.getElementById("btn-filter-approved");
    
    const btnGotoTask = document.getElementById("btn-goto-task");
    const btnCompleteW2 = document.getElementById("btn-complete-w2");
    const btnCompleteSurvey = document.getElementById("btn-complete-survey");

    // Render applications table
    const renderTable = () => {
      tableBody.innerHTML = "";

      const filtered = appsData.filter(app => {
        if (currentFilter === "all") return true;
        return app.status === currentFilter;
      });

      if (filtered.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="3" style="text-align: center; padding: var(--nys-space-400); color: var(--nys-color-text-weak); font-style: italic;">
              No applications in this category.
            </td>
          </tr>
        `;
        return;
      }

      filtered.forEach(app => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td style="padding: var(--nys-space-150); border-bottom: 1px solid var(--nys-color-base); font-weight: bold; color: var(--nys-color-text);">${app.name}</td>
          <td style="padding: var(--nys-space-150); border-bottom: 1px solid var(--nys-color-base);"><nys-badge label="${app.badgeLabel}" intent="${app.badgeIntent}"></nys-badge></td>
          <td style="padding: var(--nys-space-150); border-bottom: 1px solid var(--nys-color-base); color: var(--nys-color-text-weak); font-size: 0.9rem;">${app.date}</td>
        `;
        tableBody.appendChild(row);
      });
    };

    // Filter Trigger callbacks
    const setFilter = (filter, activeBtn, otherBtns) => {
      currentFilter = filter;
      renderTable();

      activeBtn.setAttribute("variant", "primary");
      otherBtns.forEach(btn => btn.setAttribute("variant", "secondary"));

      // WCAG Compliance: announce filtered state politely to screen readers
      liveAnnouncer.textContent = `Viewing: ${filter} applications`;
    };

    btnAll.addEventListener("click", () => setFilter("all", btnAll, [btnPending, btnApproved]));
    btnPending.addEventListener("click", () => setFilter("pending", btnPending, [btnAll, btnApproved]));
    btnApproved.addEventListener("click", () => setFilter("approved", btnApproved, [btnAll, btnPending]));

    // Navigation and Action triggers
    btnGotoTask.addEventListener("click", () => {
      // WCAG Focus Management: Shift focus to Checklist block heading
      const checklistHeading = document.getElementById("checklist-heading");
      checklistHeading.focus();
      liveAnnouncer.textContent = "Viewport focus aligned to Task Checklist.";
    });

    // Complete Tax Upload action
    btnCompleteW2.addEventListener("click", () => {
      taskW2.style.opacity = "0";
      setTimeout(() => {
        taskW2.style.display = "none";
        actionAlert.style.display = "none"; // Hide matching warning alert

        // Update scholarship state in table
        const excAward = appsData.find(a => a.name.includes("Excelsior"));
        if (excAward) {
          excAward.status = "pending";
          excAward.badgeLabel = "Under Review";
          excAward.badgeIntent = "neutral";
          excAward.date = "Today";
        }
        renderTable();

        checkChecklistEmpty();
        liveAnnouncer.textContent = "W-2 document uploaded. Scholarship status updated.";
      }, 300);
    });

    // Complete optional survey action
    btnCompleteSurvey.addEventListener("click", () => {
      taskSurvey.style.opacity = "0";
      setTimeout(() => {
        taskSurvey.style.display = "none";
        checkChecklistEmpty();
        liveAnnouncer.textContent = "Feedback survey complete. Thank you.";
      }, 300);
    });

    const checkChecklistEmpty = () => {
      const w2Visible = taskW2.style.display !== "none";
      const surveyVisible = taskSurvey.style.display !== "none";

      if (!w2Visible && !surveyVisible) {
        emptyTasksState.style.display = "block";
        // WCAG Focus Restoration: focus checklist header on empty list transition
        document.getElementById("checklist-heading").focus();
      }
    };

    // Initial render
    renderTable();
  });
</script>
{% endset %}

{% set accordionLabel = "Dashboard Code Structure" %}
{% set code %}
<!-- HTML Dashboard Layout -->
<nys-alert id="dash-action-alert" type="warning" title="ACTION REQUIRED: Missing Document">We require your W-2 Tax Form to complete your Tuition Assistance. <div slot="actions"><nys-button id="btn-goto-task" label="Go To Tasks" variant="primary" size="sm"></nys-button></div></nys-alert>

<div class="nys-grid-row nys-grid-gap-300">
  
  <div class="nys-grid-col-12 nys-desktop:nys-grid-col-8">
    <div class="table-header-row">
      <h4 id="table-heading" tabindex="-1">Your Active Applications</h4>
      <div class="filter-tab-buttons">
        <nys-button id="btn-filter-all" label="All" variant="primary" size="sm"></nys-button>
        <nys-button id="btn-filter-pending" label="Pending" variant="secondary" size="sm"></nys-button>
        <nys-button id="btn-filter-approved" label="Approved" variant="secondary" size="sm"></nys-button>
      </div>
    </div>

    <nys-table striped id="dash-app-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Application Program</th>
            <th scope="col">Status</th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody id="table-body-target">
          <!-- Injected dynamically in Javascript -->
        </tbody>
      </table>
    </nys-table>
  </div>

  <div class="nys-grid-col-12 nys-desktop:nys-grid-col-4">
    <h4 id="checklist-heading" tabindex="-1">Your Tasks Checklist</h4>
    <div id="checklist-container">
      <div id="task-card-w2" class="card card__no-border card__flat">
        <span class="card__title">Upload 2025 W-2 Form</span>
        <nys-button id="btn-complete-w2" label="Complete Upload" variant="primary" size="sm"></nys-button>
      </div>
    </div>
  </div>

</div>

<!-- Accessible Status Counter Announcer -->
<div id="dash-live-announcer" role="status" aria-live="polite" class="sr-only">All systems active</div>

<script>
  // JavaScript Event Filter & Focus Wiring:
  const btnPending = document.getElementById("btn-filter-pending");
  const tableHeading = document.getElementById("table-heading");
  const liveAnnouncer = document.getElementById("dash-live-announcer");

  btnPending.addEventListener("click", () => {
    filterTableRecords("pending");
    
    // WCAG COMPLIANCE: Announce filtered table records update politely
    liveAnnouncer.textContent = "Viewing: Pending applications loaded.";
  });

  // Action Button Focus Management:
  const btnGotoTask = document.getElementById("btn-goto-task");
  btnGotoTask.addEventListener("click", () => {
    // Shifting programmatic focus back onto outstanding requirements
    document.getElementById("checklist-heading").focus();
  });
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Service Dashboards

Service portals serve as home bases for citizens returning to check statuses. Apply these standard visual conventions:

1. **Clear Semantic Tables**: Display active applications inside `<nys-table>`. Keep headers (`th`) configured with correct `scope` attributes (`col` or `row`) so screen readers easily pair cells with labels.
2. **Distinct Actionable Warnings**: Render high-priority outstanding items as alert cards (`<nys-alert>`) styled with bold contrasting colors (e.g., yellow or red). Provide direct buttons (e.g. *"Go To Task Checklist"*) that transition focus straight to the action widget.
3. **Structured Badges**: Standardize badge intents across agency portals:
   * **Approved**: Green Success Badge (`intent="success"`).
   * **Under Review**: Grey/Blue Neutral Badge (`intent="neutral"` or `"info"`).
   * **Action Required**: Red Danger Badge (`intent="danger"`).

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Table Semantics (WCAG SC 1.3.1)
* Ensure all data grids are wrapped in standard HTML `<table>` tags nested inside `<nys-table>`.
* Set accurate table headers using `<th>` with a `scope="col"` attribute for column labels, and `scope="row"` for row labels.
* This allows screen readers to natively link data cells as blind keyboard users browse table columns, preventing confusing read-outs.

### 2. Tab-Panel Filter Alerts (`aria-live="polite"`)
* When residents toggle dashboard categories (such as clicking *"Pending"* or *"Approved"*), table records swap dynamically in the DOM.
* Assign `role="status"` and `aria-live="polite"` to a status announcer indicator on the dashboard.
* Update this indicator's text dynamically in JavaScript (e.g., *"Viewing: Pending applications loaded"*).
* This provides a silent status alert, notifying sight-impaired users of the updated category context without interrupting their text cursor.

### 3. Progressive Focus Navigation
* When an action trigger is clicked (e.g., clicking *"Go To Task Checklist"* in the warning alert, or clicking *"Complete"* which deletes a checklist card):
  * Apply `tabindex="-1"` and `outline: none;` to the target heading (`<h4>` or `<h3>`).
  * Programmatically trigger `.focus()` on that heading.
  * This shifts the keyboard selection and screen reader cursor to the exact task details, keeping keyboard users in a coherent navigation sequence.

{% endblock %}
