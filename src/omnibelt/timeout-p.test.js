const timeoutP = require('./timeout-p');

it('should correctly deal with promise timeouts', async () => {
  const p1 = new Promise((f) => { setTimeout(() => { f('a'); }, 100); });
  await expect(timeoutP(1000, p1)).resolves.toBe('a');

  const error1 = new Error('b');
  const p2 = new Promise((f, r) => { setTimeout(() => { r(error1); }, 100); });
  await expect(timeoutP(1000, p2)).rejects.toBe(error1);

  let error2;
  const p3 = new Promise((f) => { setTimeout(() => { f('a'); }, 1000); });
  try {
    await timeoutP(100, p3);
  } catch (e) { error2 = e; }

  expect(error2.name).toEqual('Error');
  expect(error2.code).toEqual('ETIMEDOUT');
  expect(error2.message).toEqual('Promise timed out after 100 ms');
  expect(error2.promise).toBe(p3);
  expect(error2.stack).toMatch('src/omnibelt/timeout-p.test.js');
});
