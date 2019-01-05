const serialForEachP = require('./serial-for-each-p');
const sleep = require('./sleep');

const harness = async (input) => {
  const output = [];
  await serialForEachP(async (val) => {
    await sleep(Math.random());
    output.push(Array.isArray(val) ? val.join(', ') : val * 2);
  }, input);
  return output;
};

describe('serialForEachP', () => {
  it('should correctly iterate on an array, serially, in order', async () => {
    expect(await harness([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Set, serially, in order', async () => {
    expect(await harness(new Set([1, 2, 3, 4, 5]))).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Map, serially, in order', async () => {
    expect(await harness(new Map([[1, 2], [3, 4], [5, 6]]))).toEqual(['1, 2', '3, 4', '5, 6']);
  });

  it('should correctly iterate on an Object, serially, in order', async () => {
    expect(await harness( { a: 2, b: 4, c: 6 })).toEqual(['a, 2', 'b, 4', 'c, 6']);
  });
});
