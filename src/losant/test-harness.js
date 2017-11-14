const {
  pipe, cond, equals, always, T, identity, curry,
} = require('ramda');
const format = require('./format');

// TODO: `subj` could take an array and support a lot more interfaces... that starts
//       down the road toward a testing framework on top of jest though.
// TODO: Write tests for this?
// TODO: Write README entry for this?
// NOTE: This assumes Jest, but may work with Mocha/Chai.
// NOTE: See `string-to-boolean` tests for example usage.
const testHarness = curry((func, subj, expected) => {
  it(
    pipe(
      cond([
        [equals(''), always('\'\'')],
        [T, identity],
      ]),
      format(`{} ==> ${expected}`),
    )(subj),
    () => expect(func(subj)).toEqual(expected),
  );
});

module.exports = testHarness;
