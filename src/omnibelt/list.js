const unapply = require('ramda/src/unapply.js');
const identity = require('ramda/src/identity.js');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature *... -> Array<*>
 */
const list = unapply(identity);

module.exports = list;
