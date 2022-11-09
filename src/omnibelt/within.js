const __ = require('ramda/src/__.js');
const curry = require('ramda/src/curry.js');
const gt = require('ramda/src/gt.js');
const lt = require('ramda/src/lt.js');
const both = require('ramda/src/both.js');

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
