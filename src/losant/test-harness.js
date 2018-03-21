const curry = require('ramda/src/curry');
const compose = require('ramda/src/compose');
const evolve = require('ramda/src/evolve');
const map = require('ramda/src/map');
const expect = require('expect');
const format = require('./format');
const stringify = require('./stringify');

// TODO: Write tests for this?
// TODO: Write README entry for this?
// NOTE: See `string-to-boolean` tests for example usage.

const testCaseToString = compose(
  format('[{args}] ==> {expected}'),
  evolve({
    args: map(stringify),
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
