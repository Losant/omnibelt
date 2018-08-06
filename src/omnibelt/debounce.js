import {
  compose, curryN,
} from 'ramda';
import { flip } from 'lodash/fp';
import { debounce as lodash_debounce } from 'lodash';

/**
 * @signature Object -> Number -> Function -> Function
 */
const debounce = compose(curryN(3), flip)(lodash_debounce);

export default debounce;
