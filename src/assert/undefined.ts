import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";

export default function Undefined(
    value : unknown,
    error : (value:unknown)=>Error = UndefinedError
) : asserts value is undefined {

    Callback(value, Guard, error);
}
