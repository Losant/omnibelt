const intersectAny = require('./intersect-any');

const foo = 'foo';
const bar = 'bar';
const baz = 'baz';
const qux = 'qux';
const quux = 'quux';
const corge = 'corge';

it('handles strings', () => {
  const x = [ foo, bar, baz ];
  const y = [ corge ];
  const z = [ qux, baz ];
  expect(
    intersectAny([x, y, z])
  ).toEqual([ baz ]);
});

it('handles numbers', () => {
  const x = [ 1, 2, 3 ];
  const y = [ 5 ];
  const z = [ 1, 4 ];
  expect(
    intersectAny([x, y, z])
  ).toEqual([ 1 ]);
});

it.skip('handles strings that look like numbers', () => {
  const x = [ '1', '2', '3' ];
  const y = [ '5' ];
  const z = [ '1', '4' ];
  expect(
    intersectAny([x, y, z])
  ).toEqual([ '1' ]);
});

it('handles value in all arrays', () => {
  const v = [ foo, bar ];
  const w = [ foo, baz ];
  const x = [ foo, qux ];
  const y = [ foo, quux ];
  const z = [ foo, corge ];
  expect(
    intersectAny([v, w, x, y, z])
  ).toEqual([ foo ]);
});

it('handles multiple intersecting values', () => {
  const x = [ 1, 2, 3 ];
  const y = [ 5, 4 ];
  const z = [ 1, 4 ];
  expect(
    intersectAny([x, y, z])
  ).toEqual([ 1, 4 ]);
});
