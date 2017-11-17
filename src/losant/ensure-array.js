const {
  when, always,
} = require('ramda');
const isNot = require('./is-not');

// TODO: TESTS
// TODO: DOCS

// ensureArray :: * a -> Array a
const ensureArray = when(isNot(Array), always([]));
module.exports = ensureArray;
