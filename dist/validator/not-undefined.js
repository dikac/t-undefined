(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../validatable/not-undefined");
    class NotUndefined {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return not_undefined_1.default(value, this.message);
        }
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map