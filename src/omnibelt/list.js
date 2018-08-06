import { unapply, identity } from 'ramda';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature *... -> Array<*>
 */
const list = unapply(identity);

export default list;
