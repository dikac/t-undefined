(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/callback", "../boolean/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const undefined_1 = require("../boolean/undefined");
    function Undefined(value, message) {
        return callback_1.default(value, undefined_1.default, message);
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map