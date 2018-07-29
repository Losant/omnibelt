import * as _ from './lodash';
import * as O from './omnibelt';
import * as R from './ramda';

// TODO: Make this an exposed util?
// :: [{String a: * b}] -> [a]
const intersectAnyKeys = R.compose(
  O.intersectAny,
  R.map(R.keys),
);

it("sub utilities don't contain duplicates", () => {
  expect(intersectAnyKeys([_, R, O])).toEqual([]);
});
