const curry = require('ramda/src/curry');
const map = require('ramda/src/map');
const apply = require('ramda/src/apply');

const testHarness = require('./test-harness');

// TODO: Write tests for this?
// TODO: Write README entry for this?
// NOTE: See `tap` or `count` tests for example usage.

// testCases :: Function -> [[[*], *]]
const testCases = curry((fn, cases) => {
  map(
    apply(testHarness(fn))
  )(cases);
});

module.exports = testCases;
