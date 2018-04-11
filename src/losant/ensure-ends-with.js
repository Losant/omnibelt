const curry = require('ramda/src/curry');
const unless = require('ramda/src/unless');
const endsWith = require('ramda/src/endsWith');
const concat = require('ramda/src/concat');
const flip = require('ramda/src/flip');

/**
 * Ensures a string / array value ends with the specified prefix. If not, the
 * prefix is appended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
const ensureStartsWith = curry((prefix, currentValue) =>
  unless(
    endsWith(prefix),
    flip(concat)(prefix),
  )(currentValue)
);

module.exports = ensureStartsWith;
