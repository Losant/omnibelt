const { map, curry } = require('ramda');
const { isObject } = require('lodash/fp');
const isPopulatedString = require('./is-populated-string');

// harness :: Boolean -> * -> Function -> Boolean
const harness = curry((expected, input) => {
  return () => {
    expect(
      isPopulatedString(input)
    ).toEqual(expected);
  };
});

describe('isPopulatedString', () => {

  describe('true cases', () => {
    const inputs = [
      'foo',
      '   '
    ];
    map(
      (input) => { test(`case: \`${input}\``, harness(true, input)); },
      inputs
    );
  });

  describe('false cases', () => {
    const inputs = [
      '',
      5,
      false,
      { foo: 'foo' },
      [ 'foo' ]
    ];
    map(
      (input) => {
        const label = isObject(input) ? JSON.stringify(input) : input;
        test(`case: \`${label}\``, harness(false, input));
      },
      inputs
    );
  });

});
