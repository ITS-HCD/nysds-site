---
permalink: /updates/october-website-improvements/
title: October Website Improvements
author: Eric Steinborn
description: |
    We have implemented a site search, added a new 404 page, and created quick links for headings across the site.
ogimage: /assets/i/2025/website-improvements.png
tags: article, website, search
date: 2025-10-24
---

## Site Search Now Available

We added a search feature to the site. You can click the [Search](/search) link in the site navigation to search the whole site.

<nys-textinput name="q" type="search" placeholder="Search" id="q" label="Search the NYS Design System" width="lg">
  <nys-button slot="endButton" type="button" label="" prefixIcon="search" id="searchButton"></nys-button>
</nys-textinput>

<script>
  document.getElementById("q").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  });

  document.getElementById("searchButton").addEventListener("nys-click", () => { 
    search();
  });

  function search() {
    var searchInput = document.getElementById('q');
    var url = "/search/?q=" + searchInput.value;
    window.open(url, "_self");
  }
</script>

## New 404 page

We've updated our 404 (file not found) error page to include a mascot and a search box. [See the 404 page in action](/foo).

## Direct Links to Headings 

When you are on a page, you'll notice a button with a link icon next to headings. Click that button to copy the URL direct to that page and heading. Check out the headings on this page for an example of how it works.
