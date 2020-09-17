import AssertNotUndefined from "../assert/not-undefined";
import NotUndefinedError from "../assert/throwable/not-undefined";
export default function NotUndefined(value, error = NotUndefinedError) {
    AssertNotUndefined(value, error);
    return value;
}
//# sourceMappingURL=not-undefined.js.map