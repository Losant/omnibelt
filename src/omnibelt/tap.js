const curry = require('ramda/src/curry.js');

/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @signature (a -> *) -> a -> a
 *
 * @example
 *   tap((x) => return 'bar')('foo');   // 'foo'
 *   tap(console.log)('foo');           // 'foo' (and it will have been logged)
 *   compose(
 *     split,
 *     tap((x) => dbRemoveUserByName(x)), // unrelated, but you won't have a handle on this promise
 *     toLower,
 *   )('USER NAME');
 *   // ['u', 's', 'e', 'r', 'n', 'a', 'm', 'e']
 *   // And the promise will have been kicked off to remove that user by name
 */
const tap = curry((fn, x) => {
  fn(x);
  return x;
});

module.exports = tap;
