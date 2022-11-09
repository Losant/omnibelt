const pipe = require('@pnpm/ramda/src/pipe');
const curry = require('@pnpm/ramda/src/curry');
const map = require('@pnpm/ramda/src/map');
const apply = require('@pnpm/ramda/src/apply');

const dotPath = require('./dot-path');
const equalsShallow = require('./equals-shallow');

/**
 * Useful for doing comparing two objects (e.g. component props or state) to see if a
 * particular property value has changed. Accepts either a standard key name or a
 * dot-separated path for the property to check and does a shallow equality check on the
 * property values.
 *
 * @signature String -> Object -> Object -> Boolean
 *
 * @example
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 1 }); // => true
 *   eqDotPathsShallow('foo', { foo: 1 }, { foo: 2 }); // => false
 *   eqDotPathsShallow('a', { a: [1, 2, 3] }, { a: [1, 2, 3] }); // => true
 *   eqDotPathsShallow('a', { a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } }); // false
 */
const eqDotPathsShallow = curry((stringPath, a, b) =>
  pipe(
    map(dotPath(stringPath)),
    apply(equalsShallow)
  )([a, b])
);

module.exports = eqDotPathsShallow;
