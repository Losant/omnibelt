const curry = require('ramda/src/curry.js');
const compose = require('ramda/src/compose.js');
const prop = require('ramda/src/prop.js');

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
