const curry = require('ramda/src/curry.js');
const unless = require('ramda/src/unless.js');
const endsWith = require('ramda/src/endsWith.js');
const concat = require('ramda/src/concat.js');
const flip = require('ramda/src/flip.js');

/**
 * Ensures a string / array value ends with the specified suffix. If not, the
 * suffix is appended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
module.exports = curry((suffix, currentValue) =>
  unless(
    endsWith(suffix),
    flip(concat)(suffix)
  )(currentValue)
);
