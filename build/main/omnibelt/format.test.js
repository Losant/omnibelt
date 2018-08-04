var format = require('./format');
it('fills in curlies on string', function () {
    var actual = format('foo_{}_baz', 'bar');
    var expected = 'foo_bar_baz';
    expect(actual).toEqual(expected);
});
it('fills in values from object keys', function () {
    var actual = format('foo_{bar}_{baz}', { bar: 'bar', baz: 'baz' });
    var expected = 'foo_bar_baz';
    expect(actual).toEqual(expected);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvZm9ybWF0LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtJQUMvQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztJQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO0lBQ3JDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckUsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUMifQ==