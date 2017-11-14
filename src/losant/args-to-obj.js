const {
  curry, compose, zipObj,
} = require('ramda');
const list = require('./list');

// TODO: TESTS
// TODO: DOCS

// argsToObj :: Array<k1, k2, k3> => (a, b, c, ...) -> { k1: a, k2: b, k3: c }
const argsToObj = curry(
  (keys, args) => compose(list, zipObj(keys))(args)
);
module.exports = argsToObj;
