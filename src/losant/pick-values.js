const { curry, pipe, pick, values } = require('ramda');


/**
 * Works like `pick` except it gives you back an array containing the values
 * for the specified keys instead of returning the entire object.
 *
 * @signature Array<String> -> Object -> Array<*>
 *
 * @example
 *     pickValues(['a', 'b'], { a: 1, b: 2, c: 3 }); // => [1, 2]
 *     pickValues(['b', 'a'], { a: 1, b: 2, c: 3 }); // => [2, 1]
 *     pickValues(['foo', 'bar'], { a: 1, b: 2, c: 3}); // => []
 */
const pickValues = curry((keys, object) =>
  pipe(
    pick(keys),
    values,
  )(object)
);

module.exports = pickValues;
