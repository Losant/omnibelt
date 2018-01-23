const curryN = require('ramda/src/curryN');
const stringFormat = require('string-format');

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
const format = curryN(2, stringFormat);

module.exports = format;
