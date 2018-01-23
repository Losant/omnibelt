import { curry, gt, lt, __, both } from 'ramda';

/**
 * @signature Number -> Number -> Number -> Boolean
 */
const within = curry(
  (start, end, value) =>
    both(
      gt(__, start),
      lt(__, end)
    )(value)
);

module.exports = within;
