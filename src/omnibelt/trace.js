/* eslint-disable no-console */

const curry = require('ramda/src/curry.js');

/**
 * Effectively a curried `console.log` that also returns it's input.
 *
 * @signature String -> a -> a
 *
 * @example
 *   trace('The meaning of life: ', 42);   // 42
 *
 *   pipe(
 *     identity
 *     trace('The meaning of life: ')      // 42
 *     // ...
 *   )(42)
 */
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

module.exports = trace;
