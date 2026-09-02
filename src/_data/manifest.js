const { loadManifest } = require("@nysds/codegen");

module.exports = () => loadManifest(require.resolve("@nysds/components/custom-elements.json"));
