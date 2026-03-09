/**
 * Filter: byCategory
 * @param {Array} items - Eleventy collection
 * @param {String} category - Category name (e.g., "Design")
 * @return {Array} Filtered items
 */
module.exports = function(items, category) {
  const cat = (category || "").toLowerCase();
  return (items || []).filter(
    (i) => ((i.data.category || "").toLowerCase() === cat)
  );
};