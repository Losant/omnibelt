const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const path = require('ramda/src/path');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');
const equals = require('ramda/src/equals');

/**
 * Takes a path to check and two objects and checks if the value at that path
 * is equal for both objects.
 *
 * @signature Array<String> -> Object -> Object -> Boolean
 */
const eqPaths = curry((pathToCheck, a, b) =>
  pipe(
    map(path(pathToCheck)),
    apply(equals)
  )([a, b])
);

module.exports = eqPaths;
