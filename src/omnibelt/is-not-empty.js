const complement = require('@pnpm/ramda/src/complement');
const isEmpty = require('@pnpm/ramda/src/isEmpty');

/**
 * Returns true if value is non-empty.
 *
 * @signature * -> Boolean
 */
const isNotEmpty = complement(isEmpty);

module.exports = isNotEmpty;
