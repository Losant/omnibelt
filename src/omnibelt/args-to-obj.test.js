const argsToObj = require('./args-to-obj');

describe('argsToObj', () => {
  it('Uses provided keys', () => {
    const expected = { foo: 1, bar: 2 };
    const actual = argsToObj(['foo', 'bar'])(1, 2);

    expect(actual).toEqual(expected);
  });

  it('Skips missing keys', () => {
    const expected = { foo: 1, bar: 2 };
    const actual = argsToObj(['foo', 'bar'])(1, 2, 3);

    expect(actual).toEqual(expected);
  });
});
