const {
  pipe, map, apply, adjust, equals, is
} = require('ramda');

const { testHarnessUnary } = require('../../test/utils');
const nonePass = require('./none-pass');

const isFoo = equals('foo');
const isBar = equals('bar');

const allCases = [
  {
    label: 'is not "foo" or "bar"',
    cases: [
      [[isFoo, isBar], 'foo', false],
      [[isFoo, isBar], 'bar', false],
      [[isFoo, isBar], 'baz', true]
    ]
  },
  {
    label: 'is not Number or String',
    cases: [
      [[is(Number), is(String)], 1, false],
      [[is(Number), is(String)], 'foo', false],
      [[is(Number), is(String)], { foo: 'bar' }, true]
    ]
  }
];

const testHarnessAdapter = ({ label, cases }) => {
  describe(label, () => {
    return map(pipe(
      adjust(0, nonePass),
      apply(testHarnessUnary),
    ), cases);
  });
};

map(testHarnessAdapter)(allCases);
