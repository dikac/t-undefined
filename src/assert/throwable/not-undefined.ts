import NotUndefinedType from "../string/not-undefined";

export default function NotUndefined(subject : string = '') : Error {

    return new Error(NotUndefinedType(false, subject))
}
