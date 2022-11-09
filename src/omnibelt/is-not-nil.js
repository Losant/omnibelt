const complement = require('@pnpm/ramda/src/complement');
const isNil = require('@pnpm/ramda/src/isNil');

/**
 * Takes a value and returns true if the value is neither null nor undefined;
 * returns false if not.
 *
 * @signature * -> Boolean
 */
const isNotNil = complement(isNil);

module.exports = isNotNil;
