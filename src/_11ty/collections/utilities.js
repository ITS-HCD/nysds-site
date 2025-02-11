module.exports = function(collection) {
    return collection
        .getFilteredByGlob(["./src/content/utilities/*.{md,njk}"])
        // Exclude drafts
        .filter((item) => !item.data.draft)
        // Utilities are sorted alphabetically by title
        .sort((a, b) => a.data.title.localeCompare(b.data.title));
}