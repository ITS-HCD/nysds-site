module.exports = {
    buildDate: new Date(),
    url: process.env.NETLIFY === 'true'
        ? './'
        : process.env.ELEVENTY_ENV === 'development'
            ? 'http://localhost:8080'
            : 'https://designsystem.ny.gov',
    title: process.env.ELEVENTY_ENV === 'development' ? '🔴 New York State Design System' : 'New York State Design System',
    description: "Guidelines, components, and tools for building digital services in New York State.",
    crawl: false,
};
