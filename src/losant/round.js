const { compose, curryN, flip } = require('ramda');
const _ = require('lodash');

/**
 * Curried FP version of `lodash.round`
 * NOTE: `lodash/fp.round` has a fixed arity of one, therefore
 *       a precision cannot be specified.
 *
 * @signature Number -> Number -> Number
 * @see lodash.round
 */
const round = compose(flip, curryN(2))(_.round);

module.exports = round;
