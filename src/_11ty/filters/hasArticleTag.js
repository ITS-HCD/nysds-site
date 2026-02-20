/**
 * True if the item has a "article" tag (case-insensitive).
 * Accepts array or string.
 * @param {string|string[]|undefined} tags
 * @returns {boolean}
 */
module.exports = function hasArticleTag(tags) {
  if (!tags) return false;
  const list = Array.isArray(tags) ? tags : [tags];
  return list
    .map(t => String(t).trim().toLowerCase())
    .includes("article");
};