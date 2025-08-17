/**
 * Build avatar display data from author metadata.
 * - If avatar is provided, use it.
 * - If not, use default avatar.
 *
 * @param {string | undefined} author - Author full name (for alt text).
 * @param {string | undefined} authorAvatar - Optional image path for author avatar.
 * @returns {{
 *   alt: string,
 *   src: string,
 * }}
 */
module.exports = function(author, authorAvatar) {
  const alt = author || "NYS Design System Team";
  const src = authorAvatar || "/assets/img/authors/default.png";

  return { alt, src };
};