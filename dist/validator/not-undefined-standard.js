(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./not-undefined", "../validatable/string/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("./not-undefined");
    const not_undefined_2 = require("../validatable/string/not-undefined");
    function NotUndefinedStandard() {
        return new not_undefined_1.default(not_undefined_2.default);
    }
    exports.default = NotUndefinedStandard;
});
//# sourceMappingURL=not-undefined-standard.js.map