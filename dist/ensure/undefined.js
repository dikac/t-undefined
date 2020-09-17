import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined";
export default function Undefined(value, error = UndefinedError) {
    AssertUndefined(value, error);
    return value;
}
//# sourceMappingURL=undefined.js.map