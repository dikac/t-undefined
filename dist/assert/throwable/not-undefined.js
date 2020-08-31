(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../string/not-undefined");
    function Undefined(subject = '') {
        return new Error(not_undefined_1.default(false, subject));
    }
    exports.default = Undefined;
});
//# sourceMappingURL=not-undefined.js.map