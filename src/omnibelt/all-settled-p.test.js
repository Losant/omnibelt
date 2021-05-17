const allSettledP = require('./all-settled-p');

describe('allSettledP', () => {
  it('should correctly settle the promises for an array', async () => {
    const err = new Error('error');
    const input = [Promise.resolve(1), Promise.reject(err)];
    const output = await allSettledP(input);
    expect(output).toEqual([{ state: 'fulfilled', value: 1 }, { state: 'rejected', reason: err }]);
  });
  it('should correctly settle the promises for an object', async () => {
    const err = new Error('error');
    const input = {
      a: Promise.resolve(1),
      b: Promise.reject(err)
    };
    const output = await allSettledP(input);
    expect(output).toEqual({
      a: { state: 'fulfilled', value: 1 },
      b: { state: 'rejected', reason: err }
    });
  });
});
