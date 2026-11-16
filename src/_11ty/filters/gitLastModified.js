const { execFileSync } = require("child_process");

/**
 * Get the date of the last commit that touched a source file.
 *
 * The sitemap uses this for `<lastmod>`. Eleventy's default page date is the
 * file's creation time, which on a fresh CI checkout is the build time, so
 * every page would claim it changed today. Search engines ignore `lastmod`
 * values that are consistently wrong.
 *
 * CI must check out full history (`fetch-depth: 0`). With a shallow clone,
 * every file reports the same commit date.
 *
 * @param {String} inputPath - Eleventy `page.inputPath`
 * @return {String|null} ISO 8601 date, or null if git has no history for it
 */

const cache = new Map();

module.exports = function gitLastModified(inputPath) {
  if (!inputPath) return null;
  if (cache.has(inputPath)) return cache.get(inputPath);

  let date = null;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", inputPath], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    date = out || null;
  } catch (e) {
    date = null;
  }

  cache.set(inputPath, date);
  return date;
};
