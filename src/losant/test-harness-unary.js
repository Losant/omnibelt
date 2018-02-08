const pipe = require('ramda/src/pipe');
const curry = require('ramda/src/curry');
const map = require('ramda/src/map');

const format = require('./format');
const stringify = require('./stringify');

// TODO: REMOVE THIS! This has been deprecated!
//       See `test-harness` for its successor (and `test-cases`)
//       The upgrade path is to incrementally update tests that use this
const testHarnessUnary = curry((func, subj, expected) => {
  it(
    pipe(
      map(stringify),
      format('{subj} ==> {expected}'),
    )({ subj, expected }),
    () => expect(func(subj)).toEqual(expected),
  );
});

module.exports = testHarnessUnary;
