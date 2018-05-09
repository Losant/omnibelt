const trace = require('./trace');

describe('trace', () => {

  test('returns input passed in', () => {
    const x = { foo: 'foo', bar: [1, 2, 3] };
    expect(trace('foo', x)).toBe(x);

    const y = [1, 2, 3];
    expect(trace('foo', y)).toBe(y);
  });

});
