const {
  curry, converge, merge, identity, applySpec,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// mergeSpec :: Object a => Object b -> Object a b
const mergeSpec = curry((spec, data) => {
  return converge(merge, [identity, applySpec(spec)])(data);
});
module.exports = mergeSpec;
