import { testCases } from '../../test/utils';
import ensureArray from './ensure-array';

const args = (() => {
  let rtn;
  (function() {
    rtn = arguments;
  })(1, 2, 3);
  return rtn;
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
