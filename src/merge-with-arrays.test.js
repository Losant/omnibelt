const mergeWithArrays = require('./merge-with-arrays');

describe('mergeWithArrays', () => {

  it('merges arrays instead of overriding', () => {
    const x = {
      foo: [1, 2, 3],
      bar: {
        a: 'a',
        c: 1,
      },
      a: 3,
    };
    const y = {
      foo: [4],
      bar: {
        a: 'new',
        b: 'b',
      },
      a: 4,
    };
    const expected = {
      foo: [1, 2, 3, 4],
      bar: {
        a: 'new',
        b: 'b',
        c: 1,
      },
      a: 4,
    };

    expect(
      mergeWithArrays(x, y)
    ).toEqual(expected);
  });

});
