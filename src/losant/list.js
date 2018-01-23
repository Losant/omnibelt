const unapply = require('ramda/src/unapply');
const identity = require('ramda/src/identity');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature *... -> Array<*>
 */
const list = unapply(identity);

module.exports = list;
