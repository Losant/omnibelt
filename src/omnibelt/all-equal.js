const compose = require('@pnpm/ramda/src/compose');
const uniq = require('@pnpm/ramda/src/uniq');
const length = require('@pnpm/ramda/src/length');
const equals = require('@pnpm/ramda/src/equals');

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
