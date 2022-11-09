const __ = require('ramda/src/__.js');
const curryN = require('ramda/src/curryN.js');
const map = require('ramda/src/map.js');
const always = require('ramda/src/always.js');
const compose = require('ramda/src/compose.js');
const is = require('ramda/src/is.js');
const cond = require('ramda/src/cond.js');
const T = require('ramda/src/T.js');
const join = require('ramda/src/join.js');
const stringifyObject = curryN(2, require('stringify-object'))(
  __, { indent: '  ', inlineCharacterLimit: 50 }
);
const format = require('./format');

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
 *   stringify(() => ''); // => "<fn>"
 */
const stringify = (x) =>
  cond([
    [is(Array), compose(
      format('[{}]'),
      join(', '),
      map(stringify)
    )],
    [is(Function), always('<fn>')],
    [T, stringifyObject]
  ])(x);

module.exports = stringify;
