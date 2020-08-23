import UndefinedType from "../../boolean/string/undefined";

export default function Undefined(value : unknown) : Error {

    return new Error(UndefinedType(false, value))
}
