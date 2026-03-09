/**
 * Build avatar display data from author metadata.
 * Uses a global author → image mapping from _data/authors.json.
 * Falls back to a default avatar if no match is found.
 *
 * @param {string | undefined} author - Author full name (e.g. "Jane Doe").
 * @returns {{
 *   alt: string,
 *   src: string
 * }}
 */
module.exports = function getAuthorAvatar(author) {
  const authors = require("../../_data/authors.json");

  if (author && authors[author]) {
    return {
      src: authors[author],
      alt: author
    };
  }

  return {
    src: authors._default,
    alt: "NYS Design System Team"
  };
};
