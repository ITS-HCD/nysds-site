/**
 * Exclude pages that shouldn't be listed for crawlers: `crawl: false` or
 * `noindex: true` in front matter. Accepts `crawl: false` as a YAML boolean
 * or as the string "false", since both appear in the content.
 *
 * @param {Array} collection - Eleventy collection
 * @return {Array} Filtered collection
 **/

module.exports = function (collection) {
  return collection.filter(function (item) {
    const crawl = item.data.crawl;
    const noCrawl = crawl === false || crawl === "false";
    return !noCrawl && !item.data.noindex;
  });
};
