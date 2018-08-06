import { map, apply } from 'ramda';
import { testHarnessUnary } from '../../test/utils';
import isNot from './is-not';

const caseSections = [
  [Object, [
    ['', true],
    [{}, false]
  ]],
  [Array, [
    ['', true],
    [[], false]
  ]],
  [String, [
    [null, true],
    ['', false]
  ]],
  [Number, [
    ['', true],
    [1, false]
  ]],
  [Boolean, [
    ['', true],
    [true, false]
  ]],
  [Function, [
    ['', true],
    [() => undefined, false]
  ]],
  [Symbol, [
    ['', true],
    [Symbol('foo'), false]
  ]],
  [Date, [
    ['', true],
    [new Date(), false]
  ]]
];

caseSections.forEach((section) => {
  const [typeCtor, cases] = section;

  describe(`is not ${typeCtor.name}`, () => {
    map(
      apply(testHarnessUnary(isNot(typeCtor)))
    )(cases);
  });
});
