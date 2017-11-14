const {
  pipe, split, join, curry,
} = require('ramda');

// replaceAll :: String -> String -> String => String
const replaceAll = curry((target, replacement, data) => {
  return pipe(
    split(target),
    join(replacement),
  )(data);
});

module.exports = replaceAll;
