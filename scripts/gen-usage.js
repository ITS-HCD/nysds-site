// scripts/gen-usage.js
// Generates src/_data/componentUsage.json and src/_data/componentSubcomponents.json
// from @nysds/components custom-elements.json
const fs = require("node:fs");
const path = require("node:path");

const MANIFEST = require.resolve("@nysds/components/custom-elements.json");
const OUTPUT_USAGE = path.join(
  __dirname,
  "..",
  "src",
  "_data",
  "componentUsage.json",
);
const OUTPUT_SUBCOMPONENTS = path.join(
  __dirname,
  "..",
  "src",
  "_data",
  "componentSubcomponents.json",
);

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
      `[componentUsage] no usagedos/usagedonts for: ${missing.join(", ")}`,
    );
  }
  return usage;
}

function buildSubcomponents(manifest) {
  const packageGroups = {};

  for (const mod of manifest.modules ?? []) {
    const match = mod.path ? mod.path.match(/^packages\/([^\/]+)/) : null;
    const pkg = match ? match[1] : null;
    if (!pkg) continue;

    if (!packageGroups[pkg]) packageGroups[pkg] = [];
    for (const decl of mod.declarations ?? []) {
      if (decl.tagName && !packageGroups[pkg].includes(decl.tagName)) {
        packageGroups[pkg].push(decl.tagName);
      }
    }
  }

  const subcomponents = {};
  for (const [pkg, tags] of Object.entries(packageGroups)) {
    if (tags.length <= 1) continue;

    let primary = tags.find((t) => t === pkg);
    if (pkg === "nys-tab") primary = "nys-tabgroup";
    if (!primary) primary = tags[0];

    subcomponents[primary] = tags.filter((t) => t !== primary);

    if (pkg !== primary) {
      subcomponents[pkg] = tags.filter((t) => t !== pkg);
    }
  }

  return subcomponents;
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const usage = buildUsage(manifest);
const subcomponents = buildSubcomponents(manifest);

fs.writeFileSync(OUTPUT_USAGE, JSON.stringify(usage, null, 2) + "\n", "utf8");
console.log(
  `[gen-usage] Generated ${Object.keys(usage).length} components in src/_data/componentUsage.json`,
);

fs.writeFileSync(
  OUTPUT_SUBCOMPONENTS,
  JSON.stringify(subcomponents, null, 2) + "\n",
  "utf8",
);
console.log(
  `[gen-usage] Generated ${Object.keys(subcomponents).length} subcomponent groups in src/_data/componentSubcomponents.json`,
);

module.exports = { buildUsage, buildSubcomponents };
