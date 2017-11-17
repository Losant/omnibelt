const { unapply, identity } = require('ramda');

// TODO: TESTS
// TODO: DOCS

// list :: [*...] -> Array<*>
const list = unapply(identity);
module.exports = list;
