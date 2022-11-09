const curry = require('@pnpm/ramda/src/curry');
const compose = require('@pnpm/ramda/src/compose');
const prop = require('@pnpm/ramda/src/prop');

const defaultToStrict = require('./default-to-strict');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature * a -> String -> Object -> a|*
 */
const propOrStrict = curry((def, key, data) =>
  compose(
    defaultToStrict(def),
    prop(key)
  )(data)
);

module.exports = propOrStrict;
