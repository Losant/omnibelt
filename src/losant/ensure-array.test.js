const { testCases } = require('../../test/utils');
const ensureArray = require('./ensure-array');

const args = (() => {
  let args;
  // eslint-disable-next-line wrap-iife
  (function() {
    args = arguments; // eslint-disable-line prefer-rest-params
  })(1, 2, 3);
  return args;
})();
const dateNow = new Date();
const symbolFoo = Symbol('foo');

testCases(ensureArray, [
  [['foo'], ['foo']],
  [[['foo']], ['foo']],
  [[args], [...args]],
  [[{ a: 1, b: 2 }], [{ a: 1, b: 2 }]],
  [[1], [1]],
  [[true], [true]],
  [[false], [false]],
  [[null], [null]],
  [[dateNow], [dateNow]],
  [[symbolFoo], [symbolFoo]]
]);
