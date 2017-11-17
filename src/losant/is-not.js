const {
  complement, is,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// isNot :: * -> Boolean
const isNot = complement(is);
module.exports = isNot;
