const defer = require('./defer');

it('should return a deferred', async () => {
  const result1 = defer();
  const result2 = defer();

  expect(result1.promise).toEqual(expect.any(Promise));
  expect(result1.resolve).toEqual(expect.any(Function));
  expect(result1.reject).toEqual(expect.any(Function));

  const e1 = expect(result1.promise).resolves.toBe('hello');
  const e2 = expect(result2.promise).rejects.toBe('goodbye');

  result1.resolve('hello');
  result2.reject('goodbye');
  return Promise.all([e1, e2]);
});
