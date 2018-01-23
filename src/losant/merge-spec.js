import { curry, converge, merge, identity, applySpec } from 'ramda';

/**
 * TODO: TESTS
 * TODO: DOCS
 *
 * @signature Object a -> Object b -> Object a b
 */
const mergeSpec = curry((spec, data) =>
  converge(merge, [identity, applySpec(spec)])(data)
);

module.exports = mergeSpec;
