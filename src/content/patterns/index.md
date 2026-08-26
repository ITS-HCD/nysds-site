---
permalink: /patterns/
title: "Patterns"
description: "Common user-experience flows and design patterns built with New York State Design System components, designed to meet strict WCAG 2.2 AA standards."
navOrder: 1
---

{% block content %}

# Design Patterns

Design patterns are proven, user-centered solutions for common digital interactions across New York State websites and services. Unlike individual web components (like buttons or text inputs), patterns combine multiple components, design tokens, and layout guidelines into standard workflows (such as filling out a multi-step application, searching directories, or validating forms).

By using standard NYSDS patterns, state agencies ensure:
* **Predictability**: Residents encounter familiar digital patterns regardless of which agency service they are using.
* **Built-in Accessibility**: Every pattern is designed and pre-tested to meet strict **WCAG 2.2 AA** requirements, including keyboard operability and focus management.
* **Speed of Delivery**: Developers and designers can leverage pre-packaged user flows instead of designing complex application states from scratch.

---

## Available Patterns

Explore our patterns to see how they are structured, styled, and built:

<div class="nys-grid-row nys-grid-gap-300">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/patterns/multi-step-form/">
      <div class="card__inner" style="border: 1px solid var(--nys-color-base); padding: var(--nys-space-300); border-radius: 4px; display: block; height: 100%;">
        <div class="card__title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: var(--nys-space-100); color: var(--nys-color-link);">Multi-Step Form (Stepper)</div>
        <div class="card__desc" style="color: var(--nys-color-text); line-height: 1.5;">
          Guide users through complex processes—such as license renewals, benefit applications, and multi-page questionnaires—using stepper controls with dynamic validation and full accessibility focus management.
        </div>
      </div>
    </a>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6">
    <a class="card card__no-border card__flat nys-flex-fill" href="/patterns/search-and-filter/">
      <div class="card__inner" style="border: 1px solid var(--nys-color-base); padding: var(--nys-space-300); border-radius: 4px; display: block; height: 100%;">
        <div class="card__title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: var(--nys-space-100); color: var(--nys-color-link);">Search & Filter Directory</div>
        <div class="card__desc" style="color: var(--nys-color-text); line-height: 1.5;">
          Help users locate and browse lists of facilities, documents, services, or offices with responsive inputs, region filters, real-time result count alerts, and fully accessible pagination.
        </div>
      </div>
    </a>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300" style="margin-top: var(--nys-space-300);"><div class="nys-grid-col-12 nys-tablet:nys-grid-col-6"><a class="card card__no-border card__flat nys-flex-fill" href="/patterns/file-upload/"><div class="card__inner" style="border: 1px solid var(--nys-color-base); padding: var(--nys-space-300); border-radius: 4px; display: block; height: 100%;"><div class="card__title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: var(--nys-space-100); color: var(--nys-color-link);">File Upload & Verification</div><div class="card__desc" style="color: var(--nys-color-text); line-height: 1.5;">Design clear, accessible file upload queues with reactive progress bars, file-type constraints, real-time status badges, and live screen-reader upload alerts.</div></div></a></div><div class="nys-grid-col-12 nys-tablet:nys-grid-col-6"><a class="card card__no-border card__flat nys-flex-fill" href="/patterns/address-validation/"><div class="card__inner" style="border: 1px solid var(--nys-color-base); padding: var(--nys-space-300); border-radius: 4px; display: block; height: 100%;"><div class="card__title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: var(--nys-space-100); color: var(--nys-color-link);">Address Lookup & Validation</div><div class="card__desc" style="color: var(--nys-color-text); line-height: 1.5;">Lay out standard address forms and present interactive USPS standardized suggested matches alongside user entries with accessible focus management.</div></div></a></div></div>

{% endblock %}
