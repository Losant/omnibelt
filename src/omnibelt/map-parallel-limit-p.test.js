const mapParallelLimitP = require('./map-parallel-limit-p');
const sleep = require('./sleep');

const harness = (input) => {
  let areRunning = 0;
  return mapParallelLimitP(2, async (val) => {
    if (areRunning >= 2) { throw new Error('TOO MUCH'); }
    areRunning++;
    await sleep(val * 100);
    areRunning--;
    return Array.isArray(val) ? val.join(', ') : val * 2;
  }, input);
};
let callCount = 0;
const harnessThatErrors = (input) => {
  let areRunning = 0;
  return mapParallelLimitP(2, async (val) => {
    callCount++;
    if (areRunning >= 2) { throw new Error('TOO MUCH'); }
    areRunning++;
    if (val === 5) {
      throw new Error('AHHH NO MORE...');
    }
    await sleep(val * 100);
    areRunning--;
    return val * 2;
  }, input);
};

describe('mapParallelLimitP', () => {
  afterEach(() => {
    callCount = 0;
  });
  it('should correctly iterate on an array, parallel, in order', async () => {
    expect(await harness([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Set, serially, in order', async () => {
    expect(await harness(new Set([1, 2, 3, 4, 5]))).toEqual([2, 4, 6, 8, 10]);
  });

  it('should correctly iterate on a Map, serially, in order', async () => {
    expect(await harness(new Map([[1, 2], [3, 4], [5, 6]]))).toEqual(['1, 2', '3, 4', '5, 6']);
  });

  it('should correctly iterate on an Object, serially, in order', async () => {
    expect(await harness({ a: 2, b: 4, c: 6 })).toEqual({ a: 'a, 2', b: 'b, 4', c: 'c, 6' });
  });

  it('should not kick off more functions once error occurs', async () => {
    const startTime = Date.now();
    const input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    try {
      await harnessThatErrors(input);
    } catch {
    }
    const endTime = Date.now();
    const nonErrorStateTime = Date.now();
    await harness(input);
    const nonErrorEndTime = Date.now();
    expect(callCount).toEqual(5);
    expect(endTime - startTime).toBeGreaterThanOrEqual(600);
    expect(endTime - startTime).toBeLessThan(nonErrorEndTime - nonErrorStateTime);
  });
});
