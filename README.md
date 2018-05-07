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



## Notes

- What is this `method :: Type -> Type` stuff? It's [Hindley-Milner Notation](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch7.html).
- Since most methods are striaght from the source, refer to the [Ramda](http://ramdajs.com/docs/) and [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide) on their respective sites.
- Docs and examples for the Losant utils are colocated with the utility's definition. When contributing a new function, please provide docs (and tests).



## Docs

[JSDoc definitions](https://github.com/jsdoc3/jsdoc) at the top of each of the `losant` module functions should be kept up to date and are meant to describe the usage of each function in detail. From these doc comments, a documentation site is generated using the [Docdash](https://github.com/clenemt/docdash) template.

#### Viewing

You can open the docs locally by running the following `npm` script on a mac. In general (and for non-mac machines), you can simply opening `docs/index.html` in a browser.

```bash
yarn run docs
```

You can also see documentation for the latest tag on the GitHub pages for this project.

[https://losant.github.io/losant-utils/](https://losant.github.io/losant-utils/)

#### Building

Docs should be generated when a new version is tagged and pushed. `Ramda` and `Lodash` docs are autogenerated as part of a `pre` build step and you shouldn't have to interface with manually updating which methods are being pulled in. Docs are committed to `docs` and are served as a GitHub page whenever `master` is updated.

```bash
yarn run docs:build
git add -A
git commit -m "Regenerated docs"
```


## Release

```bash
git co develop
git fetch
git pull
# E

``` 


## Changelog

Below should serve as an "upgrade guide" jumping off point as you are migrating projects to newer versions of this package. Ideally, interface changes will be called out specifically and one should not have to go sifting through git diffs to discern what changed.

- `?.?.?` - *WIP*
   - Added methods:
      - `mapIndexed`
- `1.1.9`
   - Added methods:
      - `mapP`
   - Mehod name change:
      - `timeout` -> `timeoutP`
- `1.1.8`
   - Ability to generate a static documentation site that's hosted on GitHub pages.
- `1.1.7`
   - Added methods:
      - `ensureEndsWith`
- `1.1.6`
   - External changes:
      - `testHarness` and the like, no longer assume that `expect` is available in your environment through `jest`. Instead, you must pass `expect` in as a dependency. See [this issue](https://github.com/Losant/losant-utils/issues/40) for more info.
   - Internal changes:
      - linter update to `1.3.2`
      - tests for `equalsAny`
      - tests for `containsAll`
- `1.1.5`
   - Added methods:
      - `testHarness`
      - `testCases`
   - Internal changes:
      - Linter bumped and ran on project.
      - Tests for `evolveArray`.
- `1.1.4`
   - ⬆️ Ramda upgrade to `0.25.0`. Upgrade guide [here](https://github.com/ramda/ramda/issues/2319).
   - `tap` has been omitted from Ramda and implemented in this project to work around new version.
   - Added methods:
      - `toInteger` (Lodash)
   - Remove methods:
      - `testHarness`: Now is not exported as part of this library and is only used internally
   - Internal changes:
      - `test*` methods have been moved to `test/` and are only for internal use.
      - `testHarness` has been updated with a new interface. `testHarnessUnary` is still around for backwards compatibility.
      - `testCases` now exists to eliminate a common pattern when using `testHarness`.
- `1.1.3`
   - All internal Losant utilities now only require the specific function(s) they need from `ramda`/`lodash`.
   - The following methods are now pulled from Lodash instead of Ramda:
      - `forEach`: Note that `forEachObjIndexed` still comes from ramda (behaves as expected)
   - Removed methods:
      - `indexBy` from Ramda has been omitted in favor of `keyBy`
      - `parseInt` from Lodash has been omitted because it conflicts poorly with native
   - Added methods:
      - `dotPath`
      - `dotPathOr`
      - `eqDotPaths`
      - `eqDotPathsShallow`
      - `equalsShallow`
      - `toPlainObject` (Lodash)
      - `toNumber` (Lodash)
      - `mapFilter`
      - `filterMap`
      - `mapRejectNil`
      - `rejectNilMap`
      - `defer`
      - `noopAsync`
      - `resolveProps`
      - `timeout`
- `1.1.2`
   - Added methods:
      - `keyByWith`
- `1.1.1`
   - Added methods:
      - `sleep`
      - `round`
      - `within`
- `1.1.0`
   - All docs now colocated with implementations.
   - Added methods:
      - `clampPositive`
      - `count`
      - `intersectAny`
      - `upperCamelCase`
   - Removed methods:
      - `flattenShallow`
         - This is just `R.unnest` (though `flattenShallow` is a bit more semantic).
- `1.0.12`
   - `ramda` back down to `0.24.1`.
- `1.0.11`
   - Moved git repo from Bitbucket to GitHub, update your remotes!
      - `git remote set-url origin git@github.com:Losant/losant-utils.git`
   - Added methods:
      - `nonePass`
      - `eqPaths`
      - `ensureStartsWith`
      - `throttleLeading`
      - `throttleTrailing`
   - Moved methods:
      - `flip` now comes from `lodash/fp`
      - `throttle` is now "custom" and accepts 3 arguments (still curried)
      - `debounce` is now "custom" and accepts 3 arguments (still curried)
- `1.0.10`
   - Node and Yarn version less restrictive, allows anything newer.
   - Added methods:
      - `containsAny`
      - `isNotNil`
   - The following methods are now pulled from Lodash instead of Ramda:
      - `toString`
      - `toLower`
      - `toUpper`
      - `trim`
      - `split`
- `1.0.9`
   - Added methods:
      - `jsonParseSafe`
      - `thunkify`
      - `tryCatchSafe`
- `1.0.8`
   - `fpThrow` now accepts an `Error` object and will rethrow when passed.
- `1.0.7`
   - Converted to flat structure that exports all of the Lodash, Ramda, and custom methods that we're using.
   - New documentation standard introduced, but not fully converted to.
   - Dependency updates.
   - Added methods:
      - `allEqual`
      - `argsToObj`
      - `containsAll`
      - `defaultToStrict`
      - `ensureArray`
      - `equalsAny`
      - `evolveArray`
      - `flattenShallow`
      - `fpThrow`
      - `isNilOrEmpty`
      - `isNotEmpty`
      - `isNot`
      - `list`
      - `mergeSpec`
      - `propOrStrict`
      - `stringify`
      - `updateKeys`
      - `updateKeysWith`
      - `updateKeyPaths`
- `1.0.6`
   - Added methods:
      - `format`
      - `isPopulatedString`
      - `mergeWithArrays`
      - `replaceAll`
      - `stringToBoolean`
      - `trace`
   - `README.md` documentation can be found at the rood of the repo.
