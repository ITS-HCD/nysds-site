---
permalink: /foundations/design-tokens/
title: "Design Tokens"
description: "Excelsior makes it easier to build accessible, usable websites for New York State."
navOrder: 40
---

{% block content %}

# Design Tokens

## Space

Spacing tokens standardize margins, padding, and gaps in layouts. 

| Example | Description                                                                      | Token              |
| ------- | -------------------------------------------------------------------------------- | ------------------ |
| 1px     | **Space 1px** This is ultra-thin for fine detail, like borders or dividers.      | `--nys-space-1px`  |
| 2px     | **Space 2px** Very small spacing for micro-adjustments or compact layouts.       | `--nys-space-2px`  |
| 4px     | **Space 50** Extra-small spacing, typically used for tight content spacing.      | `--nys-space-50`   |
| 8px     | **Space 100** Small spacing, often used for compact layouts or minimal margins.  | `--nys-space-100`  |
| 12px    | **Space 150** Small-medium spacing for general UI elements.                      | `--nys-space-150`  |
| 16px    | **Space 200** Medium spacing, commonly used for standard element separation.     | `--nys-space-200`  |
| 20px    | **Space 250** Medium-large spacing for container padding or visual balance.      | `--nys-space-250`  |
| 24px    | **Space 300** Standard spacing for layouts with moderate separation.             | `--nys-space-300`  |
| 32px    | **Space 400** Large spacing for separating sections or creating visual breaks.   | `--nys-space-400`  |
| 40px    | **Space 500** Extra-large spacing for major sections or wide gaps.               | `--nys-space-500`  |
| 48px    | **Space 600** Very large spacing, often used for section padding or layouts.     | `--nys-space-600`  |
| 56px    | **Space 700** Generous spacing for wide content separation.                      | `--nys-space-700`  |
| 64px    | **Space 800** Maximum spacing for highly open designs or major layouts.          | `--nys-space-800`  |
| 96px    | **Space 1200** Largest spacing token for creating significant visual separation. | `--nys-space-1200` |

## Size

### Primitives

| Example | Description                                                                                                                                   | Token             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1px     | **Space 1px** Spacing tokens standardize margins, padding, and gaps in layouts. This is ultra-thin for fine detail, like borders or dividers. | `--nys-size-1px`  |
| 2px     | **Space 2px** Very small spacing for micro-adjustments or compact layouts.                                                                    | `--nys-size-2px`  |
| 4px     | **Space 50** Extra-small spacing, typically used for tight content spacing.                                                                   | `--nys-size-50`   |
| 8px     | **Space 100** Small spacing, often used for compact layouts or minimal margins.                                                               | `--nys-size-100`  |
| 12px    | **Space 150** Small-medium spacing for general UI elements.                                                                                   | `--nys-size-150`  |
| 16px    | **Space 200** Medium spacing, commonly used for standard element separation.                                                                  | `--nys-size-200`  |
| 20px    | **Space 250** Medium-large spacing for container padding or visual balance.                                                                   | `--nys-size-250`  |
| 24px    | **Space 300** Standard spacing for layouts with moderate separation.                                                                          | `--nys-size-300`  |
| 32px    | **Space 400** Large spacing for separating sections or creating visual breaks.                                                                | `--nys-size-400`  |
| 36px    | **Space 450**                                                                                                                                 | `--nys-size-450`  |
| 40px    | **Space 500** Extra-large spacing for major sections or wide gaps.                                                                            | `--nys-size-500`  |
| 44px    | **Space 550**                                                                                                                                 | `--nys-size-550`  |
| 48px    | **Space 600** Very large spacing, often used for section padding or layouts.                                                                  | `--nys-size-600`  |
| 56px    | **Space 700** Generous spacing for wide content separation.                                                                                   | `--nys-size-700`  |
| 64px    | **Space 800** Maximum spacing for highly open designs or major layouts.                                                                       | `--nys-size-800`  |
| 96px    | **Space 1200** Largest spacing token for creating significant visual separation.                                                              | `--nys-size-1200` |

### Border Width

| Example | Description              | Token                   |
| ------- | ------------------------ | ----------------------- |
| 1px     | **Border Width Small**   | `--nys-border-width-sm` |
| 2px     | ** Border Width Medium** | `--nys-border-width-md` |
| 4px     | ** Border Width Large**  | `--nys-border-width-lg` |

## Radius

| Example | Description                                                                                                                | Token                |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| 1px     | **Radius Extra Small** Creates a sharp, slightly rounded corner.                                                           | `--nys-radius-xs`    |
| 2px     | **Radius Small** Soft rounding. Used in Checkbox Small.                                                                    | `--nys-radius-sm`    |
| 4px     | **Radius Medium** Default radius. Used for Alert, large Checkbox, and input fields like Text Input, Select, and Text Area. | `--nys-radius-md`    |
| 8px     | **Radius Large** Larger radius for a more pronounced rounding.                                                             | `--nys-radius-lg`    |
| 12px    | **Radius Extra Large** Strong radius. Used for buttons, to quickly indicate interactivity.                                 | `--nys-radius-xl`    |
| 16px    | **Radius Extra Extra Large** Very strong rounding. Use sparingly. Used for focus ring of Button.                           | `--nys-radius-xxl`   |
| 1776    | **Radius Round** Creates an oval or circle shape. Used for avatars.                                                        | `--nys-radius-round` |

## Color
**Overridden by agency-specific themes.**
All of the below colors automatically adapt to the agency when set. In the future additional modes may be supported for each agency such as a dark mode, high contrast mode, or colorblind optimized mode. By making use of Excelsior color variables it will enable quick adoption of future accessibility modes.

Change the Agency theme above to see how these colors adapt to each agency.

Do not use the hex value of a color token, use the CSS Variable / Token.

### Theme

| Example                | Description                                                                                                                                                                     | Token                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| \#154973 (ink-reverse) | **Color Theme** Primary brand color. Used for primary actions and interactive elements like buttons, checkboxes, and agency-specific headers and footers.                       | `--nys-color-theme`    |
| \#0E324F (ink-reverse) | **Color Theme Strong** Stronger shade of theme color, used for hover state on interactive elements.                                                                             | `--nys-color-strong`   |
| \#081B2B (ink-reverse) | **Color Theme Stronger** Strongest shade of theme color, used for pressed state on interactive elements.                                                                        | `--nys-color-stronger` |
| \#457AA5 (ink-reverse) | **Color Theme Mid** Mid-range shade of theme color. Use sparingly, since text contrast against this color is problematic.                                                       | `--nys-color-mid`      |
| \#CDDDE9 (ink)         | **Color Theme Weak** Slightly lighter shade of theme color.                                                                                                                     | `--nys-color-weak`     |
| \#EFF6FB (ink)         | **Color Theme Weaker** Lighter shade of theme color, used to subtly convey brand in places with a lot of text, like the global agency footer.                                   | `--nys-color-weaker`   |
| \#F7FAFD (ink)         | **Color Theme Faint** Faint shade of the theme color. Good for subtle accents or backgrounds.                                                                                   | `--nys-color-faint`    |
| \#FACE00 (ink-reverse) | **Color Theme Accent** Bold accent color for highlighting or emphasis. Use sparingly, especially in application contexts where it can be confused with warning or error colors. | `--nys-color-accent`   |

### Intent

| Example                | Description                                                                                                  | Token                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------- |
| \#004DD1 (ink-reverse) | ** Color Info** Informational color for neutral messages.                                                    | `--nys-color-info`         |
| \#E5EFFA (ink)         | ** Color Info Weak** Used as a background for informational contexts with a lot of text, like alerts.        | `--nys-color-info-weak`    |
| \#1E752E (ink-reverse) | **Color Success** Used to communicate successful actions or states.                                          | `--nys-color-success`      |
| \#E8F1EA (ink)         | **Color Success Weak** Used as a background for success contexts with a lot of text, like alerts.            | `--nys-color-success-weak` |
| \#FACE00 (ink-reverse) | **Color Warning** Used as a warning color for non-critical alerts.                                           | `--nys-color-warning`      |
| \#FEFAE5 (ink)         | **Color Warning Weak** Used as a background for warning contexts with a lot of text, like alerts.            | `--nys-color-warning-weak` |
| \#B52C2C (ink-reverse) | **Color Danger** Used to indicate destructive actions or failures.                                           | `--nys-color-danger`       |
| \#F7EAEA (ink)         | **Color Danger Weak** Used as a background in destructive or error contexts with a lot of text, like alerts. | `--nys-color-danger-weak`  |
| \#721C1C (ink-reverse) | **Color Emergency** Emergency color for critical alerts or actions. Use sparingly.                           | `--nys-color-emergency`    |
| \#62666A (ink-reverse) | **Color Base** Used for the border of neutral alerts.                                                        | `--nys-color-base`         |
| \#F6F6F6 (ink)         | **Color Base Weak** Used for the background of neutral alerts.                                               | `--nys-color-base-weak`    |

### Neutrals

| Example                | Description                                                                                                        | Token                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| \#1B1B1B (ink-reverse) | **Color Ink** Default text color. Used as main text color throughout UI. Provides accessible contrast for content. | `--nys-color-ink`           |
| \#FFFFFF (ink)         | **Color Ink Reverse** Reverse text color for dark backgrounds.                                                     | `--nys-color-ink-reverse`   |
| \#1B1B1B (ink-reverse) | **Color Neutral 900** Darkest neutral shade for text or backgrounds.                                               | `--nys-color-neutral-900`   |
| \#323435 (ink-reverse) | **Color Neutral 800** Very dark neutral shade for subdued elements.                                                | `--nys-color-neutral-800`   |
| \#4A4D4F (ink-reverse) | **Color Neutral 700** Dark neutral tone for text or muted accents.                                                 | ````nys-color-neutral-700`` |
| \#62666A (ink-reverse) | **Color Neutral 600** Medium-dark neutral tone for UI elements.                                                    | `--nys-color-neutral-600`   |
| \#797C7F               | **Color Neutral 500** Medium neutral tone for balanced emphasis.                                                   | `--nys-color-neutral-500`   |
| \#909395               | **Color Neutral 400** Light-medium neutral tone for soft elements.                                                 | `--nys-color-neutral-400`   |
| \#A7A9AB               | **Color Neutral 300** Light neutral tone for subtle backgrounds.                                                   | `--nys-color-neutral-300`   |
| \#BEC0C1               | **Color Neutral 200** Very light neutral tone for minimal elements.                                                | `--nys-color-neutral-200`   |
| \#D0D0CE               | **Color Neutral 100** Near-white neutral for soft backgrounds.                                                     | `--nys-color-neutral-100`   |
| \#EDEDED               | **Color Neutral 50** Faint neutral shade for background contrast.                                                  | `--nys-color-neutral-50`    |
| \#F6F6F6               | **Color Neutral 10** Subtle neutral shade for faint accents.                                                       | `--nys-color-neutral-10`    |

### Semantic

| Example  | Description                                                           | Token                        |
| -------- | --------------------------------------------------------------------- | ---------------------------- |
| \#004DD1 | **Color Link** Default color for text links.                          | `--nys-color-link`           |
| \#003BA1 | **Color Link Strong** Used for hover and active states on text links. | `--nys-color-link-strong`    |
| \#002971 | **Color Link Strongest** Used for pressed states on text links.       | `--nys-color-link-strongest` |
| \#004DD1 | **Color Focus** Used to color focus rings on interactive elements.    | `--nys-color-focus`          |

## Typography

### Family

| Example | Description                                                                                                                                                                                                                             | Token                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|         | **Font Family, Sans** Primary brand font, used for content, headers, and UI text. → Proxima Nova, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol | `--nys-font-family-sans`   |
|         | **Font Family, Agency** Brand font used only for agency, program, and initiative titles. → D Sari, Arial, sans-serif                                                                                                                    | `--nys-font-family-agency` |
|         | **Font Family, Alternate** Alternate brand font, used sparingly for accent in public-facing sites. → Oswald, Arial, sans-serif                                                                                                          | `--nys-font-family-alt`    |

### Size

| Example | Description                                                                                             | Token                 |
| ------- | ------------------------------------------------------------------------------------------------------- | --------------------- |
|         | **Font Size, 2XS** Extra-extra-small font size. Typically used for fine print or disclaimers            | `--nys-font-size-2xs` |
|         | **Font Size, XS** Extra-small font size. Used for less prominent labels or captions. → 12px             | `--nys-font-size-xs`  |
|         | **Font Size, SM** Small font size. Commonly used for secondary text or labels. → 14px                   | `--nys-font-size-sm`  |
|         | **Font Size, MD** Medium font size. Default body text size. → 16px                                      | `--nys-font-size-md`  |
|         | **Font Size, LG** Large font size. Used for subheadings or larger labels. → 18px                        | `--nys-font-size-lg`  |
|         | **Font Size, XL** Extra-large font size. Used for headings or standout elements. → 20px                 | `--nys-font-size-xl`  |
|         | **Font Size, 2XL** Double extra-large font size. Commonly used for secondary headings. → 22px           | `--nys-font-size-2xl` |
|         | **Font Size, 3XL** Triple extra-large font size. Used for primary headings or key text. → 24px          | `--nys-font-size-3xl` |
|         | **Font Size, 4XL** Quadruple extra-large font size. Typically used for prominent headlines. → 28px      | `--nys-font-size-4xl` |
|         | **Font Size, 5XL** Quintuple extra-large font size. Reserved for key marketing or hero sections. → 32px | `--nys-font-size-5xl` |
|         | **Font Size, 6XL** Six times extra-large font size. Used for impactful hero text. → 36px                | `--nys-font-size-6xl` |
|         | **Font Size, 7XL** Seven times extra-large font size. Highly prominent text. → 40px                     | `--nys-font-size-7xl` |
|         | **Font Size, 8XL** Eight times extra-large font size. Typically for titles or splash content. → 44px    | `--nys-font-size-8xl` |
|         | **Font Size, 9XL** Nine times extra-large font size. Maximum size for hero content. → 50px              | `--nys-font-size-9xl` |


{% endblock %}

{% block styles %}
{% endblock %}

{% block scripts %}
{% endblock %}