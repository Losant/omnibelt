const compose = require('ramda/src/compose');
const uniq = require('ramda/src/uniq');
const length = require('ramda/src/length');
const equals = require('ramda/src/equals');

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Array -> Boolean
 */
const allEqual = compose(equals(1), length, uniq);

module.exports = allEqual;
