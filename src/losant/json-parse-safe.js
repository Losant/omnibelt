import { pipe } from 'ramda';

import list from './list';
import tryCatchSafe from './try-catch-safe';

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
