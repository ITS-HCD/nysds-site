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
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Multi-Step Form (Stepper)"
      description="Guide users through complex processes—such as license renewals, benefit applications, and multi-page questionnaires—using stepper controls with dynamic validation and full accessibility focus management."
      href="/patterns/multi-step-form/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Search & Filter Directory"
      description="Help users locate and browse lists of facilities, documents, services, or offices with responsive inputs, region filters, real-time result count alerts, and fully accessible pagination."
      href="/patterns/search-and-filter/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300" style="margin-top: var(--nys-space-300);">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="File Upload & Verification"
      description="Design clear, accessible file upload queues with reactive progress bars, file-type constraints, real-time status badges, and live screen-reader upload alerts."
      href="/patterns/file-upload/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Address Lookup & Validation"
      description="Lay out standard address forms and present interactive USPS standardized suggested matches alongside user entries with accessible focus management."
      href="/patterns/address-validation/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300" style="margin-top: var(--nys-space-300);">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Emergency Alert System"
      description="Deploy dismissible persistent header banners with weather, outage, or critical notices, featuring session storage states and robust aria-live vocalizations."
      href="/patterns/emergency-alerts/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Customer Feedback & Rating"
      description="Build page-level feedback and CSAT rating widgets, utilizing progressive disclosures, character limits, and accessible screen-reader count status regions."
      href="/patterns/feedback-rating/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
</div>

<div class="nys-grid-row nys-grid-gap-300" style="margin-top: var(--nys-space-300);">
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Service Dashboard / Task Tracker"
      description="Present transactional application statuses, progress lists, and document upload action alerts in a responsive portal panel."
      href="/patterns/service-dashboard/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
  <div class="nys-grid-col-12 nys-tablet:nys-grid-col-6 nys-display-flex">
    <nys-card
      class="nys-flex-fill"
      heading="Booking & Scheduling Calendar"
      description="Coordinate office locators, date selectors, and keyboard-operable time slots to build accessible appointment schedulers."
      href="/patterns/booking-calendar/"
      style="--nys-card-height: 100%;"
    ></nys-card>
  </div>
</div>

{% endblock %}
