import { compose, uniq, length, equals } from 'ramda';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Array -> Boolean
 */
const allEqual = compose(equals(1), length, uniq);

module.exports = allEqual;
