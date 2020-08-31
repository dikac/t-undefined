(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../../assert/string/not-undefined");
    function NotUndefined(object) {
        return not_undefined_1.default(object.valid);
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map