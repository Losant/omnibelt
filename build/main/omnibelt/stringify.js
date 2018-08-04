var __ = require('ramda/src/__');
var curryN = require('ramda/src/curryN');
var map = require('ramda/src/map');
var always = require('ramda/src/always');
var compose = require('ramda/src/compose');
var is = require('ramda/src/is');
var cond = require('ramda/src/cond');
var T = require('ramda/src/T');
var join = require('ramda/src/join');
var stringifyObject = curryN(2, require('stringify-object'))(__, { indent: '  ', inlineCharacterLimit: 50 });
var format = require('./format');
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
var stringify = function (x) {
    return cond([
        [is(Array), compose(format('[{}]'), join(', '), map(stringify))],
        [is(Function), always('<fn>')],
        [T, stringifyObject]
    ])(x);
};
module.exports = stringify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3N0cmluZ2lmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkMsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUM1RCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxDQUMvQyxDQUFDO0FBQ0YsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsVUFBQyxDQUFDO0lBQ2xCLE9BQUEsSUFBSSxDQUFDO1FBQ0gsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNWLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FDZixDQUFDO1FBQ0YsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQztLQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBUkwsQ0FRSyxDQUFDO0FBRVIsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==