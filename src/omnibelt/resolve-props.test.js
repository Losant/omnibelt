const resolveProps = require('./resolve-props');
const sleep = require('./sleep');
const noop = require('lodash/noop');

describe('resolveProps', () => {
  it('should resolve the props on an object', async () => {
    const obj = {
      one: 1,
      two: Promise.resolve(2),
      three: Promise.resolve('3')
    };
    expect(await resolveProps(obj)).toEqual({
      one: 1,
      two: 2,
      three: '3'
    });
  });

  it('should reject the props on an object', async () => {
    const obj = {
      one: 1,
      two: Promise.resolve(2),
      three: Promise.reject(new Error('error'))
    };

    await expect(resolveProps(obj)).rejects.toThrow('error');
  });

  it('should wait for all props to resolve after an error occurs', async () => {
    const func = async () => {
      await sleep(1000);
    };
    const obj = {
      one: Promise.reject(new Error('error')),
      two: func(),
      three: func()
    };
    const start = Date.now();
    await resolveProps(obj).catch(noop);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});

