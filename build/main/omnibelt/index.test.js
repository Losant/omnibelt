"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var fp_1 = require("lodash/fp");
var R = __importStar(require("ramda"));
var index = __importStar(require("./index"));
var getExportedMethods = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (fs_extra_1.default
                .readdir(__dirname)
                // Filter down to just the function defenition files
                .then(R.filter(R.allPass([
                R.endsWith('.js'),
                R.complement(R.endsWith('test.js')),
                R.complement(R.equals('index.js')),
            ]))))];
    });
}); };
it('exports all utilities', function () { return __awaiter(_this, void 0, void 0, function () {
    var funcs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getExportedMethods().then(R.map(R.pipe(R.slice(0, -3), fp_1.camelCase)))];
            case 1:
                funcs = _a.sent();
                expect(R.keys(index)).toEqual(funcs);
                return [2 /*return*/];
        }
    });
}); });
it('exports only functions', function () { return __awaiter(_this, void 0, void 0, function () {
    var funcs, results, areAllExportsFunctions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getExportedMethods().then(R.map(R.pipe(R.concat('./'), require)))];
            case 1:
                funcs = _a.sent();
                results = R.map(R.is(Function), funcs);
                areAllExportsFunctions = R.all(R.equals(true), results);
                expect(areAllExportsFunctions).toEqual(true);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbW5pYmVsdC9pbmRleC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFtREE7O0FBbkRBLHNEQUEwQjtBQUMxQixnQ0FBc0M7QUFDdEMsdUNBQTJCO0FBQzNCLDZDQUFpQztBQUVqQyxJQUFNLGtCQUFrQixHQUFHOztRQUN6QixzQkFBTyxDQUNMLGtCQUFFO2lCQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLG9EQUFvRDtpQkFDbkQsSUFBSSxDQUNILENBQUMsQ0FBQyxNQUFNLENBQ04sQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDUixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkMsQ0FBQyxDQUNILENBQ0YsQ0FDSixFQUFDOztLQUNILENBQUM7QUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7Ozs7b0JBRVoscUJBQU0sa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQzNDLENBQUMsQ0FBQyxHQUFHLENBQ0gsQ0FBQyxDQUFDLElBQUksQ0FDSixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNkLGNBQVMsQ0FDVixDQUNGLENBQ0YsRUFBQTs7Z0JBUEssS0FBSyxHQUFHLFNBT2I7Z0JBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7S0FDdEMsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFOzs7O29CQUNSLHFCQUFNLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUNoRCxDQUFDLENBQUMsR0FBRyxDQUNILENBQUMsQ0FBQyxJQUFJLENBQ0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDZCxPQUFPLENBQ1IsQ0FDRixDQUNGLEVBQUE7O2dCQVBLLEtBQUssR0FBUSxTQU9sQjtnQkFFSyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRTlELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztLQUM5QyxDQUFDLENBQUMifQ==