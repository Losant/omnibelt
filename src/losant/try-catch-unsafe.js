const { curry } = require('ramda');

const tryCatchSafe = require('./try-catch-safe');

/**
 * Wrapper around `try/catch` that takes a custom error as its first argument;
 * the custom error will be thrown instead of whatever the actual error was
 * that occurred.
 *
 * @signature Error -> Function -> Array<*> -> *
 *
 * @throws {Error} The error that was given as the first value.
 *
 * @param {Error}    errorToThrow An error instance to throw instead of the caught error.
 * @param {Function} tryFn        The function to wrap in a `try/catch` block.
 * @param {Array<*>} args         The args to pass to `tryFn`.
 *
 * @return {*} The result of calling `tryFn` with `args` (if it succeeds).
 */
const tryCatchUnsafe = curry((errorToThrow, tryFn, args) => {
  const [error, result] = tryCatchSafe(tryFn, args);

  if (error) {
    throw errorToThrow;
  }

  return result;
});

module.exports = tryCatchUnsafe;
