const curry = require('ramda/src/curry.js');
const unless = require('ramda/src/unless.js');
const startsWith = require('ramda/src/startsWith.js');
const concat = require('ramda/src/concat.js');

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
