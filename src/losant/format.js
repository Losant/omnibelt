const { curryN } = require('ramda');
const stringFormat = require('string-format');

/**
 * Formats a string.
 *
 * @signature String -> String | Object -> String
 */
const format = curryN(2, stringFormat);

module.exports = format;
