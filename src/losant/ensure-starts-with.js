const {
  curry, unless, startsWith, concat,
} = require('ramda');

/**
 * Ensures a string / array value starts with the specified prefix. If not, the
 * prefix is prepended to the value.
 *
 * @signature String|Array -> String|Array -> String|Array
 */
const ensureStartsWith = curry((prefix, currentValue) =>
  unless(
    startsWith(prefix),
    concat(prefix),
  )(currentValue)
);

module.exports = ensureStartsWith;
