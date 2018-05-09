const __ = require('ramda/src/__');
const curry = require('ramda/src/curry');
const gt = require('ramda/src/gt');
const lt = require('ramda/src/lt');
const both = require('ramda/src/both');

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
