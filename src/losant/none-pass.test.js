const { pipe, map, apply, adjust, equals, is } = require('ramda');

const testHarness = require('./test-harness');
const nonePass = require('./none-pass');

const isFoo = equals('foo');
const isBar = equals('bar');

const cases = [
  {
    label: 'is not "foo" or "bar"',
    cases: [
      [[isFoo, isBar], 'foo', false],
      [[isFoo, isBar], 'bar', false],
      [[isFoo, isBar], 'baz', true],
    ],
  },
  {
    label: 'is not Number or String',
    cases: [
      [[is(Number), is(String)], 1, false],
      [[is(Number), is(String)], 'foo', false],
      [[is(Number), is(String)], { foo: 'bar' }, true],
    ],
  },
];

const testHarnessAdapter = ({ label, cases }) => {
  describe(label, () => {
    return map(pipe(
      adjust(nonePass, 0),
      apply(testHarness),
    ), cases);
  });
};

map(testHarnessAdapter)(cases);
