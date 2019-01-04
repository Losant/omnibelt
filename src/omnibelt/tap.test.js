const { compose } = require('ramda');

const { testCases } = require('../../test/utils');
const tap = require('./tap');

testCases(tap, [
  [[() => 'bar', 'foo'], 'foo']
]);

it('Side effects happen', () => {
  let sideEffected = 'not foo';
  const desiredEffect = 'foo';
  const unaffected = 'whatever';

  const actual = compose(
    tap(() => { sideEffected = desiredEffect; })
  )(unaffected);

  expect(actual).toEqual(unaffected);
  expect(sideEffected).toEqual(desiredEffect);
});
