var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var upperCamelCase = require('./upper-camel-case');
var cases = [
    ['foo', 'Foo'],
    ['foo-bar-baz', 'FooBarBaz'],
    ['foo_bar_baz', 'FooBarBaz'],
    ['foo bar baz', 'FooBarBaz']
];
map(apply(testHarnessUnary(upperCamelCase)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBwZXItY2FtZWwtY2FzZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29tbmliZWx0L3VwcGVyLWNhbWVsLWNhc2UudGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBTSxJQUFBLHFCQUFpQyxFQUEvQixZQUFHLEVBQUUsZ0JBQUssQ0FBc0I7QUFDaEMsSUFBQSwrREFBZ0IsQ0FBaUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFckQsSUFBTSxLQUFLLEdBQUc7SUFDWixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDZCxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7SUFDNUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVCLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztDQUM3QixDQUFDO0FBRUYsR0FBRyxDQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUN4QyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=