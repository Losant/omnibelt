const __ = require('ramda/src/__');
const curryN = require('ramda/src/curryN');

const stringifyObject = require('stringify-object');

/**
 * @signature * -> String
 *
 * @example
 *   stringify(''); // => "''"
 *   stringify(true); // => "true"
 *   stringify(null); // => "null"
 *   stringify([1, 2, 3]); // => "[1, 2, 3]"
 *   stringify({ foo: 'bar' }); // => "{ foo: 'bar' }"
 *   stringify(Symbol('foo')); // => "Symbol(foo)"
 */
const stringify = curryN(2, stringifyObject)(__, {
  indent: '  ',
  inlineCharacterLimit: 50
});

module.exports = stringify;
