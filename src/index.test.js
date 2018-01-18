const _ = require('./lodash');
const r = require('./ramda');
const l = require('./losant');

const { compose, map, keys } = r;
const { intersectAny } = l;

// TODO: Make this an exposed util?
// :: [{String a: * b}] -> [a]
const intersectAnyKeys =
  compose(intersectAny, map(keys));

it('sub utilities don\'t contain duplicates', () => {
  expect(
    intersectAnyKeys([_, r, l])
  ).toEqual([]);
});
