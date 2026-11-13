/**
 * Build schema.org BreadcrumbList structured data for a page from its URL.
 *
 * Walks each ancestor path of the URL (for `/components/button/accessibility-tests/`:
 * `/`, `/components/`, `/components/button/`) and keeps the ones that are real
 * pages, then appends the current page. Google uses this to show a readable
 * path in place of the raw URL in search results.
 *
 * @param {String} url - Eleventy `page.url`
 * @param {Array} collection - `collections.all`
 * @param {String} title - Title of the current page
 * @param {String} siteUrl - Absolute site origin, such as https://designsystem.ny.gov
 * @return {Object|null} BreadcrumbList, or null for the home page
 */

module.exports = function breadcrumbList(url, collection, title, siteUrl) {
  if (!url || url === "/") return null;

  const byUrl = new Map();
  for (const item of collection || []) {
    if (item.url) byUrl.set(item.url, item);
  }

  const label = (item, fallback) =>
    String(item?.data?.navTitle || item?.data?.title || fallback).trim();

  const trail = [{ name: "Home", url: "/" }];
  const segments = url.split("/").filter(Boolean);
  let path = "/";
  for (let i = 0; i < segments.length - 1; i++) {
    path += `${segments[i]}/`;
    const item = byUrl.get(path);
    if (item) trail.push({ name: label(item, segments[i]), url: path });
  }
  trail.push({ name: String(title || segments[segments.length - 1]).trim(), url });

  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.url}`,
    })),
  };
};
