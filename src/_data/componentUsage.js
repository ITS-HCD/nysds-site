// src/_data/componentUsage.js
// Eleventy global data: componentUsage["nys-accordion"] => { dos: [...], donts: [...] }
// Source: declarations[].usagedos / usagedonts in @nysds/components/custom-elements.json
const fs = require("node:fs");

const MANIFEST = require.resolve("@nysds/components/custom-elements.json");

function buildUsage(manifest) {
  const usage = {};
  const missing = [];

  for (const mod of manifest.modules ?? []) {
    for (const decl of mod.declarations ?? []) {
      if (!decl.tagName) continue;

      const { usagedos, usagedonts } = decl;
      for (const [key, value] of Object.entries({ usagedos, usagedonts })) {
        const ok =
          value === undefined ||
          (Array.isArray(value) && value.every((s) => typeof s === "string"));
        if (!ok) {
          throw new Error(`${decl.tagName}: ${key} must be an array of strings`);
        }
      }

      if (!usagedos && !usagedonts) {
        missing.push(decl.tagName);
        continue;
      }
      usage[decl.tagName] = { dos: usagedos ?? [], donts: usagedonts ?? [] };
    }
  }

  if (missing.length) {
    console.warn(
      `[componentUsage] no usagedos/usagedonts for: ${missing.join(", ")}`,
    );
  }
  return usage;
}

module.exports = function () {
  return buildUsage(JSON.parse(fs.readFileSync(MANIFEST, "utf8")));
};
module.exports.buildUsage = buildUsage;
