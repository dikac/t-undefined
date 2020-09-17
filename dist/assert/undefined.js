import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";
export default function Undefined(value, error = UndefinedError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=undefined.js.map