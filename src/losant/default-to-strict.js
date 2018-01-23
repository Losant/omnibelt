import { curry, when, either, isNil, complement, always } from 'ramda';

import isPopulatedString from './is-populated-string';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> * b -> a|b
 */
const defaultToStrict = curry((def, val) =>
  when(
    either(isNil, complement(isPopulatedString)),
    always(def),
  )(val)
);

module.exports = defaultToStrict;
