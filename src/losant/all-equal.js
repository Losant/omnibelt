const { compose, uniq, length, equals } = require('ramda');

// TODO: TESTS
// TODO: DOCS

// allEqual :: Array -> Boolean
const allEqual = compose(equals(1), length, uniq);
module.exports = allEqual;
