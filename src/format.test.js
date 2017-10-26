const format = require('./format');

// TODO: Moar tests. If you're reading this, you should add another test (or three).

it('fills in curlies on string', () => {
  expect(format('foo{}baz', 'bar')).toEqual('foobarbaz');
});
