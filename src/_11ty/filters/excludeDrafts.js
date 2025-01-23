/**
 * Exclude updates with draft:true in front matter and drafts in draft folder from collections
 *
 * @param {Array} collection - Eleventy collection
 * @return {Array} Filtered collection
 *   
 **/

module.exports = function(collection) {
    return collection.filter((item) => {
        const isDraft = item.data.draft === true; // Exclude if draft: true in front matter
        const isInDraftFolder = item.inputPath.includes("/drafts/"); // Exclude if in drafts folder
        return !isDraft && !isInDraftFolder; // Include only items that are not drafts
    });
};