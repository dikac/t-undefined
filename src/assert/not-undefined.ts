import Guard from "../boolean/not-undefined";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NotUndefinedError from "./throwable/not-undefined";
import {Union} from "ts-toolbelt"

export default function Undefined<Type>(
    value : Type,
    error : Fn<[unknown], Error> = NotUndefinedError
) : asserts value is Union.Exclude<Type, undefined> {

    Callback(value, Guard, error);
}
