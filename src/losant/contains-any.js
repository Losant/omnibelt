import { curry, pipe, intersection } from 'ramda';

import isNotEmpty from './is-not-empty';

/**
 * Takes two arrays and returns true if any of the values in the first array
 * are found in the second array.
 *
 * @signature Array<* a> -> Array<* a> -> Boolean
 */
const containsAny = curry((needleList, haystackList) =>
  pipe(
    intersection(needleList),
    isNotEmpty,
  )(haystackList)
);

module.exports = containsAny;
