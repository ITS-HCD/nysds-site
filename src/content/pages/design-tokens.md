---
title: Design Tokens
layout: layouts/3-col.njk
permalink: /foundations/tokens/
description: asdf
long_description: asdf
navOrder: 4
section: Foundations
---
<h1>Design Tokens</h1>
{% for type, tokens in collections.tokens %}
  <h2 id="{{ type }}"> {{ type | capitalize }} </h2>
  <div class="token-list">
    {% for token in tokens %}
      <div class="token-list__item nys-grid-row nys-grid-gap">
        <div class="token-list__example nys-tablet:nys-grid-col-3">
          {% if token.type == "color" %}
            <div class="{% if "transparent" in token.name %}token-list__swatch--checkerboard{% endif %}">
              <div class="token-list__swatch {% if ('black' not in token.name) and ('white' in token.name or token.rawvalue in ['#ffffff'] )%} token-list__swatch--white-border{% endif %}" style="background-color: var({{ token.name }});">
                {% if token.recommendedtype %}
                  <div class="token-list__text">
                  {% for textColor, details in token.recommendedtype %}
                    <span 
                      class="token-list__text--value" 
                      style="color: var({{ details.variableName }});" 
                      data-color="var({{ details.variableName }})"
                    >
                      {{ details.contrastRatio }}
                    </span>
                  {% endfor %}
                  </div>
                {% endif %}
              </div>
            </div>
          {% elif token.type == "font-size" %}
            <div class="token-list__type" style="font-size: var({{ token.name }});">Aa</div>
          {% elif token.type == "font-family" %}
            <div class="token-list__family" style="font-family: var({{ token.name }}); font-size: var(--nys-font-size-9xl)">Aa</div>
          {% elif token.type == "space" %}
            <div class="token-list__space" style="width: var({{ token.name }});"></div>
          {% elif token.type == "size" %}
            <div class="token-list__size" style="width: var({{ token.name }});"></div>
          {% elif token.type == "radius" %}
            <div class="token-list__radius" style="border-radius: var({{ token.name }});"></div>
          {% endif %}
          <pre data-no-copy><code class="token-list__raw">{{ token.rawvalue }}</code></pre>
        </div>
        <div class="token-list__details nys-tablet:nys-grid-col-5">
          <h3 class="token-list__name">{{ token.displayname }}</h3>
          <p class="token-list__desc">{{ token.description }}</p>
        </div>
        <div class="token-list__info nys-tablet:nys-grid-col-4">
            <div class="nys-grid-row nys-display-flex nys-flex-align-center">
              <div class="nys-grid-col-10">
                <pre data-no-copy><code class="token-list__var">{{ token.name }}</code></pre>
              </div>
              <div class="nys-grid-col-2">
                <div class="copy-button-wrapper" style="position: relative;">
                  <nys-button
                    class="copy-btn"
                    id="copy-{{ loop.index }}"
                    variant="ghost"
                    size="sm"
                    prefixIcon="content_copy">
                  </nys-button>
                  <div class="copy-tooltip tokens">Copy</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}



<script>
document.querySelectorAll("[id^='copy-']").forEach(button => {
  button.addEventListener("click", function() {
    const tokenName = this.closest(".token-list__info").querySelector(".token-list__var").textContent.trim();
    const copyValue = `var(${tokenName})`; // Wrap token in var()

    const wrapper = this.closest(".copy-button-wrapper");
    const tooltip = wrapper.querySelector(".copy-tooltip");

    // Copy token name to clipboard
    navigator.clipboard.writeText(copyValue).then(() => {
      // Set label to "Copied!"
      this.setAttribute("prefixIcon", "check");

      // Temporarily change tooltip text to "Copied!"
      tooltip.innerText = "Copied!";
      tooltip.classList.add("copied");
      
      // Restore icon-only button after 1.5 seconds
      setTimeout(() => {
        this.setAttribute("prefixIcon", "content_copy"); // Restores icon
        tooltip.innerText = "Copy";
        tooltip.classList.remove("copied");
      }, 1500);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".token-list__text--value").forEach(span => {
    // Show tooltip on hover
    span.addEventListener("mouseenter", function () {
      this.setAttribute("data-tooltip", this.getAttribute("data-color"));
    });

    // Remove tooltip when leaving
    span.addEventListener("mouseleave", function () {
      this.removeAttribute("data-tooltip");
    });

    // Copy to clipboard on click
    span.addEventListener("click", function () {
      const colorVar = this.getAttribute("data-color");

      navigator.clipboard.writeText(colorVar).then(() => {
        this.setAttribute("data-tooltip", "Copied!");
        setTimeout(() => {
          this.setAttribute("data-tooltip", colorVar);
        }, 1500);
      }).catch(err => {
        console.error("Failed to copy:", err);
      });
    });
  });
});

</script>
