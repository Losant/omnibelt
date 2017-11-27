# Changelog

Below should serve as an "upgrade guide" jumping off point as you are migrating projects to newer versions of this package. Ideally, interface changes will be called out specifically and one should not have to go sifting through git diffs to discern what changed.

- `?.?.?` - *WIP*
- `1.0.7`
  - Converted to flat structure that exports all of the Lodash, Ramda, and custom methods that we're using.
  - New documentation standard introduced, but not fully converted to.
  - Dependency updates.
  - Added methods:
    - `allEqual`
    - `argsToObj`
    - `conatinsAll`
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