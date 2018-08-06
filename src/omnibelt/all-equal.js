import { compose, uniq, length, equals } from 'ramda';

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

export default allEqual;
