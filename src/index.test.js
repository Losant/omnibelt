const {
  filter, allPass, endsWith, complement, equals, slice, map, pipe, keys
} = require('ramda');
const { camelCase } = require('lodash/fp');
const fs = require('fs-extra');

const index = require('./index');

describe('index', () => {

  it('exports all utilities', () => {
    fs.readdir(__dirname)
      // Filter down to just the function defenition files
      .then(
        filter(allPass([
          endsWith('.js'),
          complement(endsWith('test.js')),
          complement(equals('index.js'))
        ]))
      )
      // Format them as they will be defined on export
      .then(
        map(pipe(
          slice(0, -3),
          camelCase
        ))
      )
      .then((funcs) => {
        expect(keys(index)).toEqual(funcs);
      });
  });

});
