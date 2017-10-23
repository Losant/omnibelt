const replaceAll = require('./replace-all');

// TODO: Moar tests. If you're reading this, you should add another test (or three).

it('replaces all occurrences', () => {
  expect(replaceAll('\\n', '\n', 'foo\\nbar\\nbaz\\n'))
    .toEqual('foo\nbar\nbaz\n');
});
