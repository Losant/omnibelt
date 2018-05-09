const defer = require('./defer');

it('should return a deferred', async () => {
  const result1 = defer();
  const result2 = defer();

  expect(result1.promise).toBeInstanceOf(Promise);
  expect(result1.resolve).toBeInstanceOf(Function);
  expect(result1.reject).toBeInstanceOf(Function);

  const e1 = expect(result1.promise).resolves.toBe('hello');
  const e2 = expect(result2.promise).rejects.toBe('goodbye');

  result1.resolve('hello');
  result2.reject('goodbye');
  return Promise.all([e1, e2]);
});
