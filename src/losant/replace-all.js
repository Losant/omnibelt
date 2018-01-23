import { pipe, split, join, curry } from 'ramda';

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
    join(replacement),
  )(data)
);

module.exports = replaceAll;
