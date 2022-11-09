const compose = require('@pnpm/ramda/src/compose');
const upperFirst = require('lodash/fp/upperFirst');
const camelCase = require('lodash/fp/camelCase');

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
