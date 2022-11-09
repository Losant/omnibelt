const curry = require('ramda/src/curry.js');

/**
 * A safe version of `try/catch` that returns an [error, result] tuple instead
 * of throwing an error.
 *
 * @signature Function -> Array<*> -> Array<?Error, *>
 *
 * @example
 *   const [error, result] = tryCatchSafe(someFnThatMightThrow, [arg1, arg2]);
 */
const tryCatchSafe = curry((tryFn, args) => {
  try {
    const result = tryFn(...args);
    return [null, result];
  } catch (error) {
    return [error, null];
  }
});

module.exports = tryCatchSafe;
