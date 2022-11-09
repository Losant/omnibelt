const allEqual = require('./all-equal');

describe('allEqual', () => {
  it('should return true when all values are equal in an array', async () => {
    expect(allEqual([ 1, 1, 1, 1, 1 ])).toEqual(true);
  });
  it('should return true when all values are not equal in an array', async () => {
    expect(allEqual([ 1, 1, undefined, 1, null, 1, false, 1 ])).toEqual(false);
  });
});
