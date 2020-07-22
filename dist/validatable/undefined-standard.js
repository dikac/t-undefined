(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./undefined", "./string/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("./undefined");
    const undefined_2 = require("./string/undefined");
    function UndefinedStandard(value) {
        return undefined_1.default(value, undefined_2.default);
    }
    exports.default = UndefinedStandard;
});
//# sourceMappingURL=undefined-standard.js.map