const format = require('./format');

it('fills in curlies on string', () => {
  const actual = format('foo_{}_baz', 'bar');
  const expected = 'foo_bar_baz';
  expect(actual).toEqual(expected);
});

it('fills in values from object keys', () => {
  const actual = format('foo_{bar}_{baz}', { bar: 'bar', baz: 'baz' });
  const expected = 'foo_bar_baz';
  expect(actual).toEqual(expected);
});
