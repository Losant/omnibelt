import { pipe, curry, map } from 'ramda';

import format from './format';
import stringify from './stringify';

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
