(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../../boolean/string/not-undefined");
    function Undefined(value) {
        return new Error(not_undefined_1.default(false, value));
    }
    exports.default = Undefined;
});
//# sourceMappingURL=not-undefined.js.map