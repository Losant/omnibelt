const either = require('ramda/src/either.js');
const isNil = require('ramda/src/isNil.js');
const isEmpty = require('ramda/src/isEmpty.js');

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
