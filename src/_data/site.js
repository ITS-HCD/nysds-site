module.exports = {
    buildDate: new Date(),
    url: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://designsystem.ny.gov/',
    title: process.env.ELEVENTY_ENV === 'development' ? '🔴 Excelsior Design System' : 'Excelsior Design System',
    description: "Guidelines, components, and tools for building digital services in New York State.",
    crawl: false,
};
