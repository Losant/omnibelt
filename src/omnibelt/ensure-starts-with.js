const curry = require('@pnpm/ramda/src/curry');
const unless = require('@pnpm/ramda/src/unless');
const startsWith = require('@pnpm/ramda/src/startsWith');
const concat = require('@pnpm/ramda/src/concat');

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
