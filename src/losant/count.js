const countBy = require('ramda/src/countBy');
const identity = require('ramda/src/identity');

/**
 * `countBy` the raw values in an array (`identity`). All values are
 * coerced to strings.
 *
 * @func
 * @memberof module:losant
 * @name count
 * @param {Array} toCount - list of elements to count
 * @return {Object} Where keys are the elements of `toCount` and the values are the number of occurrences
 * @summary [a] → { a: Number }
 * @see `R.countBy`
 *
 * @example
 * count([1, 1, 2]);       // { '1': 2, '2': 1 }
 * count(['a', 'b', 'a']); // { a: 2, b: 1 }
 */
const count = countBy(identity);

module.exports = count;
