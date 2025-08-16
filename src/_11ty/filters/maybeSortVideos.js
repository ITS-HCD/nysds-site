/* src/filters/maybeSortVideos.js */
const defaultOrder = (() => {
  try {
    return require("../_data/videoCategories.json");
  } catch {
    return [];
  }
})();

/**
 * Maybe sort a collection as “videos”.
 *
 * Behavior:
 * - If EVERY item looks like a video (has `data.video_url`), returns a sorted copy:
 *   1) by category rank (from `videoCategories` or optional `categoryOrder`)
 *   2) then by numeric `data.category_order` (ascending; missing → end)
 * - Otherwise, returns the original list unchanged (safe for non-video navs).
 * - If no category order is available, falls back to alphabetical category order.
 *
 * @param {Array<{data: {category?: string, category_order?: number|string, title?: string, video_url?: string}}>} items
 *   Eleventy collection items (Template objects).
 * @param {Array<string>} [categoryOrder]
 *   Optional category order, e.g. ["General","Design","Development"].
 * @returns {Array}
 *   Sorted copy for video-like items; otherwise the original list.
 */
module.exports = function maybeSortVideos(items, categoryOrder) {
  const list = Array.isArray(items) ? items : [];
  if (list.length === 0) return list;

  const isVideoLike = (i) => Boolean(i?.data?.video_url);
  if (!list.every(isVideoLike)) return list;

  const categoriesFromItems = Array.from(
    new Set(
      list
        .map((i) => (i?.data?.category || "").trim())
        .filter(Boolean)
    )
  );

  const order =
    Array.isArray(categoryOrder) && categoryOrder.length
      ? categoryOrder
      : Array.isArray(defaultOrder) && defaultOrder.length
      ? defaultOrder
      : categoriesFromItems.sort((a, b) =>
          a.localeCompare(b, "en", { sensitivity: "base" })
        );

  const rankMap = new Map(order.map((c, idx) => [c.toLowerCase(), idx]));
  const catRank = (cat) => {
    const key = (cat || "").toLowerCase();
    return rankMap.has(key) ? rankMap.get(key) : Number.POSITIVE_INFINITY;
  };

  return list.slice().sort((a, b) => {
    // 1) category rank
    const ra = catRank(a?.data?.category);
    const rb = catRank(b?.data?.category);
    if (ra !== rb) return ra - rb;

    // 2) category_order within category
    const oa = Number.parseInt(a?.data?.category_order, 10);
    const ob = Number.parseInt(b?.data?.category_order, 10);
    const sa = Number.isFinite(oa) ? oa : Number.POSITIVE_INFINITY;
    const sb = Number.isFinite(ob) ? ob : Number.POSITIVE_INFINITY;
    if (sa !== sb) return sa - sb;

    // 3) stable tiebreaker
    const ta = (a?.data?.title || "").toLowerCase();
    const tb = (b?.data?.title || "").toLowerCase();
    return ta.localeCompare(tb);
  });
};
/* src/filters/maybeSortVideos.js */