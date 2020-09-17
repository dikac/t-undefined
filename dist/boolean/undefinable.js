import TypeUndefined from './undefined';
export default function Undefinable(value, notUndefined) {
    return TypeUndefined(value) || notUndefined(value);
}
//# sourceMappingURL=undefinable.js.map