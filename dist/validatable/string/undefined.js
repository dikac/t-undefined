(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../../assert/string/undefined");
    function Undefined(object) {
        return undefined_1.default(object.valid, object.value);
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map