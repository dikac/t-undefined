import Callback from "@dikac/t-validator/validatable/callback-function";
import NotUndefinedGuard from "../boolean/not-undefined";
export default function NotUndefined(value, message) {
    return Callback(value, NotUndefinedGuard, message);
}
//# sourceMappingURL=not-undefined.js.map