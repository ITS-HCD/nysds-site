declare type Attributes = Object & {
    [key: string]: string | boolean;
};
declare const selfClosingTags: string[];
declare function isObject(obj: Attributes | undefined | null): boolean;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attributes as key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Set to true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements).
 * @param {boolean} trailingSlash Boolean representing if a self closing element should contain a trailing slash.
 * @returns {string} A string representing the HTML element.
 */
declare function getTag(tag: string, textContent?: string | null, attributes?: Attributes | null, selfClosing?: boolean, trailingSlash?: boolean): string;
