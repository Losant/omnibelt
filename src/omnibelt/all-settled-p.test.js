const allSettledP = require('./all-settled-p');

describe('allSettledP', () => {
  it('should correctly settle the promises', async () => {
    const err = new Error('error');
    const input = [Promise.resolve(1), Promise.reject(err)];
    const output = await allSettledP(input);
    expect(output).toEqual([{ state: 'fulfilled', value: 1 }, { state: 'rejected', reason: err }]);
  });
});
