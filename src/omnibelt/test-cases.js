// TODO: Write tests for this?
// TODO: Write README entry for this?
// TODO: https://github.com/Losant/omnibelt/issues/40
// NOTE: See `tap` or `count` tests for example usage.

const curry = require('ramda/src/curry.js');
const map = require('ramda/src/map.js');
const apply = require('ramda/src/apply.js');

const testHarness = require('./test-harness');

// testCases :: Expect -> Function -> [[[*], *]]
const testCases = curry((expect, fn, cases) => {
  map(
    apply(testHarness(expect, fn))
  )(cases);
});

module.exports = testCases;
