const { upperFirst, camelCase } = require('lodash/fp');
const { compose } = require('ramda');

/**
 * Upper-first-camelcase-ify
 *
 * @signature String -> String
 *
 * @example
 *   upperCamelCase('foo-bar-baz') // => 'FooBarBaz'
 *   upperCamelCase('foo_bar_baz') // => 'FooBarBaz'
 */
const upperCamelCase = compose(upperFirst, camelCase);
module.exports = upperCamelCase;
