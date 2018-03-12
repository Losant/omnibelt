const { map, apply } = require('ramda');

const testHarnessUnary = require('../../test/test-harness-unary');
const isNot = require('./is-not');

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
    [function() {}, false]
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
