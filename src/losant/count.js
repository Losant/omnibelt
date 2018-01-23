const countBy = require('ramda/src/countBy');
const identity = require('ramda/src/identity');

/**
 * `countBy` the raw values in an array (`identity`). All values are
 * coerced to strings.
 *
 * @signature [a] → {*}
 * @see `R.countBy`.
 *
 * @example
 *   count([1, 1, 2]);           // { '1': 2, '2': 1 }
 *   count(['a', 'b', 'a']);     // { a: 2, b: 1 }
 */
const count = countBy(identity);

module.exports = count;
