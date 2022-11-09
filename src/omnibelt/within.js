const __ = require('@pnpm/ramda/src/__');
const curry = require('@pnpm/ramda/src/curry');
const gt = require('@pnpm/ramda/src/gt');
const lt = require('@pnpm/ramda/src/lt');
const both = require('@pnpm/ramda/src/both');

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
