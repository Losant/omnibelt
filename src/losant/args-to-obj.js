import { pipe, zipObj } from 'ramda';

import list from './list';

/**
 * Converts function arguments to an object based on the provided array of keys.
 * If an argument is passed that doesn't have a key it will be skipped.
 *
 * @signature [k1, k2, k3] -> (a, b, c, d) -> { k1: a, k2: b, k3: c }
 *
 * @example
 *     argsToObj(['foo', 'bar'])(1, 2); // { foo: 1, bar: 2 }
 *
 *     function foo() {
 *       return argsToObj(['a', 'b', 'c'])(arguments);
 *     }
 *     foo(1, 2, 3, 4); // { a: 1, b: 2, c: 3 }
 */
const argsToObj = (keys) => pipe(list, zipObj(keys));

module.exports = argsToObj;
