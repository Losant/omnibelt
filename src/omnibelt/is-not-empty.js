const complement = require('ramda/src/complement.js');
const isEmpty = require('ramda/src/isEmpty.js');

/**
 * Returns true if value is non-empty.
 *
 * @signature * -> Boolean
 */
const isNotEmpty = complement(isEmpty);

module.exports = isNotEmpty;
