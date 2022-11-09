const __ = require('@pnpm/ramda/src/__');
const curryN = require('@pnpm/ramda/src/curryN');
const map = require('@pnpm/ramda/src/map');
const always = require('@pnpm/ramda/src/always');
const compose = require('@pnpm/ramda/src/compose');
const is = require('@pnpm/ramda/src/is');
const cond = require('@pnpm/ramda/src/cond');
const T = require('@pnpm/ramda/src/T');
const join = require('@pnpm/ramda/src/join');
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
