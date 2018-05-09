const resolveProps = require('./resolve-props');

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
