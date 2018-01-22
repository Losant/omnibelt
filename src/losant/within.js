const { curry, gt, lt, __, both } = require('ramda');

// within :: Number -> Number -> Number -> Boolean
const within = curry(
  (start, end, value) =>
    both(
      gt(__, start),
      lt(__, end)
    )(value)
);

module.exports = within;
