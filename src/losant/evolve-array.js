const {
  zipWith, call,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

const evolveArray = zipWith(call);
module.exports = evolveArray;
