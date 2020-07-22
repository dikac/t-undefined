import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import UndefinedMessage from "../../boolean/string/undefined";

export default function Undefined(object : Readonly<Value & Validatable>) : string {

    return UndefinedMessage(object.valid, object.value)
}
