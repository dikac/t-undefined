import UndefinedType from "../string/undefined";

export default function Undefined(subject : string = '') : Error {

    return new Error(UndefinedType(false, subject))
}
