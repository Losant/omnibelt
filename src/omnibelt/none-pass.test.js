import {
  pipe, map, apply, adjust, equals, is
} from 'ramda';
import { testHarnessUnary } from '../../test/utils';
import nonePass from './none-pass';

const isFoo = equals('foo');
const isBar = equals('bar');

const tests = [
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
      adjust(nonePass, 0),
      apply(testHarnessUnary),
    ), cases);
  });
};

map(testHarnessAdapter)(tests);
