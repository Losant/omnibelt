const pipe = require('@pnpm/ramda/src/pipe');
const curry = require('@pnpm/ramda/src/curry');
const path = require('@pnpm/ramda/src/path');
const map = require('@pnpm/ramda/src/map');
const apply = require('@pnpm/ramda/src/apply');
const equals = require('@pnpm/ramda/src/equals');

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
