var curryN = require('ramda/src/curryN');
var stringFormat = require('string-format');
/**
 * Formats a string.
 *
 * Curried version of [`string-format`](https://github.com/davidchambers/string-format).
 * It handles more than I'm indicating in the type signature here. Once you play around with it,
 * feel free to put some more examples and update these docs.
 *
 * @signature String -> String | Object -> String
 *
 * @example
 *   format('Hello, {}!', 'Alice');                    // => 'Hello, Alice!'
 *   compose(format('Hello, {}!'), identity)('Alice'); // => 'Hello, Alice!'
 */
var format = curryN(2, stringFormat);
module.exports = format;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2Zvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFOUM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUV2QyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyJ9