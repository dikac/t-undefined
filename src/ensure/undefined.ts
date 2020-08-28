import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined";

export default function Undefined(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError
) : undefined {

    AssertUndefined(value, error);

    return value;
}
