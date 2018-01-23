const either = require('ramda/src/either');
const isNil = require('ramda/src/isNil');
const isEmpty = require('ramda/src/isEmpty');

/**
 * Checks if a value is null, undefined, or an empty string.
 *
 * @signature * -> Boolean
 */
const isNilOrEmpty = either(isNil, isEmpty);

module.exports = isNilOrEmpty;
