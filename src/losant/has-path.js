const curry = require('ramda/src/curry');
const has = require('ramda/src/has');
const path = require('ramda/src/path');
const length = require('ramda/src/length');
const head = require('ramda/src/head');
const tail = require('ramda/src/tail');
const is = require('ramda/src/is');

/**
 * @signature Array<String> -> Object -> Boolean
 */
const hasPath = curry((pathList, obj) => {
  const propName = head(pathList);
  const pathLength = length(pathList);

  if (pathLength === 0 || !is(Object, obj)) {
    return false;
  }

  if (pathLength === 1) {
    return has(propName, obj);
  }

  const nextPathList = tail(pathList);
  const nextObj = path([propName], obj);

  return hasPath(nextPathList, nextObj);
});
