/**
 * Exclude items with crawl:false in front matter and drafts in draft folder from collections
 *
 * @param {Array} collection - Eleventy collection
 * @return {Array} Filtered collection
 *   
 **/

module.exports = function(collection) {
    return collection.filter(function(item) {
        // Exclude items with draft: true in front matter or in 'drafts' folder or with crawl: false
        return !(item.data.crawl === "false");
    });
}