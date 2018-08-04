const __ = require('ramda/src/__');
const curryN = require('ramda/src/curryN');
const map = require('ramda/src/map');
const always = require('ramda/src/always');
const compose = require('ramda/src/compose');
const is = require('ramda/src/is');
const cond = require('ramda/src/cond');
const T = require('ramda/src/T');
const join = require('ramda/src/join');
const stringifyObject = curryN(2, require('stringify-object'))(__, { indent: '  ', inlineCharacterLimit: 50 });
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
const stringify = (x) => cond([
    [is(Array), compose(format('[{}]'), join(', '), map(stringify))],
    [is(Function), always('<fn>')],
    [T, stringifyObject]
])(x);
module.exports = stringify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3N0cmluZ2lmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUM1RCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxDQUMvQyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUN0QixJQUFJLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ1YsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUNmLENBQUM7SUFDRixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDO0NBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVSLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=