const { compose } = require('ramda');

const testCases = require('./test-cases');
const tap = require('./tap');

testCases(tap, [
  [[() => 'bar', 'foo'], 'foo']
]);

it('Side effects happen', () => {
  let sideEffected = 'not foo';
  const desiredEffect = 'foo';
  const uneffected = 'whatever';

  const actual = compose(
    tap(() => { sideEffected = desiredEffect; })
  )(uneffected);

  expect(actual).toEqual(uneffected);
  expect(sideEffected).toEqual(desiredEffect);
});
