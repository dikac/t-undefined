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
    function NotUndefined(valid, value) {
        if (valid) {
            return `value is not undefined`;
        }
        else {
            return `value must not undefined`;
        }
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map