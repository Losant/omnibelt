const { compose, uniq, length, equals } = require('ramda');

// TODO: TESTS
// TODO: DOCS

// allEqual :: Array -> Boolean
const allEqual = compose(uniq, length, equals(1));
module.exports = allEqual;
