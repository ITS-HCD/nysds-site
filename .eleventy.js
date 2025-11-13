/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

// plugins
const eleventyPluginNavigation = require("@11ty/eleventy-navigation");
const eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
const timeToRead = require('eleventy-plugin-time-to-read');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { execSync } = require('child_process')

// filters
const limit = require("./src/_11ty/filters/limit.js");
const dateISO = require("./src/_11ty/filters/date.js").dateISO;
const dateFull = require("./src/_11ty/filters/date.js").dateFull;
const dateFullWeekday = require("./src/_11ty/filters/date.js").dateFullWeekday;
const dateFeed = require("./src/_11ty/filters/date.js").dateFeed;
const dateYear = require("./src/_11ty/filters/date.js").dateYear;
const shuffle = require("./src/_11ty/filters/shuffle.js");
const excludeDrafts = require("./src/_11ty/filters/excludeDrafts.js");
const excludeFuture = require("./src/_11ty/filters/excludeFuture.js");
const excludeNoIndex = require("./src/_11ty/filters/excludeNoIndex.js");
const byCategory = require("./src/_11ty/filters/byCategory.js");
const sortBySeriesOrder = require("./src/_11ty/filters/sortBySeriesOrder.js");
const onlySeries = require("./src/_11ty/filters/onlySeries.js");
const editOnGitHubUrl = require("./src/_11ty/filters/editOnGitHubUrl.js");
const authorAvatar = require("./src/_11ty/filters/authorAvatar.js");
const hasReleaseTag = require("./src/_11ty/filters/hasReleaseTag.js");

// collections
const updates = require("./src/_11ty/collections/updates");
const components = require("./src/_11ty/collections/components");
const sections = require("./src/_11ty/collections/sections");
const tokens = require("./src/_11ty/collections/tokens");
const videos = require("./src/_11ty/collections/videos");

module.exports = async function (eleventyConfig) {
    // This script adds ids to all headings in the DOM
	const { IdAttributePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(IdAttributePlugin, {
		selector: "h1,h2,h3,h4,h5,h6", // default

		// swaps html entities (like &amp;) to their counterparts before slugify-ing
		decodeEntities: true,

		// check for duplicate `id` attributes in application code?
		checkDuplicates: "error", // `false` to disable

		// by default we use Eleventy’s built-in `slugify` filter:
		slugify: eleventyConfig.getFilter("slugify"),

		filter: function({ page }) {
			if(page.inputPath.endsWith("test-skipped.html")) {
				return false; // skip
			}

			return true;
		}
	});

    // filters
    eleventyConfig.addFilter("dateISO", dateISO);
    eleventyConfig.addFilter("dateFull", dateFull);
    eleventyConfig.addFilter("dateFullWeekday", dateFullWeekday);
    eleventyConfig.addFilter("dateFeed", dateFeed);
    eleventyConfig.addFilter("dateYear", dateYear);
    eleventyConfig.addFilter("limit", limit);
    eleventyConfig.addFilter("shuffle", shuffle);
    eleventyConfig.addFilter("excludeDrafts", excludeDrafts);
    eleventyConfig.addFilter("excludeFuture", excludeFuture);
    eleventyConfig.addFilter("excludeNoIndex", excludeNoIndex);
    eleventyConfig.addFilter("byCategory", byCategory);
    eleventyConfig.addFilter("sortBySeriesOrder", sortBySeriesOrder);
    eleventyConfig.addFilter("onlySeries", onlySeries);
    eleventyConfig.addFilter("editOnGitHubUrl", editOnGitHubUrl);
    eleventyConfig.addFilter("authorAvatar", authorAvatar);
    eleventyConfig.addFilter("hasReleaseTag", hasReleaseTag);


    // collections
    eleventyConfig.addCollection("updates", updates);
    eleventyConfig.addCollection("components", components);
    eleventyConfig.addCollection("sections", sections);
    eleventyConfig.addCollection("tokens", tokens);
    eleventyConfig.addCollection("videos", videos);

    // plugins
    eleventyConfig.addPlugin(eleventyPluginNavigation);
    eleventyConfig.addPlugin(eleventyPluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(timeToRead, { style: 'short' });
    
    eleventyConfig.addShortcode("youtube", (videoURL, title) => {
        const url = new URL(videoURL);
        const id = url.searchParams.get("v");

        return `
                <iframe class="yt-shortcode"
                src="https://www.youtube-nocookie.com/embed/${id}"
                title="YouTube video player${title ? ` for ${title}` : ""}"
                frameborder="0"
                allowfullscreen>
                </iframe>`;
    });
    // watch for changes to css
    eleventyConfig.addWatchTarget("./src/css/");

    // passthrough copy
    eleventyConfig.addPassthroughCopy({ "./src/static/": "/" });
    eleventyConfig.addPassthroughCopy("./src/assets/img/");
    eleventyConfig.addPassthroughCopy("./src/assets/i/"); // Images reference in pages
    eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/js/");
    eleventyConfig.addPassthroughCopy("./src/assets/files/");
    eleventyConfig.addPassthroughCopy("./src/robots.txt"); 
    eleventyConfig.addPassthroughCopy("./src/favicon.svg"); 
    eleventyConfig.addPassthroughCopy("./CNAME"); 
    eleventyConfig.addPassthroughCopy("./src/stepper-pages/");

    eleventyConfig.on('eleventy.after', () => {
        execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
    })

    // base config
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };

};