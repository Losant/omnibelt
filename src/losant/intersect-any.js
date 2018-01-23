import {
  filter, gt, __, compose, unnest, keys, map, unless, equals,
} from 'ramda';

import count from './count';

const gt1 = gt(__, 1);

// :: String -> String | Number
const parseIntIfPossible =
  unless(
    compose(equals(NaN), parseInt),
    parseInt,
  );

/**
 * Finds *any* intersections between any number of lists.
 *
 * @signature [[String | Number a]] -> [a]
 *
 * @example
 *   intersectAny([[1, 2, 3], [5, 6, 9], [3, 9]])            // => [3, 9]
 *   intersectAny([['foo', 'bar'], ['baz'], ['bar', 'qux']]) // => ['bar']
 */
// TODO: Handle strings that look like numbers. See tests.
const intersectAny =
  compose(
    map(parseIntIfPossible),
    keys,
    filter(gt1),
    count,
    unnest
  );

module.exports = intersectAny;
