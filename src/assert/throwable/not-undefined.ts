import NotUndefinedType from "../../boolean/string/not-undefined";

export default function Undefined(value : unknown) : Error {

    return new Error(NotUndefinedType(false, value))
}
