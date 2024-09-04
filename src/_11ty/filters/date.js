const { DateTime } = require("luxon");

/**
 * Format dates to ISO
 *
 * @param {Date} date - JS date
 * @return {String} formatted date
 */

const dateISO = function(date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.toISO();
};

/**
 * Format dates to readable
 *
 * @param {Date} date - JS date
 * @param {String} locale - locale code
 * @return {String} formatted date
 */

const dateFull = function(date, locale = "en") {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL);
};

/**
 * Format dates to readable w/ weekday
 *
 * @param {Date} date - JS date
 * @param {String} locale - locale code
 * @return {String} formatted date
 */

const dateFullWeekday = function(date, locale = "en") {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL_WITH_WEEKDAY);
};

/**
 * Get year from date
 *
 * @param {Date} date - JS date
 * @return {String} formatted year
 */

const dateYear = function(date) {
    const jsDate = new Date(date);
    const fullYear = jsDate.getFullYear();
    return fullYear;
}

/**
 * Format date for feeds
 *
 * @param {Date} date - JS date
 * @return {String} formatted year
 */

const dateFeed = function(date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.toHTTP();
}

module.exports = { dateISO, dateFull, dateFullWeekday, dateFeed, dateYear };