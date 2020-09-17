import Callback from "@dikac/t-validator/validatable/callback-function";
import UndefinedGuard from "../boolean/undefined";
export default function Undefined(value, message) {
    return Callback(value, UndefinedGuard, message);
}
//# sourceMappingURL=undefined.js.map