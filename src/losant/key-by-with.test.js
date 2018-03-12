const {
  pipe, unary, map, prop, always, tryCatch
} = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const keyByWith = require('./key-by-with');

const testHarnessAdapter = (obj) => {
  const { list, keyFn, valueFn, expectedResult } = obj;

  testHarnessUnary(keyByWith(keyFn, valueFn), list, expectedResult);
};

const cases = [
  {
    list: [{ key: 'foo', value: 'bar' }, { key: 'a', value: 1 }],
    keyFn: prop('key'),
    valueFn: prop('value'),
    expectedResult: { foo: 'bar', a: 1 }
  },
  {
    list: [{ key: 'foo', json: '"bar"' }, { key: 'a', json: 1 }],
    keyFn: prop('key'),
    valueFn: pipe(
      prop('json'),
      tryCatch(unary(JSON.parse), always(null)),
    ),
    expectedResult: { foo: 'bar', a: 1 }
  }
];

map(testHarnessAdapter)(cases);
