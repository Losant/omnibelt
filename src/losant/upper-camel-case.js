import { upperFirst, camelCase } from 'lodash/fp';
import { compose } from 'ramda';

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
