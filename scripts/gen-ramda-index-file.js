const r = require('ramda');
const fs = require('fs');
const path = require('path');

const ramdaFuncsNames = Object.keys(r.omit([
  'count',
  'flip',
  'forEach',
  'indexBy',
  'split',
  'tap',
  'toLower',
  'toString',
  'toUpper',
  'trim',
  'isNotNil'
], r));

const moduleExportLines = [];
ramdaFuncsNames.forEach((funcName) => {
  moduleExportLines.push(`module.exports.${funcName} = r.${funcName};`);
});
const indexText = `const r = require('ramda');

/**
 * @module ramda
 */

${moduleExportLines.join('\n')}
`;
fs.writeFileSync(path.resolve(__dirname, '../src/ramda/index.js'), indexText);
