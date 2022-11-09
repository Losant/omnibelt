const compose = require('ramda/src/compose.js');
const curryN = require('ramda/src/curryN.js');
const flip = require('ramda/src/flip.js');
const _round = require('lodash/round');

/**
 * Curried FP version of `lodash.round`
 * NOTE: `lodash/fp.round` has a fixed arity of one, therefore
 *       a precision cannot be specified.
 *
 * @signature Number -> Number -> Number
 * @see lodash.round
 */
const round = compose(flip, curryN(2))(_round);

module.exports = round;
