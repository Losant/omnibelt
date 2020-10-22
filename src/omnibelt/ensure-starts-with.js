const curry = require('ramda/src/curry');
const unless = require('ramda/src/unless');
const startsWith = require('ramda/src/startsWith');
const concat = require('ramda/src/concat');

/**
 * Ensures a string / array value starts with the specified prefix. If not, the
 * prefix is prepended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
const ensureStartsWith = curry((prefix, currentValue) =>
  unless(
    startsWith(prefix),
    concat(prefix)
  )(currentValue)
);

module.exports = ensureStartsWith;
