# losant-utils

Losant utility functions that are project agnostic

## Test

```bash
yarn run test
```

## Usage

Deconstruction

```js
const { isPopulatedString } = require('losant-utils');

if (!isPopulatedString('test')) {
  throw new Error('DANGER');
}
```

Namespaced - Use `l` by convention

```js
const l = require('losant-utils');

if (!l.isPopulatedString('test')) {
  throw new Error('DANGER');
}
```

## Docs

- What is this `method :: Type -> Type` stuff? It's [Hindley-Milner Notation](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch7.html).

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
