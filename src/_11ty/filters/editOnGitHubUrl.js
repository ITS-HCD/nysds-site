/**
 * Build an "Edit this page on GitHub" URL for a given page
 *
 * @param {Object} page - Eleventy page data
 * @return {String} GitHub edit URL
 */
module.exports = function(page) {
  const repo = "https://github.com/its-hcd/nysds-site";
  const branch = "main";
  const inputPath = page.inputPath || "";
  const relativePath = inputPath.replace("./", "");

  return `${repo}/edit/${branch}/${relativePath}`;
};