const __ = require('ramda/src/__');
const filter = require('ramda/src/filter');
const gt = require('ramda/src/gt');
const compose = require('ramda/src/compose');
const unnest = require('ramda/src/unnest');
const keys = require('ramda/src/keys');
const map = require('ramda/src/map');
const unless = require('ramda/src/unless');
const equals = require('ramda/src/equals');

const count = require('./count');

const gt1 = gt(__, 1);

// :: String -> String | Number
const parseIntIfPossible =
  unless(
    compose(equals(NaN), parseInt),
    parseInt
  );

/**
 * Finds *any* intersections between any number of lists.
 *
 * TODO: Handle strings that look like numbers. See tests.
 *
 * @signature [[String | Number a]] -> [a]
 *
 * @example
 *   intersectAny([[1, 2, 3], [5, 6, 9], [3, 9]])            // => [3, 9]
 *   intersectAny([['foo', 'bar'], ['baz'], ['bar', 'qux']]) // => ['bar']
 */
const intersectAny =
  compose(
    map(parseIntIfPossible),
    keys,
    filter(gt1),
    count,
    unnest
  );

module.exports = intersectAny;
