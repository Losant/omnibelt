const unapply = require('@pnpm/ramda/src/unapply');
const identity = require('@pnpm/ramda/src/identity');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature *... -> Array<*>
 */
const list = unapply(identity);

module.exports = list;
