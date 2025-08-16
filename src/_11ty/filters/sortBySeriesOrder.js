/**
 * Sort by numeric data.series_order ascending.
 * Missing/invalid -> pushes to end. Stable tiebreaker by title.
 * @param {Array<Object>} items
 * @returns {Array<Object>}
 */
module.exports = function(items) {
  const list = Array.isArray(items) ? items.slice() : [];

  const getSeries = (it) => {
    const n = Number.parseInt(it?.data?.series_order, 10);
    return Number.isFinite(n) ? n : Number.POSITIVE_INFINITY;
  };
  const getTitle = (it) => String(it?.data?.title || "").toLowerCase();

  return list.sort((a, b) => {
    const sa = getSeries(a);
    const sb = getSeries(b);
    if (sa !== sb) return sa - sb;
    return getTitle(a).localeCompare(getTitle(b));
  });
};