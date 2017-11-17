const {
  curry, pipe, intersection, length, equals,
} = require('ramda');

// TODO: TESTS
// TODO: DOCS

// containsAll :: Array<* a> => Array<* a> -> Boolean
// EX: containsAll([1, 2, 3], [1, 2, 3, 4, 5])
const containsAll = curry((smaller, larger) => {
  return pipe(
    intersection(smaller),
    length,
    equals(length(smaller)),
  )(larger);
});
module.exports = containsAll;
