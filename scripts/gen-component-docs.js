// scripts/gen-usage.js
// Generates src/_data/componentDocsContent.json from @nysds/components custom-elements.json
const fs = require("node:fs");
const path = require("node:path");

const MANIFEST = require.resolve("@nysds/components/custom-elements.json");
const OUTPUT = path.join(__dirname, "..", "src", "_data", "componentDocsContent.json");

// Matches "Don't" / "Don’t" at the start of a bullet, case-insensitive
const DONT_RE = /^don['’]t\b/i;

function buildUsage(manifest) {
  const usage = {};
  const missing = [];

  for (const mod of manifest.modules ?? []) {
    for (const decl of mod.declarations ?? []) {
      if (!decl.tagName) continue;

      const { usage: componentUsage } = decl;

      const ok =
        componentUsage === undefined ||
        (Array.isArray(componentUsage) &&
          componentUsage.every((s) => typeof s === "string"));
      if (!ok) {
        throw new Error(`${decl.tagName}: usage must be an array of strings`);
      }

      if (!componentUsage) {
        missing.push(decl.tagName);
      }

      const items = componentUsage ?? [];
      const donts = items.filter((s) => DONT_RE.test(s.trim()));
      const dos = items.filter((s) => !DONT_RE.test(s.trim()));

      usage[decl.tagName] = {
        dos,
        donts,
      };
    }
  }

  if (missing.length) {
    console.warn(
      `[componentDocsContent] no content for: ${missing.join(", ")}`,
    );
  }
  return usage;
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const usage = buildUsage(manifest);

fs.writeFileSync(OUTPUT, JSON.stringify(usage, null, 2) + "\n", "utf8");
console.log(
  `[gen-usage] Generated ${Object.keys(usage).length} components in src/_data/componentDocsContent.json`,
);

module.exports = { buildUsage };