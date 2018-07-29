import fs from 'fs-extra';
import { camelCase } from 'lodash/fp';
import * as R from 'ramda';
import * as index from './index';

const getExportedMethods = async () => {
  return (
    fs
      .readdir(__dirname)
      // Filter down to just the function defenition files
      .then(
        R.filter(
          R.allPass([
            R.endsWith('.js'),
            R.complement(R.endsWith('test.js')),
            R.complement(R.equals('index.js')),
          ]),
        ),
      )
  );
};

it('exports all utilities', async () => {
  // Format them as they will be defined on export
  const funcs = await getExportedMethods().then(
    R.map(
      R.pipe(
        R.slice(0, -3),
        camelCase,
      ),
    ),
  );

  expect(R.keys(index)).toEqual(funcs);
});

it('exports only functions', async () => {
  const funcs: any = await getExportedMethods().then(
    R.map(
      R.pipe(
        R.concat('./'),
        require,
      ),
    ),
  );

  const results = R.map(R.is(Function), funcs);
  const areAllExportsFunctions = R.all(R.equals(true), results);

  expect(areAllExportsFunctions).toEqual(true);
});
