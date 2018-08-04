var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var isNotEmpty = require('./is-not-empty');
var cases = [
    ['', false],
    ['foo', true]
];
map(apply(testHarnessUnary(isNotEmpty)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm90LWVtcHR5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvaXMtbm90LWVtcHR5LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQU0sSUFBQSxxQkFBaUMsRUFBL0IsWUFBRyxFQUFFLGdCQUFLLENBQXNCO0FBRWhDLElBQUEsK0RBQWdCLENBQWlDO0FBQ3pELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdDLElBQU0sS0FBSyxHQUFHO0lBQ1osQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO0lBQ1gsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0NBQ2QsQ0FBQztBQUVGLEdBQUcsQ0FDRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDcEMsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9