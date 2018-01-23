import { compose, curryN } from 'ramda';
import { flip } from 'lodash/fp';
import { debounce as _debounce } from 'lodash';

/**
 * @signature Object -> Number -> Function -> Function
 */
const debounce = compose(curryN(3), flip)(_debounce);

module.exports = debounce;
