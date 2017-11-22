const {
  either, isNil, isEmpty,
} = require('ramda');

/**
 * Checks if a value is null, undefined, or an empty string.
 *
 * @signature * -> Boolean
 */
const isNilOrEmpty = either(isNil, isEmpty);

module.exports = isNilOrEmpty;
