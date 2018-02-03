const resolveProps = require('./resolve-props');

it('should resolve the props on an object', async () => {
  const obj = {
    one: 1,
    two: new Promise((f) => { f(2); }),
    three: new Promise((f) => { f('3'); })
  };

  expect(await resolveProps(obj)).toEqual({
    one: 1,
    two: 2,
    three: '3'
  });
});
