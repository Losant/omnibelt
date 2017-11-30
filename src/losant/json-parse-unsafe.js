const { curry } = require('ramda');

const list = require('./list');
const tryCatchUnsafe = require('./try-catch-unsafe');


/**
 * Unsafe wrapper around `JSON.parse` that accepts a custom error to throw
 * instead of a generic syntax error.
 *
 * @signature Error -> * -> *
 *
 * @throws {Error} The error that was given as the first value.
 *
 * @param {Error} errorToThrow An error instance to throw if parsing fails.
 * @param {*}     value        The value to parse.
 *
 * @return {*} The parsed value (if it succeeds).
 */
const jsonParseUnsafe = curry((errorToThrow, value) => {
  return tryCatchUnsafe(errorToThrow, JSON.parse, list(value));
});

module.exports = jsonParseUnsafe;
