const timeoutP = require('./timeout-p');

it('should correctly deal with promise timeouts', async () => {
  const p1 = new Promise((f) => { setTimeout(() => { f('a'); }, 100); });
  await expect(timeoutP(1000, p1)).resolves.toBe('a');

  let error = new Error('b');
  const p2 = new Promise((f, r) => { setTimeout(() => { r(error); }, 100); });
  await expect(timeoutP(1000, p2)).rejects.toBe(error);

  const p3 = new Promise((f) => { setTimeout(() => { f('a'); }, 1000); });
  try {
    await timeoutP(100, p3);
  } catch (e) { error = e; }

  expect(error.name).toEqual('Error');
  expect(error.code).toEqual('ETIMEDOUT');
  expect(error.message).toEqual('Promise timed out after 100 ms');
  expect(error.promise).toBe(p3);
});
