const { mergeWith, concat, isArray } = require('lodash/fp');

// mergeWithArrays :: Object -> Object -> Object
const mergeWithArrays =
  mergeWith(
    (x, y) => {
      if (isArray(x)) { return concat(x, y); }
      // return `undefined` so `mergeWith` does default
    }
  );

module.exports = mergeWithArrays;
