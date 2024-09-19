"use strict";
const selfClosingTags = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
function isObject(obj) {
    if (!obj)
        return false;
    return typeof obj === 'object' && obj.constructor === Object;
}
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attributes as key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Set to true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements).
 * @param {boolean} trailingSlash Boolean representing if a self closing element should contain a trailing slash.
 * @returns {string} A string representing the HTML element.
 */
function getTag(tag, textContent, attributes, selfClosing, trailingSlash) {
    if (!tag || typeof tag !== 'string') {
        throw new Error('Invalid HTML tag name. The first parameter `tag` is required and must be a string');
    }
    let attrs = '';
    tag = tag.toLowerCase();
    selfClosing = selfClosingTags.includes(tag) || selfClosing;
    if (isObject(attributes)) {
        for (const key in attributes) {
            attrs += `${key}="${attributes[key]}" `;
        }
    }
    const closingChars = (selfClosing && trailingSlash) ? ' />' : '>';
    const openingTag = `<${tag} ${attrs}`.trim() + closingChars;
    const closingTag = selfClosing ? '' : `</${tag}>`;
    if (selfClosing) {
        return openingTag;
    }
    return `${openingTag}${textContent || ''}${closingTag}`;
}
module.exports = getTag;
