const pipe = require('ramda/src/pipe.js');
const curry = require('ramda/src/curry.js');
const path = require('ramda/src/path.js');
const map = require('ramda/src/map.js');
const apply = require('ramda/src/apply.js');
const equals = require('ramda/src/equals.js');

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
