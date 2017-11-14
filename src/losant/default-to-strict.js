const {
  curry, when, either, isNil, complement, always,
} = require('ramda');
const isPopulatedString = require('./is-populated-string');

// TODO: TESTS
// TODO: DOCS

// defaultToStrict :: * a => * b -> a|b
const defaultToStrict = curry((def, val) => {
  return when(
    either(isNil, complement(isPopulatedString)),
    always(def),
  )(val);
});
module.exports = defaultToStrict;
