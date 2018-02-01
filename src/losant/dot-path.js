const T = require('ramda/src/T');
const curry = require('ramda/src/curry');
const pipe = require('ramda/src/pipe');
const prop = require('ramda/src/prop');
const path = require('ramda/src/path');
const cond = require('ramda/src/cond');
const split = require('ramda/src/split');
const contains = require('ramda/src/contains');

/**
 * Gets a prop value using either a dot-separated path or a prop name.
 *
 * @signature String -> Object -> *
 */
const dotPath = curry((stringPath, obj) => {
  const propOrPath = cond([
    [contains('.'), pipe(split('.'), path)],
    [T, prop],
  ])(stringPath);

  return propOrPath(obj);
});

module.exports = dotPath;
