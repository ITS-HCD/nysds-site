const todaysDate = new Date();

function showDraft(data) {
    const isDraft = 'draft' in data && data.draft !== false;
    const isFutureDate = data.page.date > todaysDate;
    return (!isDraft && !isFutureDate);
}

module.exports = () => {
    return {
        layout: 'layouts/update.njk',
        permalink: '/updates/{{ title | slugify }}/',
        ogtype: 'article', // Open Graph type
        "changefreq": "monthly", // Information for sitemap.xml
        "priority": "0.8", // Information for sitemap.xml
        eleventyComputed: {
            eleventyExcludeFromCollections: data => showDraft(data) ? data.eleventyExcludeFromCollections : true,
            permalink: data => showDraft(data) ? data.permalink : false,
        }
    }
}