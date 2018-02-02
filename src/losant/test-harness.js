const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');

const format = require('./format');
const stringify = require('./stringify');

// TODO: `subj` could take an array and support a lot more interfaces... that starts
//       down the road toward a testing framework on top of jest though.
// TODO: Write tests for this?
// TODO: Write README entry for this?
// NOTE: This assumes Jest, but may work with Mocha/Chai.
// NOTE: See `string-to-boolean` tests for example usage.
const testHarness = curry((func, subj, expected) => {
  it(
    pipe(
      map(stringify),
      format('{subj} ==> {expected}'),
    )({ subj, expected }),
    () => expect(func(subj)).toEqual(expected),
  );
});

module.exports = testHarness;
