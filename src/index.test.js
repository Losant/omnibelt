const _ = require('./lodash');
const R = require('./ramda');
const O = require('./omnibelt');

const { compose, map, keys } = R;
const { intersectAny } = O;

// TODO: Make this an exposed util?
// :: [{String a: * b}] -> [a]
const intersectAnyKeys =
  compose(intersectAny, map(keys));

it('sub utilities don\'t contain duplicates', () => {
  expect(
    intersectAnyKeys([_, R, O])
  ).toEqual([]);
});
