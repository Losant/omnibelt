const {
  either, isNil, isEmpty,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// isNilOrEmpty :: * -> Boolean
const isNilOrEmpty = either(isNil, isEmpty);
module.exports = isNilOrEmpty;
