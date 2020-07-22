import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotUndefinedMessage from "../../boolean/string/not-undefined";

export default function NotUndefined(object : Readonly<Value & Validatable>) : string {

    return NotUndefinedMessage(object.valid, object.value)
}
