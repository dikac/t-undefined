import NotUndefinedType from "../string/not-undefined";
export default function Undefined(subject = '') {
    return new Error(NotUndefinedType(false, subject));
}
//# sourceMappingURL=not-undefined.js.map