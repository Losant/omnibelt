const compose = require('ramda/src/compose');
const uniq = require('ramda/src/uniq');
const length = require('ramda/src/length');
const equals = require('ramda/src/equals');

/**
 * Checks to see if all elements in an array are the same.
 *
 * @func
 * @memberof module:losant
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
