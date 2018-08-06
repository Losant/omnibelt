import {
  compose, curryN,
} from 'ramda';
import { flip } from 'lodash/fp';
import lodash_throttle from 'lodash/trottle';

/**
 * @signature Object -> Number -> Function -> Function
 */
const throttle = compose(curryN(3), flip)(lodash_throttle);

export default throttle;
