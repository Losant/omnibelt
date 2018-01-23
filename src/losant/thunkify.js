import { curry } from 'ramda';

/**
 * Takes a function and returns a function that takes any number of arguments
 * and returns a thunk that calls the original function with those arguments.
 *
 * @signature Function -> Function -> Function -> *
 *
 * @example
 *    const logger = thunkify(console.log);
 *    const logFoo = logger('foo');
 *    logFoo(); // => 'foo'
 */
const thunkify = curry((fn, value) => () => fn(value));

module.exports = thunkify;
