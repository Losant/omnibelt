const mergeDeepWithArrays = require('./merge-deep-with-arrays');

/**
 * A merge that also handles arrays.
 *
 * @deprecated
 * This a deep merge, but our regular `merge` function is a shallow merge, so this has
 * been renamed to `mergeDeepWithArrays`. Leaving an alias here temporarily until we can
 * make sure we update any instances where we're using `mergeWithArrays`.
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
const mergeWithArrays = mergeDeepWithArrays;

module.exports = mergeWithArrays;
