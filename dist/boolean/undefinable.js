(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("./undefined");
    function Undefinable(value, notUndefined) {
        return undefined_1.default(value) || notUndefined(value);
    }
    exports.default = Undefinable;
});
//# sourceMappingURL=undefinable.js.map