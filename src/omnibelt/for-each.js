const { is, curry, forEach } = require('ramda');
const isArray = is(Array);

/**
 * TODO
 *
 * @signature FIGURE OUT
 *
 * @example TODO
 */
const forEach = curry((func, listOrObj) => {
  if (isArray(listOrObj)) {
    forEach(func, listOrObj);
  } else {
    forEach((key) => { return func(listOrObj[key], key); }, Object.keys(listOrObj));
  }
});

module.exports = forEach;
