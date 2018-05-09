const noopAsync = require('./noop-async');

it('should return a promise of undefined', async () => {
  const result = noopAsync();
  expect(result).toBeInstanceOf(Promise);
  expect(await result).toBeUndefined();
});
