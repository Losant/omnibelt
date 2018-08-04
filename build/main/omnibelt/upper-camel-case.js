var compose = require('ramda/src/compose');
var upperFirst = require('lodash/fp/upperFirst');
var camelCase = require('lodash/fp/camelCase');
/**
 * Upper-first-camelcase-ify
 *
 * @signature String -> String
 *
 * @example
 *   upperCamelCase('foo-bar-baz') // => 'FooBarBaz'
 *   upperCamelCase('foo_bar_baz') // => 'FooBarBaz'
 */
var upperCamelCase = compose(upperFirst, camelCase);
module.exports = upperCamelCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXItY2FtZWwtY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC91cHBlci1jYW1lbC1jYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ25ELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWpEOzs7Ozs7OztHQVFHO0FBQ0gsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUV0RCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9