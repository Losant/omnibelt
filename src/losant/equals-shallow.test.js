const { pipe, map, apply, adjust } = require('ramda');

const testHarness = require('./test-harness');
const equalsShallow = require('./equals-shallow');

const cases = [
  [{ a: 1 }, { a: 1 }, true],
  [{ a: 1 }, { a: 2 }, false],
  [{ a: { b: 1 } }, { a: { b: 1 } }, false],
];

const testHarnessAdapter = pipe(
  adjust(equalsShallow, 0),
  apply(testHarness),
);

map(testHarnessAdapter)(cases);
