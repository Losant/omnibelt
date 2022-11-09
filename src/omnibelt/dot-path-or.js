const useWith = require('ramda/src/useWith.js');
const identity = require('ramda/src/identity.js');
const pathOr = require('ramda/src/pathOr.js');
const split = require('ramda/src/split.js');

/**
 * If the given, non-null object has a value at the given dot-separated path, returns the
 * value at that path. Otherwise returns the provided default value. Path can be composed
 * of any combination of prop names and/or array indices.
 *
 * @see dotPath
 *
 * @signature a -> String -> Object<a> -> a
 *
 * @example
 *   dotPathOr('N/A', 'a.b', { a: { b: 1 } }); // => 1
 *   dotPathOr('N/A', 'invalid.key', { a: 1 }); // => 'N/A'
 *   dotPathOr('N/A', 'a.b.0', { a: { b: [1, 2, 3] } }); // => 1
 *   dotPathOr('N/A', 'a.b.0', { a: { b: 'not an arrray' } }); // => 'N/A'
 */
const dotPathOr = useWith(pathOr, [identity, split('.'), identity]);

module.exports = dotPathOr;
