import Function from "@dikac/t-function/function";
import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined";

export default function Undefined(
    value : unknown,
    error : Function<[unknown], Error> = UndefinedError
) : undefined {

    AssertUndefined(value, error);

    return value;
}
