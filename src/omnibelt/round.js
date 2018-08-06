import {
  compose, curryN,
} from 'ramda';
import { flip } from 'lodash/fp';
import { round as lodash_round } from 'lodash';

/**
 * Curried FP version of `lodash.round`
 *
 * NOTE: `lodash/fp.round` has a fixed arity of one, therefore
 *       a precision cannot be specified.
 *
 * @signature Number -> Number -> Number
 * @see lodash.round
 */
const round = compose(curryN(2), flip)(lodash_round);

export default round;
