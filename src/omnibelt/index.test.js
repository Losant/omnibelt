const fs = require('fs-extra');
const { camelCase } = require('lodash/fp');
const {
  filter, allPass, endsWith, complement, equals, slice, map, pipe, keys,
  all, is, concat
} = require('@pnpm/ramda');

const index = require('./index');

const getExportedMethods = async () => {
  return fs.readdir(__dirname)
    // Filter down to just the function definition files
    .then(
      filter(allPass([
        endsWith('.js'),
        complement(endsWith('test.js')),
        complement(equals('index.js'))
      ]))
    );
};

it('exports all utilities', async () => {
  // Format them as they will be defined on export
  const funcs = await getExportedMethods().then(
    map(pipe(
      slice(0, -3),
      camelCase
    ))
  );

  expect(keys(index)).toEqual(funcs);
});

it('exports only functions', async () => {
  const funcs = await getExportedMethods().then(
    map(pipe(
      concat('./'),
      require
    ))
  );

  const results = map(is(Function), funcs);
  const areAllExportsFunctions = all(equals(true), results);

  expect(areAllExportsFunctions).toEqual(true);
});
