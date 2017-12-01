const { curry } = require('ramda');

/**
 * Takes a function and returns a function that takes any number of arguments
 * and returns a thunk that calls the original function with those arguments.
 *
 * @signature Function -> Function -> Function -> *
 *
 * @example
 *    const logItems = pipe(list, join(', ') console.log);
 *    const logger = thunkify(logItems);
 *    const log123 = logger(1, 2, 3);
 *    log123(); // => 1, 2, 3
 */
const thunkify = curry((fn, ...args) => () => fn(...args));

module.exports = thunkify;
