const {
  chain, identity,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// flattenShallow :: Array<Array<* a>> -> Array<* a>
const flattenShallow = chain(identity);
module.exports = flattenShallow;
