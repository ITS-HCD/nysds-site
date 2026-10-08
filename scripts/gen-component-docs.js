// scripts/gen-usage.js
// Generates src/_data/componentDocsContent.json from @nysds/components custom-elements.json
const fs = require("node:fs");
const path = require("node:path");

const MANIFEST = require.resolve("@nysds/components/custom-elements.json");
const OUTPUT = path.join(__dirname, "..", "src", "_data", "componentDocsContent.json");

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
      }

      const properties = (decl.attributes ?? []).map((attr) => ({
        ...attr,
        type:
          attr.type?.text ??
          (typeof attr.type === "string" ? attr.type : ""),
      }));

      const events = (decl.events ?? []).map((evt) => ({
        ...evt,
        ...(evt.type
          ? {
              type:
                evt.type?.text ??
                (typeof evt.type === "string" ? evt.type : ""),
            }
          : {}),
      }));

      usage[decl.tagName] = {
        usagedos: usagedos ?? [],
        usagedonts: usagedonts ?? [],
        properties,
        cssProperties: decl.cssProperties ?? [],
        slots: decl.slots ?? [],
        events,
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
