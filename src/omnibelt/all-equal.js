const compose = require('ramda/src/compose.js');
const uniq = require('ramda/src/uniq.js');
const length = require('ramda/src/length.js');
const equals = require('ramda/src/equals.js');

/**
 * Checks to see if all elements in an array are the same.
 *
 * @func
 * @memberof module:omnibelt
 * @name allEqual
 * @param {Array} array - An array of any values
 * @return {Boolean} True when all same, false otherwise
 * @summary Array -> Boolean
 *
 * @example
 * TODO
 */
const allEqual = compose(equals(1), length, uniq);

module.exports = allEqual;
