const { toUpper } = require('lodash/fp');
const sleep = require('./sleep');
const mapP = require('./map-p');
const noop = require('lodash/noop');

it('Works with an async iterator on Arrays', () => {
  const actual = mapP((x) => Promise.resolve(x + 1), [1, 2, 3]);
  const expected = [2, 3, 4];

  return expect(actual).resolves.toEqual(expected);
});

it('Works with an async iterator on Objects', () => {
  const actual = mapP(
    async (x) => {
      await sleep(50);
      return toUpper(x);
    },
    { foo: 'foo', bar: 'bar', baz: 'baz' }
  );
  const expected = { foo: 'FOO', bar: 'BAR', baz: 'BAZ' };

  return expect(actual).resolves.toEqual(expected);
});

it('Will wait for all promises to complete before throwing an error', async () => {
  let callCount = 0;
  const startTime = Date.now();
  let errorTime;
  await mapP(async (x) => {
    callCount++;
    if (x >= 5 && x < 7) {
      if (!errorTime) {
        errorTime = Date.now();
      }
      throw new Error(`Error ${x}`);
    }
    await sleep(x * 100);
    return x + 1;
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).catch(noop);
  const endTime = Date.now();
  expect(callCount).toEqual(10);
  expect(errorTime).toBeLessThan(endTime);
  expect(errorTime).toBeGreaterThanOrEqual(startTime);
});
