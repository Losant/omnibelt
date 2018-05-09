const curry = require('ramda/src/curry');
const compose = require('ramda/src/compose');
const prop = require('ramda/src/prop');

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
    prop(key),
  )(data)
);

module.exports = propOrStrict;
