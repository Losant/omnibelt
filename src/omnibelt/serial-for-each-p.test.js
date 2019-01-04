const serialForEachP = require('./serial-for-each-p');
const sleep = require('./sleep');

describe('serialForEachP', () => {
  it('should correctly iterate on an array, serially, in order', async () => {
    const input = [1, 2, 3, 4, 5];
    const output = [];

    await serialForEachP(async (val) => {
      await sleep(Math.random());
      output.push(val*2);
    }, input);

    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Set, serially, in order', async () => {
    const input = new Set([1, 2, 3, 4, 5]);
    const output = [];

    await serialForEachP(async (val) => {
      await sleep(Math.random());
      output.push(val*2);
    }, input);

    expect(output).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Map, serially, in order', async () => {
    const input = new Map([[1, 2], [3, 4], [5, 6]]);
    const output = [];

    await serialForEachP(async ([k, v]) => {
      await sleep(Math.random());
      output.push(k + v);
    }, input);

    expect(output).toEqual([3, 7, 11]);
  });

  it('should correctly iterate on an Object, serially, in order', async () => {
    const input = { a: 2, b: 4, c: 6 };
    const output = [];

    await serialForEachP(async ([k, v]) => {
      await sleep(Math.random());
      output.push(k + v);
    }, input);

    expect(output).toEqual(['a2', 'b4', 'c6']);
  });
});
