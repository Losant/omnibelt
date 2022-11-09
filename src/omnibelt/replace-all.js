const pipe = require('ramda/src/pipe.js');
const split = require('ramda/src/split.js');
const join = require('ramda/src/join.js');
const curry = require('ramda/src/curry.js');

/**
 * Really, using `R.replace` with regex is fine, but this makes a nice interface.
 *
 * @signature String -> String -> String -> String
 *
 * @example
 *   replaceAll(
 *     '\\n',
 *     '\n',
 *     'foo\\nbar\\nbaz\\n',
 *   );
 *   // foo\nbar\nbaz\n
 */
const replaceAll = curry((target, replacement, data) =>
  pipe(
    split(target),
    join(replacement)
  )(data)
);

module.exports = replaceAll;
