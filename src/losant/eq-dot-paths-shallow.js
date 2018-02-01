const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');

const dotPath = require('./dot-path');
const equalsShallow = require('./equals-shallow');

/**
 * Useful for doing comparing two objects (e.g. component props or state) to see if a
 * particular property value has changed. Accepts either a standard key name or a
 * dot-separated path for the property to check and does a shallow equality check on the
 * property values.
 *
 * @signature String -> Object -> Object -> Boolean
 */
const eqDotPathsShallow = curry((stringPath, a, b) =>
  pipe(
    map(dotPath(stringPath)),
    apply(equalsShallow),
  )([a, b])
);

module.exports = eqDotPathsShallow;
