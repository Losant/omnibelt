const { pipe, map, apply, adjust } = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const equalsShallow = require('./equals-shallow');

const getTestDate = () => new Date(2017, 1, 1);

class TestDataStructure {
  constructor(label) {
    this.label = label;
  }
}

const cases = [
  [{ a: 1 }, { a: 1 }, true],
  [{ a: 1 }, { a: 2 }, false],
  [{ a: { b: 1 } }, { a: { b: 1 } }, false],
  ['a', 'a', true],
  ['a', 'b', false],
  [1, 1, true],
  [1, 2, false],
  [[1, 2, 3], [1, 2, 3], true],
  [[1, 2, 3], [2, 3, 4], false],
  [getTestDate(), getTestDate(), true],
  [new TestDataStructure('a'), new TestDataStructure('a'), true],
  [new TestDataStructure('a'), new TestDataStructure('b'), false],
  [null, null, true],
  [undefined, undefined, true],
  [null, undefined, false]
];

const testHarnessAdapter = pipe(
  adjust(0, equalsShallow),
  apply(testHarnessUnary),
);

map(testHarnessAdapter)(cases);
