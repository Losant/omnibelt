const curry = require('ramda/src/curry');
const unless = require('ramda/src/unless');
const endsWith = require('ramda/src/endsWith');
const concat = require('ramda/src/concat');
const flip = require('ramda/src/flip');

/**
 * Ensures a string / array value ends with the specified suffix. If not, the
 * suffix is appended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
module.exports = curry((suffix, currentValue) =>
  unless(
    endsWith(suffix),
    flip(concat)(suffix),
  )(currentValue)
);
