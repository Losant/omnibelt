const pipe = require('ramda/src/pipe');
const zipObj = require('ramda/src/zipObj');

const list = require('./list');

/**
 * Converts function arguments to an object based on the provided array of keys.
 * If an argument is passed that doesn't have a key it will be skipped.
 *
 * @func
 * @memberof module:losant
 * @name argsToObj
 * @param {Array} keys - A list of props to assign arguments to (in order)
 * @param {Arguments} args - Arguments to match to `keys` (in order)
 * @return {Object} Object of `keys` matched with `args`
 * @summary [k1, k2, k3] -> (a, b, c, d) -> { k1: a, k2: b, k3: c }
 *
 * @example
 * argsToObj(['foo', 'bar'])(1, 2); // { foo: 1, bar: 2 }
 *
 * function foo() {
 *   return argsToObj(['a', 'b', 'c'])(arguments);
 * }
 * foo(1, 2, 3, 4); // { a: 1, b: 2, c: 3 }
 */
const argsToObj = (keys) => pipe(list, zipObj(keys));

module.exports = argsToObj;
