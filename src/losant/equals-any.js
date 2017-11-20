const {
  flip, contains
} = require('ramda');

// equalsAny :: Array<* a> => a -> Boolean
const equalsAny = flip(contains);
module.exports = equalsAny;
