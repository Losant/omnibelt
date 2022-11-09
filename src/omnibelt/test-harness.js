// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `string-to-boolean` tests for example usage.

const curry = require('@pnpm/ramda/src/curry');
const compose = require('@pnpm/ramda/src/compose');
const evolve = require('@pnpm/ramda/src/evolve');
const map = require('@pnpm/ramda/src/map');

const format = require('./format');
const stringify = require('./stringify');

const testCaseToString = compose(
  format('({args}) => {expected}'),
  evolve({
    args: map(stringify),
    expected: stringify
  })
);

// testHarness :: Expect -> Function -> [*] -> *
const testHarness = curry((expect, fn, args, expected) => {
  it(
    testCaseToString({ args, expected }),
    () => expect(fn(...args)).toEqual(expected)
  );
});

module.exports = testHarness;
