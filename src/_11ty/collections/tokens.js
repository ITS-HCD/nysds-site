// Convert HEX to RGB
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    let bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }
  
  // Calculate luminance
  function getLuminance(rgb) {
    let a = rgb.map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  
  // Calculate WCAG Contrast Ratio
  function getContrastRatio(foreground, background) {
    let lum1 = getLuminance(hexToRgb(foreground));
    let lum2 = getLuminance(hexToRgb(background));
    let ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
    return Math.round(ratio * 100) / 100; // Round to 2 decimal places
  }
  
  module.exports = function(collectionApi) {
      // Access tokens directly from Eleventy’s global data
      const tokens = collectionApi.items[0].data.tokens;
  
      // Process tokens to calculate contrast ratio where applicable
      tokens.forEach(token => {
          if (token.type === "color" && token.recommendedtype) {
              Object.entries(token.recommendedtype).forEach(([textColor, fgColor]) => {
                  // Calculate contrast with background
                  token.recommendedtype[textColor] = {
                      color: fgColor,
                      contrastRatio: getContrastRatio(fgColor, token.rawvalue)
                  };
              });
          }
      });
  
      // Group tokens by type
      return tokens.reduce((acc, token) => {
          if (!acc[token.type]) acc[token.type] = [];
          acc[token.type].push(token);
          return acc;
      }, {});
  };
  