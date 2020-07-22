(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Undefined(valid, value) {
        if (valid) {
            return `value is undefined`;
        }
        else {
            return `value is not undefined`;
        }
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map