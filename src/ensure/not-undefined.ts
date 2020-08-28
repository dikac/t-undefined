import AssertNotUndefined from "../assert/not-undefined";
import NotUndefinedError from "../assert/throwable/not-undefined";
import {Union} from "ts-toolbelt"

export default function NotUndefined<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotUndefinedError
) : Union.Exclude<Type, undefined>  {

    AssertNotUndefined(value, error);

    return value;
}
