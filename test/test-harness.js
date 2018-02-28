const {
  curry, map, always, when, compose, evolve, is
} = require('ramda');
const format = require('../src/losant/format');
const stringify = require('../src/losant/stringify');

// TODO: Write tests for this?
// TODO: Write README entry for this?
// NOTE: See `string-to-boolean` tests for example usage.

const testCaseToString = compose(
  format('[{args}] ==> {expected}'),
  evolve({
    args: map(compose(
      stringify,
      when(is(Function), always('[Function]')),
    )),
    expected: stringify
  }),
);

// testHarness :: Function -> [*] -> *
const testHarness = curry((fn, args, expected) => {
  it(
    testCaseToString({ args, expected }),
    () => expect(fn(...args)).toEqual(expected),
  );
});

module.exports = testHarness;
