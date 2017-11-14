const {
  curry, compose, prop,
} = require('ramda');
const defaultToStrict = require('./default-to-strict');

// TODO: TESTS
// TODO: DOCS

// propOrStrict :: * a => String => Object -> a|*
const propOrStrict = curry((def, key, data) => {
  return compose(
    defaultToStrict(def),
    prop(key),
  )(data);
});
module.exports = propOrStrict;
