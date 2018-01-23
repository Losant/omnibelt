const complement = require('ramda/src/complement');
const isEmpty = require('ramda/src/isEmpty');

/**
 * Returns true if value is non-empty.
 *
 * @signature * -> Boolean
 */
const isNotEmpty = complement(isEmpty);

module.exports = isNotEmpty;
