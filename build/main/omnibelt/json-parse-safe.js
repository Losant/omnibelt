var pipe = require('ramda/src/pipe');
var list = require('./list');
var tryCatchSafe = require('./try-catch-safe');
/**
 * A safe version of `JSON.parse` that returns an [error, result] tuple instead
 * of throwing an error.
 *
 * @signature * -> Array<?SyntaxError, *>
 *
 * @example
 *   const [error, result] = jsonParseSafe('{ "foo": "bar" }'); // => [null, { foo: 'bar' }]
 *   const [error, result] = jsonParseSafe('{'); // => [SyntaxError, null]
 */
var jsonParseSafe = pipe(list, tryCatchSafe(JSON.parse));
module.exports = jsonParseSafe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1wYXJzZS1zYWZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L2pzb24tcGFyc2Utc2FmZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFakQ7Ozs7Ozs7OztHQVNHO0FBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUN4QixJQUFJLEVBQ0osWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDekIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIn0=