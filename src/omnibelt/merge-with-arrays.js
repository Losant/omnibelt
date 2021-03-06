const mergeWith = require('lodash/fp/mergeWith');
const concat = require('ramda/src/concat');
const is = require('ramda/src/is');

/**
 * A merge that also handles arrays.
 *
 * @signature Object -> Object -> Object
 *
 * @example
 *   mergeWithArrays({
 *     foo: [1, 2, 3],
 *     bar: 'first',
 *     baz: true,
 *   }, {
 *     foo: [4, 5],
 *     bar: 'second',
 *   });
 *   // {
 *   //   foo: [1, 2, 3, 4, 5],
 *   //   bar: 'second',
 *   //   baz: true,
 *   // }
 */
const mergeWithArrays =
  mergeWith(
    (x, y) => {
      if (is(Array, x)) { return concat(x, y); }
      // return `undefined` so `mergeWith` does default
    }
  );

module.exports = mergeWithArrays;
