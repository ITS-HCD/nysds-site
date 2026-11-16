/**
 * Serialize structured data for a `<script type="application/ld+json">` tag.
 *
 * Escapes `<` so text such as a `</script>` inside a title or description
 * can't close the script element early. Drops keys whose value is null,
 * undefined, or an empty string, so templates can pass optional fields as-is.
 *
 * @param {Object} data - Schema.org object
 * @return {String} JSON safe to place inside a script element
 */

module.exports = function jsonLd(data) {
  const json = JSON.stringify(data, (key, value) =>
    value === null || value === undefined || value === "" ? undefined : value
  );
  return json.replace(/</g, "\\u003c");
};
