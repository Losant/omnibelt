# losant-utils

Losant god utility belt. This lib wraps `Ramda` and `Lodash/FP` alongside our own utility methods. The order of precedence is: Does it exist in `Ramda`? Does it exist in `Lodash/FP`? Then it must be ours (in `src/losant`). That means that you can deconstruct methods from any of those three from the `losant-utils` exported object.

```js
const {
  merge, converge, toString,   // Ramda
  isNull, throttle, camelCase, // Lodash
  isPopulatedString,           // Losant
} = require('losant-utils');
```

... I've only grouped them for demonstration purposes, please don't do that in your code.
 

## Test

```bash
yarn run test
```

## Usage

Deconstruction

```js
const { isPopulatedString, toLower } = require('losant-utils');
const foo = 'foo';

if (!isPopulatedString(foo)) {
  throw new Error('DANGER');
} else {
  return toLower(foo);
}
```

Namespaced - Use `L` by convention

```js
const L = require('losant-utils');
const foo = 'foo';

if (!L.isPopulatedString(foo)) {
  throw new Error('DANGER');
} else {
  return L.toLower(foo);
}
```

## Docs

- What is this `method :: Type -> Type` stuff? It's [Hindley-Milner Notation](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch7.html).
- Since most methods are striaght from the source, refer to the [Ramda](http://ramdajs.com/docs/) and [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide) on their respective sites.
- Docs for the Losant utils are below. When contributing a new function, please provide docs (and tests).



### > `format`
`format :: String -> String`

Curried version of [`string-format`](https://github.com/davidchambers/string-format). It handles more than I'm indicating in the type signature here. Once you play around with it, feel free to put some more examples and update these docs.

```js
format('Hello, {}!', 'Alice'); // => 'Hello, Alice!'

pipe(
  identity,
  format('Hello, {}!')
)('Alice'); // => 'Hello, Alice!'
```



### > `isPopulatedString`
`isPopulatedString :: String -> Boolean`

Convenience method for checking if we have a non-empty string.

```js
isPopulatedString('foo');   // true
isPopulatedString('   ');   // true
isPopulatedString('');      // false
isPopulatedString(5);       // false
isPopulatedString(true);    // false
```



### > `mergeWithArrays`
`mergeWithArrays :: Object -> Object -> Object`

Tired of creating a customizer when you want to merge arrays as well? Enjoy.

```js
mergeWithArrays(
  {
    foo: [1, 2, 3],
    bar: 'first',
    baz: true,
  }, 
  {
    foo: [4, 5],
    bar: 'second',
  }
);
/*
 * {
 *   foo: [1, 2, 3, 4, 5],
 *   bar: 'second',
 *   baz: true,
 * }
 */
```



### > `replaceAll`
`replaceAll :: String -> String -> String => String`

Really, using `R.replace` with regex is fine, but this makes a nice interface.

```js
replaceAll(
  '\\n',
  '\n',
  'foo\\nbar\\nbaz\\n'
);
// foo\nbar\nbaz\n
```



### > `stringToBoolean`
`stringToBoolean :: String -> Boolean`

Cast a configuration string to a boolean value by looking for common "truth" directives. All else is false. This is especially useful for deciphering environment variables. See tests for full behavior.

```js
stringToBoolean('True');    // true
stringToBoolean(' yes ');   // true
stringToBoolean('false');   // false
stringToBoolean('treu');    // false
stringToBoolean('asdf');    // false
```



### > `trace`
`trace :: String -> a -> a`

Effectively a curried `console.log` that also returns it's input.

```js
trace('The meaning of life: ', 42);   // 42

pipe(
  identity
  trace('The meaning of life: ')      // 42
  // ...
)(42)
```