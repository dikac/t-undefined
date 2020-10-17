import Guard from "../boolean/not-undefined";
import Callback from "@dikac/t-function/assert/callback";
import NotUndefinedError from "./throwable/not-undefined";
import {Union} from "ts-toolbelt"

export default function NotUndefined<Type>(
    value : Type,
    error : (vaule:unknown)=>Error = NotUndefinedError
) : asserts value is Union.Exclude<Type, undefined> {

    Callback(value, Guard, error);
}
