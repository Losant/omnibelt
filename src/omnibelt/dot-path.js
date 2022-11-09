const useWith = require('@pnpm/ramda/src/useWith');
const identity = require('@pnpm/ramda/src/identity');
const path = require('@pnpm/ramda/src/path');
const split = require('@pnpm/ramda/src/split');

/**
 * Gets a prop value using a dot-separated path composed of any combination of prop names
 * and/or array indices.
 *
 * @signature String -> Object -> *
 *
 * @example
 *   dotPath('a.b', { a: { b: 1 } }); // => 1
 *   dotPath('foo', { foo: 'bar' }); // => 'bar'
 *   dotPath('a.0', { a: [1, 2, 3] }); // => 1
 *   dotPath('0', ['foo', 'bar']); // => 'foo'
 *   dotPath('0.0', [[1, 2, 3]]); // => 1
 */
const dotPath = useWith(path, [split('.'), identity]);

module.exports = dotPath;
