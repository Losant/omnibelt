const _ = require('lodash/fp');

// TODO: Maybe grab these methods from individual packages
// NOTES: when deconstructing, parseInt conflicts poorly with native parseInt
// so for now, just use native parseInt, or toInteger

/**
 * @module lodash
 */
module.exports.camelCase = _.camelCase;
module.exports.capitalize = _.capitalize;
module.exports.castArray = _.castArray;
module.exports.compact = _.compact;
module.exports.deburr = _.deburr;
module.exports.escape = _.escape;
module.exports.escapeRegExp = _.escapeRegExp;
module.exports.flip = _.flip;
module.exports.forEach = _.forEach;
module.exports.isArrayLike = _.isArrayLike;
module.exports.isNull = _.isNull;
module.exports.isPlainObject = _.isPlainObject;
module.exports.isUndefined = _.isUndefined;
module.exports.kebabCase = _.kebabCase;
module.exports.keyBy = _.keyBy;
module.exports.lowerFirst = _.lowerFirst;
module.exports.mapKeys = _.mapKeys;
module.exports.noop = _.noop;
module.exports.pad = _.pad;
module.exports.padChars = _.padChars;
module.exports.padCharsEnd = _.padCharsEnd;
module.exports.padCharsStart = _.padCharsStart;
module.exports.padEnd = _.padEnd;
module.exports.padStart = _.padStart;
module.exports.snakeCase = _.snakeCase;
module.exports.split = _.split;
module.exports.startCase = _.startCase;
module.exports.toInteger = _.toInteger;
module.exports.toLower = _.toLower;
module.exports.toNumber = _.toNumber;
module.exports.toPlainObject = _.toPlainObject;
module.exports.toString = _.toString;
module.exports.toUpper = _.toUpper;
module.exports.trim = _.trim;
module.exports.trimEnd = _.trimEnd;
module.exports.trimStart = _.trimStart;
module.exports.truncate = _.truncate;
module.exports.unescape = _.unescape;
module.exports.upperFirst = _.upperFirst;
module.exports.words = _.words;
