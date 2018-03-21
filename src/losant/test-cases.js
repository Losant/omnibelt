// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/losant-utils/issues/40
// NOTE: See `tap` or `count` tests for example usage.

const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');

const testHarness = require('./test-harness');

// testCases :: Expect -> Function -> [[[*], *]]
const testCases = curry((expect, fn, cases) => {
  map(
    apply(testHarness(expect, fn))
  )(cases);
});

module.exports = testCases;
