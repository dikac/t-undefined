(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../validatable/undefined");
    class Undefined {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return undefined_1.default(value, this.message);
        }
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map