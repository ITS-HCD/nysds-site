const todaysDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Etc/GMT+5' }));
const tomorrowsDate = new Date(todaysDate);
tomorrowsDate.setDate(todaysDate.getDate() + 1);
tomorrowsDate.setHours(0, 0, 0, 0);

console.log('todaysDate', todaysDate);
console.log('tomorrowsDate', tomorrowsDate);

function showDraft(data) {
    const isDraft = 'draft' in data && data.draft !== false;
    const isFutureDate = data.page.date >= tomorrowsDate;
    return (!isDraft && !isFutureDate);
}

module.exports = () => {
    return {
        layout: 'layouts/update.njk',
        permalink: '/updates/{{ title | slugify }}/',
        section: 'Updates',
        ogtype: 'article',
        "changefreq": "monthly",
        "priority": "0.8",
        eleventyComputed: {
            eleventyExcludeFromCollections: data => showDraft(data) ? data.eleventyExcludeFromCollections : true,
            permalink: data => showDraft(data) ? data.permalink : false,
        }
    }
}