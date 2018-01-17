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

Namespaced - Use `l` by convention

```js
const l = require('losant-utils');
const foo = 'foo';

if (!l.isPopulatedString(foo)) {
  throw new Error('DANGER');
} else {
  return l.toLower(foo);
}
```



## Docs

- What is this `method :: Type -> Type` stuff? It's [Hindley-Milner Notation](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch7.html).
- Since most methods are striaght from the source, refer to the [Ramda](http://ramdajs.com/docs/) and [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide) on their respective sites.
- Docs and examples for the Losant utils are colocated with the utility's definition. When contributing a new function, please provide docs (and tests).
