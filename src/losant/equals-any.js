import { flip, contains } from 'ramda';

/**
 * @signature Array<* a> -> a -> Boolean
 */
const equalsAny = flip(contains);

module.exports = equalsAny;
