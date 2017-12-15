const { pipe, curry, path, map, apply, equals } = require('ramda');

const list = require('./list');

/**
 * Takes a path to check and two objects and checks if the value at that path
 * is equal for both objects.
 *
 * @signature Array<String> -> Object -> Object -> Boolean
 */
const eqPaths = curry((pathToCheck, a, b) =>
  pipe(
    list,
    map(path(pathToCheck)),
    apply(equals),
  )(a, b)
);

module.exports = eqPaths;
