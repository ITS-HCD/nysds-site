// Convert HEX to RGB
function hexToRgb(hex) {
  if (!hex) {
      console.error("hexToRgb received undefined value");
      return [0, 0, 0]; // Fallback to black
  }

  hex = hex.replace("#", ""); // Remove # if present

  // Convert shorthand HEX (#f00 → #ff0000)
  if (hex.length === 3) {
      hex = hex.split("").map(h => h + h).join("");
  }

  let bigint = parseInt(hex, 16);
  if (isNaN(bigint)) {
      console.error(`Invalid HEX color: ${hex}`);
      return [0, 0, 0]; // Fallback to black
  }

  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Convert RGB to relative luminance
function getLuminance(rgb) {
  function adjust(c) {
      c /= 255.0;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  let [r, g, b] = rgb.map(adjust);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Calculate WCAG Contrast Ratio (always comparing foreground to background)
function getContrastRatio(fg_hex, bg_hex) {
  if (!fg_hex || !bg_hex) {
      return "N/A";
  }

  let fg_luminance = getLuminance(hexToRgb(fg_hex));
  let bg_luminance = getLuminance(hexToRgb(bg_hex));

  let L1 = Math.max(fg_luminance, bg_luminance);
  let L2 = Math.min(fg_luminance, bg_luminance);

  let ratio = (L1 + 0.05) / (L2 + 0.05);
  return Math.round(ratio * 100) / 100; // Round to 2 decimal places (let's be sensible)
}

// Each text color's counterpart for the opposite kind of surface. A swatch recommends whichever of the pair
// has more contrast, so mid-range colors can land on either side depending on the agency theme.
const COUNTERPARTS = {
  "--nys-color-text": "--nys-color-text-reverse",
  "--nys-color-text-reverse": "--nys-color-text",
  "--nys-color-link": "--nys-color-link-reverse",
  "--nys-color-link-reverse": "--nys-color-link"
};

function getColorCategory(name) {
  if (name.includes('-transparent-')) return 'transparency';
  if (name.startsWith('--nys-color-theme')) return 'theme';
  if (/^--nys-color-(accent|info|success|warning|danger|emergency)/.test(name)) return 'intent';
  if (name.startsWith('--nys-color-neutral-')) return 'neutral';
  if (/^--nys-color-(base|ink|text|link|focus|surface)/.test(name)) return 'semantic';
  return 'semantic';
}

module.exports = function(collectionApi) {
  const tokens = collectionApi.items[0].data.tokens; // Pull tokens from _data/
  const rawValues = Object.fromEntries(tokens.map(token => [token.name, token.rawvalue]));

  tokens.forEach(token => {
      if (token.type === "color") {
          token.colorCategory = getColorCategory(token.name);
      }
      if (token.type === "color" && token.recommendedtype) {
          Object.entries(token.recommendedtype).forEach(([textColor, fgColor]) => {
              let bgColor = token.rawvalue; // Background should be token.rawvalue

              // The authored recommendation comes first, so it wins a tie with its counterpart
              let candidates = [{ variableName: textColor, color: fgColor }];
              let counterpart = COUNTERPARTS[textColor];
              if (counterpart && rawValues[counterpart]) {
                  candidates.push({ variableName: counterpart, color: rawValues[counterpart] });
              }

              try {
                  let best = candidates
                      .map(candidate => ({ ...candidate, contrastRatio: getContrastRatio(candidate.color, bgColor) }))
                      .reduce((a, b) => (b.contrastRatio > a.contrastRatio ? b : a));

                  token.recommendedtype[textColor] = {
                      variableName: best.variableName, // Store token reference (e.g., --nys-color-ink-reverse)
                      color: best.color, // Store actual HEX value so we can calculate contrast
                      contrastRatio: best.contrastRatio,
                      candidates: candidates.map(candidate => candidate.variableName) // Lets the theme switcher pick again
                  };
              } catch (error) {
                  token.recommendedtype[textColor] = {
                      variableName: textColor,
                      color: fgColor,
                      contrastRatio: "N/A",
                      candidates: [textColor]
                  };
              }
          });
      }
  });

  return tokens.reduce((acc, token) => {
      if (!acc[token.type]) acc[token.type] = [];
      acc[token.type].push(token);
      return acc;
  }, {});
};
