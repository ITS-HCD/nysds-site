// scripts/gen-usage.js
// Generates src/_data/componentUsage.json from @nysds/components custom-elements.json
const fs = require("node:fs");
const path = require("node:path");

const MANIFEST = require.resolve("@nysds/components/custom-elements.json");
const OUTPUT = path.join(__dirname, "..", "src", "_data", "componentUsage.json");

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

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const usage = buildUsage(manifest);

fs.writeFileSync(OUTPUT, JSON.stringify(usage, null, 2) + "\n", "utf8");
console.log(
  `[gen-usage] Generated ${Object.keys(usage).length} components in src/_data/componentUsage.json`,
);

module.exports = { buildUsage };
