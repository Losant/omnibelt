var _a = require('ramda'), map = _a.map, apply = _a.apply;
var testHarnessUnary = require('../../test/utils').testHarnessUnary;
var isNilOrEmpty = require('./is-nil-or-empty');
var cases = [
    ['', true],
    [null, true],
    [undefined, true],
    ['foo', false]
];
map(apply(testHarnessUnary(isNilOrEmpty)))(cases);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbmlsLW9yLWVtcHR5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvb21uaWJlbHQvaXMtbmlsLW9yLWVtcHR5LnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQU0sSUFBQSxxQkFBaUMsRUFBL0IsWUFBRyxFQUFFLGdCQUFLLENBQXNCO0FBRWhDLElBQUEsK0RBQWdCLENBQWlDO0FBQ3pELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWxELElBQU0sS0FBSyxHQUFHO0lBQ1osQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ1YsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBQ2pCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztDQUNmLENBQUM7QUFFRixHQUFHLENBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3RDLENBQUMsS0FBSyxDQUFDLENBQUMifQ==