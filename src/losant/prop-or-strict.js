import { curry, compose, prop } from 'ramda';

import defaultToStrict from './default-to-strict';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> String -> Object -> a|*
 */
const propOrStrict = curry((def, key, data) =>
  compose(
    defaultToStrict(def),
    prop(key),
  )(data)
);

module.exports = propOrStrict;
