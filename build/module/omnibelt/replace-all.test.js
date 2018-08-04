const replaceAll = require('./replace-all');
// TODO: Moar tests. If you're reading this, you should add another test (or three).
it('replaces all occurrences', () => {
    expect(replaceAll('\\n', '\n', 'foo\\nbar\\nbaz\\n'))
        .toEqual('foo\nbar\nbaz\n');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS1hbGwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9yZXBsYWNlLWFsbC50ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU1QyxvRkFBb0Y7QUFFcEYsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtJQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNsRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQyJ9