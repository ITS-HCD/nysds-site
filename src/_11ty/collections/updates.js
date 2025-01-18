module.exports = function(collection) {
    return collection
        .getFilteredByGlob("./src/content/updates/*.md")
        // Exclude drafts
        .filter((item) => !item.data.draft)
        // Updates are sorted by year, descending
        .sort((a, b) => {
            let yearA = parseInt(a.data.year, 10);
            let yearB = parseInt(b.data.year, 10);
            return yearA - yearB;
        })
        .reverse();
}