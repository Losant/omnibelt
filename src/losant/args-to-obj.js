const {
  compose, zipObj,
} = require('ramda');
const list = require('./list');

// TODO: TESTS
// TODO: DOCS

// argsToObj :: String [k1, k2, k3] => (a, b, c, d, ...) -> { k1: a, k2: b, k3: c, '3': d }
const argsToObj = (keys) => compose(zipObj(keys), list);
module.exports = argsToObj;
