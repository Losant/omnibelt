const {
  complement, is,
} = require('ramda');

/**
 * Checks if a value is not of a certain type (i.e. the opposite of `is`).
 *
 * @signature * type -> * value -> Boolean
 */
const isNot = complement(is);

module.exports = isNot;
