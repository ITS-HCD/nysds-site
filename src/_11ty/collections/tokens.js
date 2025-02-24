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

module.exports = function(collectionApi) {
  const tokens = collectionApi.items[0].data.tokens; // Pull tokens from _data/

  tokens.forEach(token => {
      if (token.type === "color" && token.recommendedtype) {
          Object.entries(token.recommendedtype).forEach(([textColor, fgColor]) => {
              let bgColor = token.rawvalue; // Background should be token.rawvalue

              try {
                  let contrast = getContrastRatio(fgColor, bgColor);

                  token.recommendedtype[textColor] = {
                      variableName: textColor, // Store token reference (e.g., --nys-color-ink-reverse)
                      color: fgColor, // Store actual HEX value so we can calculate contrast
                      contrastRatio: contrast
                  };
              } catch (error) {
                  token.recommendedtype[textColor] = {
                      variableName: textColor,
                      color: fgColor,
                      contrastRatio: "N/A"
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
