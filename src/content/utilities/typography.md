---
permalink: /foundations/utilities/typography/
title: Typography Utilities - Excelsior, New York State's Design System
description: Excelsior makes it easier to build usable, accessible, mobile-friendly websites for New York State residents.
section: Foundations
---

{% block styles %}
<link rel="stylesheet" href="{{ site.url | url}}/assets/css/utilities.css">
{% endblock %}

{% block scripts %}
<!-- <script>
document.addEventListener("DOMContentLoaded", function() {
  const navContainer = document.createElement('nav');
  const navList = document.createElement('ul');
  navContainer.appendChild(navList);

  document.querySelectorAll('h2').forEach((heading) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    const headingId = heading.textContent.toLowerCase().replace(/\s+/g, '-');
    
    heading.id = headingId;
    navLink.href = `#${headingId}`;
    navLink.textContent = heading.textContent;
    
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  document.body.insertBefore(navContainer, document.body.firstChild);
});
</script> -->
{% endblock %}

# Typography

