import {
  compose, curryN,
} from 'ramda';
import { flip } from 'lodash/fp';
import lodash_debounce from 'lodash/debounce';

/**
 * @signature Object -> Number -> Function -> Function
 */
const debounce = compose(curryN(3), flip)(lodash_debounce);

export default debounce;
