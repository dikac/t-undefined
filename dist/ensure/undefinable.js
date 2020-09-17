import Guard from "../boolean/undefined";
export default function Undefinable(value, ensure, error) {
    if (Guard(value)) {
        return value;
    }
    try {
        return ensure(value);
    }
    catch (e) {
        if (error) {
            throw error(value);
        }
        throw e;
    }
}
//# sourceMappingURL=undefinable.js.map