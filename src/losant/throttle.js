import { compose, curryN } from 'ramda';
import { flip } from 'lodash/fp';
import { throttle as _throttle } from 'lodash';

/**
 * @signature Object -> Number -> Function -> Function
 */
const throttle = compose(curryN(3), flip)(_throttle);

module.exports = throttle;
