---
permalink: /patterns/search-and-filter/
title: "Search and Filter Directory"
description: "A comprehensive design pattern and interactive locator directory built with NYSDS form elements, cards, and pagination, complying with WCAG 2.2 AA standards."
---

{% block content %}

# Search and Filter Directory

A **Search and Filter Directory** pattern helps users query, filter, and browse structured lists of offices, parks, forms, or public services. By placing simple inputs alongside categorized filters and clear search alerts, agency sites make hundreds of records easily digestible and searchable for the public.

This pattern showcases how to combine `<nys-textinput>`, `<nys-select>`, and `<nys-checkbox>` components to build a responsive locator experience, styled with native card guidelines and coordinated with `<nys-pagination>`.

---

## Interactive Demo

The following locator directory simulates a searchable archive of **New York State Parks**. Try searching for names (like *"Adirondack"* or *"Letchworth"*), filtering by region, or selecting amenities:

{% set preview %}
<style>
  #dir-input-search,
  #dir-select-region {
    display: block;
    width: 100%;
  }
</style>
<div class="directory-demo-container" style="border: 1px solid var(--nys-color-base); border-radius: 8px; background-color: var(--nys-color-surface); padding: var(--nys-space-400); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  
  <!-- Form Search Controls Grid -->
  <form id="directory-search-form" novalidate style="display: flex; flex-direction: column; gap: var(--nys-space-300); margin-bottom: var(--nys-space-400);">
    <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-7"><nys-textinput id="dir-input-search" label="Search Parks" placeholder="e.g. Letchworth, Niagara..."></nys-textinput></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-5"><nys-select id="dir-select-region" label="Region"><option value="all">All Regions</option><option value="Western NY">Western NY</option><option value="Finger Lakes">Finger Lakes</option><option value="Capital Region">Capital Region</option><option value="Long Island">Long Island</option></nys-select></div></div>

  <!-- Amenities Checkboxes -->
    <div style="background-color: var(--nys-color-base-weak); padding: var(--nys-space-200); border-radius: 4px; display: flex; flex-wrap: wrap; gap: var(--nys-space-300);">
      <span style="font-weight: bold; font-size: 0.95rem; margin-right: var(--nys-space-100); display: flex; align-items: center; color: var(--nys-color-text);">Amenities:</span>
      <nys-checkbox id="dir-chk-camping" label="Camping Available"></nys-checkbox>
      <nys-checkbox id="dir-chk-swimming" label="Swimming / Beach"></nys-checkbox>
    </div>
  </form>

  <!-- Live Dynamic Results Header and Counter -->
  <div style="border-bottom: 2px solid var(--nys-color-base); padding-bottom: var(--nys-space-150); margin-bottom: var(--nys-space-300); display: flex; justify-content: space-between; align-items: center;">
    <h3 id="results-heading" style="margin: 0; font-size: 1.25rem; font-weight: bold; color: var(--nys-color-text); outline: none;" tabindex="-1">
      State Park Directory
    </h3>
    <div 
      id="dir-results-counter" 
      role="status" 
      aria-live="polite" 
      style="font-size: 0.95rem; font-weight: 600; color: var(--nys-color-theme); padding: var(--nys-space-50) var(--nys-space-150); background-color: var(--nys-color-theme-faint); border-radius: 20px;"
    >
      Loading results...
    </div>
  </div>

  <!-- Dynamic Results Target Container -->
  <div id="dir-results-list" class="nys-grid-row nys-grid-gap-300" style="min-height: 280px; margin-bottom: var(--nys-space-400);">
    <!-- Injected dynamically -->
  </div>

  <!-- Accessible Pagination Navigation Pager -->
  <div style="display: flex; justify-content: center; border-top: 1px solid var(--nys-color-base); padding-top: var(--nys-space-300);">
    <nys-pagination id="dir-pagination" currentPage="1" totalPages="1"></nys-pagination>
  </div>

</div>
{% endset %}

{% set script %}
<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Mock database records
    const parksData = [
      { name: "Letchworth State Park", region: "Finger Lakes", desc: "Renowned as the 'Grand Canyon of the East,' featuring stunning waterfalls and scenic gorges.", camping: true, swimming: false },
      { name: "Niagara Falls State Park", region: "Western NY", desc: "The oldest state park in the USA, providing iconic close-up views of the massive Horseshoe and American Falls.", camping: false, swimming: false },
      { name: "Robert H. Treman", region: "Finger Lakes", desc: "A wild, rugged gorge park featuring 12 scenic waterfalls, including the massive 115-foot Lucifer Falls.", camping: true, swimming: true },
      { name: "Jones Beach State Park", region: "Long Island", desc: "Features a world-famous white sand beach along the Atlantic Ocean, with a historic boardwalk and swimming pools.", camping: false, swimming: true },
      { name: "Saratoga Spa State Park", region: "Capital Region", desc: "Famous for its classical mineral springs, historic bathhouses, golf courses, and beautiful running trails.", camping: false, swimming: true },
      { name: "Hither Hills State Park", region: "Long Island", desc: "Offers oceanfront camping in scenic dunes, wide sandy beaches, and exceptional hiking trails.", camping: true, swimming: true },
      { name: "Glimmerglass State Park", region: "Capital Region", desc: "Overlooks Otsego Lake, featuring cozy woodland camping and a wide sandy beach for lakeside swimming.", camping: true, swimming: true },
      { name: "Allegany State Park", region: "Western NY", desc: "New York's largest state park, offering deep forest wilderness, cabin rentals, lakes, and extensive hiking.", camping: true, swimming: true }
    ];

    let currentPage = 1;
    const itemsPerPage = 3;
    let filteredParks = [...parksData];

    // Elements
    const searchInput = document.getElementById("dir-input-search");
    const regionSelect = document.getElementById("dir-select-region");
    const chkCamping = document.getElementById("dir-chk-camping");
    const chkSwimming = document.getElementById("dir-chk-swimming");
    
    const resultsList = document.getElementById("dir-results-list");
    const resultsCounter = document.getElementById("dir-results-counter");
    const resultsHeading = document.getElementById("results-heading");
    const pagination = document.getElementById("dir-pagination");

    // Perform filter calculations
    const performFiltering = () => {
      const searchQuery = (searchInput.value || "").trim().toLowerCase();
      const selectedRegion = regionSelect.value;
      const mustCamp = chkCamping.checked;
      const mustSwim = chkSwimming.checked;

      filteredParks = parksData.filter(park => {
        const matchesSearch = park.name.toLowerCase().includes(searchQuery) || park.desc.toLowerCase().includes(searchQuery);
        const matchesRegion = selectedRegion === "all" || park.region === selectedRegion;
        const matchesCamping = !mustCamp || park.camping;
        const matchesSwimming = !mustSwim || park.swimming;

        return matchesSearch && matchesRegion && matchesCamping && matchesSwimming;
      });

      // Reset to page 1 on active filter changes
      currentPage = 1;
      renderDirectory();
    };

    // Render results cards and pagination components
    const renderDirectory = () => {
      const totalItems = filteredParks.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

      // Update pagination control attributes
      pagination.setAttribute("currentPage", currentPage.toString());
      pagination.setAttribute("totalPages", totalPages.toString());

      // Update counters
      resultsCounter.textContent = `${totalItems} Park${totalItems === 1 ? '' : 's'} Found`;

      // Slice active page records
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
      const activePageItems = filteredParks.slice(startIndex, endIndex);

      // Render items
      resultsList.innerHTML = "";
      if (activePageItems.length === 0) {
        resultsList.innerHTML = `
          <div class="nys-grid-col-12" style="text-align: center; padding: var(--nys-space-500); color: var(--nys-color-text-weak);">
            <nys-icon name="warning" size="xl" style="color: var(--nys-color-warning); margin-bottom: var(--nys-space-150);"></nys-icon>
            <p style="margin: 0; font-size: 1.1rem; font-weight: bold;">No State Parks match your filters.</p>
            <p style="margin: 0; font-size: 0.95rem; margin-top: 5px;">Try clearing search terms or selecting 'All Regions'.</p>
          </div>
        `;
        return;
      }

      activePageItems.forEach(park => {
        // Build cards utilizing visual CSS framework classes
        const cardCol = document.createElement("div");
        cardCol.className = "nys-grid-col-12 nys-desktop:nys-grid-col-4 nys-display-flex";
        
        cardCol.innerHTML = `
          <div class="card card__no-border card__flat nys-flex-fill" style="border: 1px solid var(--nys-color-base); border-radius: 4px; background-color: var(--nys-color-surface); width: 100%;">
            <div class="card__inner" style="padding: var(--nys-space-300); display: flex; flex-direction: column; height: 100%; justify-content: space-between;">
              <div>
                <div class="card__category" style="margin-bottom: var(--nys-space-100);">
                  <nys-badge label="${park.region}" intent="neutral" size="sm"></nys-badge>
                </div>
                <h4 class="card__title" style="font-size: 1.2rem; font-weight: bold; margin: 0 0 var(--nys-space-100) 0; color: var(--nys-color-text);">
                  ${park.name}
                </h4>
                <p class="card__desc" style="font-size: 0.95rem; line-height: 1.5; color: var(--nys-color-text-weak); margin: 0 0 var(--nys-space-200) 0;">
                  ${park.desc}
                </p>
              </div>
              <div style="display: flex; gap: var(--nys-space-100); flex-wrap: wrap; border-top: 1px dashed var(--nys-color-base); padding-top: var(--nys-space-150);">
                ${park.camping ? '<nys-badge label="Camping" intent="success" size="sm" prefixIcon="star"></nys-badge>' : ''}
                ${park.swimming ? '<nys-badge label="Beach/Pool" intent="info" size="sm" prefixIcon="star"></nys-badge>' : ''}
              </div>
            </div>
          </div>
        `;
        resultsList.appendChild(cardCol);
      });
    };

    // Event Wireup
    searchInput.addEventListener("nys-change", performFiltering);
    regionSelect.addEventListener("nys-change", performFiltering);
    chkCamping.addEventListener("nys-change", performFiltering);
    chkSwimming.addEventListener("nys-change", performFiltering);

    pagination.addEventListener("nys-change", (e) => {
      currentPage = e.detail.page;
      renderDirectory();
      
      // WCAG Compliance: restore keyboard focus to the results container header when paging is triggered
      resultsHeading.focus();
    });

    // Initial load
    performFiltering();
  });
</script>
{% endset %}

{% set accordionLabel = "Directory Markup and Controller Script" %}
{% set code %}
<!-- HTML Filter Controls and Results Markup -->
<style>
  #dir-input-search,
  #dir-select-region {
    display: block;
    width: 100%;
  }
</style>
<form id="directory-search-form" novalidate>
  <div class="nys-grid-row nys-grid-gap-200"><div class="nys-grid-col-12 nys-desktop:nys-grid-col-7"><nys-textinput id="dir-input-search" label="Search Parks" placeholder="Letchworth..."></nys-textinput></div><div class="nys-grid-col-12 nys-desktop:nys-grid-col-5"><nys-select id="dir-select-region" label="Region"><option value="all">All Regions</option><option value="Western NY">Western NY</option><option value="Finger Lakes">Finger Lakes</option></nys-select></div></div>

  <div class="checkbox-bar">
    <nys-checkbox id="dir-chk-camping" label="Camping Available"></nys-checkbox>
    <nys-checkbox id="dir-chk-swimming" label="Swimming / Beach"></nys-checkbox>
  </div>
</form>

<!-- Heading and Polite Alert Count Container -->
<div class="results-header">
  <h3 id="results-heading" tabindex="-1">State Park Directory</h3>
  <div id="dir-results-counter" role="status" aria-live="polite">Loading...</div>
</div>

<!-- Grid Cards Target Container -->
<div id="dir-results-list" class="nys-grid-row nys-grid-gap-300">
  <!-- Injected dynamically in Javascript -->
</div>

<!-- Accessible Pager -->
<nys-pagination id="dir-pagination" currentPage="1" totalPages="1"></nys-pagination>

<script>
  // Dynamic JavaScript wiring:
  const searchInput = document.getElementById("dir-input-search");
  const pagination = document.getElementById("dir-pagination");
  const resultsHeading = document.getElementById("results-heading");
  let currentPage = 1;

  // React to search filtering triggers
  searchInput.addEventListener("nys-change", () => {
    currentPage = 1;
    filterResults();
  });

  // React to page changes
  pagination.addEventListener("nys-change", (e) => {
    currentPage = e.detail.page;
    renderResults();
    
    // WCAG AA ACCESSIBILITY: Keep screen readers aligned when the page updates
    resultsHeading.focus();
  });
</script>
{% endset %}
{% set backgroundSolid = true %}
{% include "partials/code-preview.njk" %}

---

## Designing Search Directories

Directories represent a core channel for citizens browsing government catalog lists. When designing search patterns, apply these key visual conventions:

1. **Immediate Feedback**: Perform client-side filtering on input keystrokes or on field blurs to display dynamic result estimates rapidly.
2. **Clear Empty States**: When filters yield zero matches, avoid displaying a blank pane. Render an informative message containing instructions on how to clear filters and recover.
3. **Structured visual grids**: Utilize row or column layout frameworks to align search results. Consistently styling items inside cards makes browsing lists intuitive.

---

## Accessibility Guidelines (WCAG 2.2 AA)

To satisfy strict WCAG accessibility compliance standards, implement the following focus and interactive patterns:

### 1. Live Announcements (`aria-live`)
* Mark the results counter with standard assistive HTML attributes: `role="status"` and `aria-live="polite"`.
* When filters or search keywords change, update this element's text content. 
* Screen readers will dynamically read this text (e.g. *"6 Parks Found"*) aloud to notify visually impaired users without interrupting their focus or shifting their navigation.

### 2. Restoring Focus on Page Transitions
* When a user navigates to a new page using `<nys-pagination>`, their focus must be programmatically managed.
* Apply `tabindex="-1"` and `outline: none;` to the results container heading (`<h3>`).
* In the pagination event handler, call `.focus()` on the heading.
* This aligns the screen reader and keyboard virtual cursor back to the top of the new page, preventing keyboard users from getting stranded at the bottom of the viewport.

### 3. Accessible Forms and Labels
* Group all search and filter components within a standard `<form>` tag.
* Ensure all form controllers (`nys-textinput`, `nys-select`, `nys-checkbox`) are properly configured with unique element IDs and descriptive label properties.

{% endblock %}
