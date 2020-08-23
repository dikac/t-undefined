import Guard from "../boolean/undefined";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";

export default function Undefined(
    value : unknown,
    error : Fn<[unknown], Error> = UndefinedError
) : asserts value is undefined {

    Callback(value, Guard, error);
}
