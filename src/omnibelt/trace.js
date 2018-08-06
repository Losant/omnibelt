// tslint:disable:no-console
import { curry } from 'ramda';

/**
 * Effectively a curried `console.log` that also returns it's input.
 *
 * @signature String -> a -> a
 *
 * @example
 *   trace('The meaning of life: ', 42);   // 42
 *
 *   pipe(
 *     identity
 *     trace('The meaning of life: ')      // 42
 *     // ...
 *   )(42)
 */
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

export default trace;
