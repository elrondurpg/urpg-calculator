"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataHandler = /** @class */ (function () {
    function DataHandler() {
    }
    DataHandler.castNulls = function (data) {
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            switch (typeof data[key]) {
                case "string":
                case "number":
                    if (this.NULL_VALUES.includes(data[key]))
                        delete data[key];
                    break;
                case "object":
                    if (data[key] === null || this.NULL_VALUES.includes(data[key].name))
                        delete data[key];
                    break;
            }
        }
        return __assign({}, data);
    };
    DataHandler.NULL_VALUES = ["NONE", "-1", -1, "-", "Not Found", "Unavailable"];
    return DataHandler;
}());
exports.DataHandler = DataHandler;
//# sourceMappingURL=DataHandler.js.map