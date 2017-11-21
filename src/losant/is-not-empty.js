const { complement, isEmpty } = require('ramda');

/**
 * Returns true if value is non-empty.
 *
 * @signature * -> Boolean
 */
const isNotEmpty = complement(isEmpty);

module.exports = isNotEmpty;
