const either = require('@pnpm/ramda/src/either');
const isNil = require('@pnpm/ramda/src/isNil');
const isEmpty = require('@pnpm/ramda/src/isEmpty');

/**
 * Checks if a value is null, undefined, an empty string, an empty object, an empty array.
 *
 * @see R.isNil
 * @see R.isEmpty
 *
 * @signature * -> Boolean
 */
const isNilOrEmpty = either(isNil, isEmpty);

module.exports = isNilOrEmpty;
