const curry = require('@pnpm/ramda/src/curry');
const unless = require('@pnpm/ramda/src/unless');
const endsWith = require('@pnpm/ramda/src/endsWith');
const concat = require('@pnpm/ramda/src/concat');
const flip = require('@pnpm/ramda/src/flip');

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
