const pipe = require('ramda/src/pipe');

const list = require('./list');
const tryCatchSafe = require('./try-catch-safe');

/**
 * A safe version of `JSON.parse` that returns an [error, result] tuple instead
 * of throwing an error.
 *
 * @signature * -> Array<?SyntaxError, *>
 *
 * @example
 *     const [error, result] = jsonParseSafe('{ "foo": "bar" }'); // => [null, { foo: 'bar' }]
 *     const [error, result] = jsonParseSafe('{'); // => [SyntaxError, null]
 */
const jsonParseSafe = pipe(
  list,
  tryCatchSafe(JSON.parse),
);

module.exports = jsonParseSafe;
