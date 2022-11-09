// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `tap` or `count` tests for example usage.

const curry = require('@pnpm/ramda/src/curry');
const map = require('@pnpm/ramda/src/map');
const apply = require('@pnpm/ramda/src/apply');

const testHarness = require('./test-harness');

// testCases :: Expect -> Function -> [[[*], *]]
const testCases = curry((expect, fn, cases) => {
  map(
    apply(testHarness(expect, fn))
  )(cases);
});

module.exports = testCases;
