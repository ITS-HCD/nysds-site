module.exports = function(collection) {
    return collection
        .getFilteredByGlob(["./src/content/components/*.{md,njk}"])
        // Exclude drafts
        .filter((item) => !item.data.draft)
        // Components are sorted alphabetically by title
        .sort((a, b) => a.data.title.localeCompare(b.data.title));
}