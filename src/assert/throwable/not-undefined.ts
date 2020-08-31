import NotUndefinedType from "../string/not-undefined";

export default function Undefined(subject : string = '') : Error {

    return new Error(NotUndefinedType(false, subject))
}
