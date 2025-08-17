/**
 * True if the item has a "release" tag (case-insensitive).
 * Accepts array or string.
 * @param {string|string[]|undefined} tags
 * @returns {boolean}
 */
module.exports = function hasReleaseTag(tags) {
  if (!tags) return false;
  const list = Array.isArray(tags) ? tags : [tags];
  return list
    .map(t => String(t).trim().toLowerCase())
    .includes("release");
};