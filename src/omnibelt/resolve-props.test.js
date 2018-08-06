import resolveProps from './resolve-props';

it('should resolve the props on an object', async () => {
  const obj = {
    bar: Promise.resolve(2),
    baz: Promise.resolve('3'),
    foo: 1,
  };

  expect(await resolveProps(obj)).toEqual({
    bar: 2,
    baz: '3',
    foo: 1,
  });
});
