(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../boolean/undefined");
    function Undefinable(value, ensure, error) {
        if (undefined_1.default(value)) {
            return value;
        }
        try {
            return ensure(value);
        }
        catch (e) {
            if (error) {
                throw error(value);
            }
            throw e;
        }
    }
    exports.default = Undefinable;
});
//# sourceMappingURL=undefinable.js.map