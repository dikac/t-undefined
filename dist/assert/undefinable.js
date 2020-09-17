import Guard from "../boolean/undefined";
export default function Undefinable(value, assert, error) {
    try {
        if (!Guard(value)) {
            assert(value);
        }
    }
    catch (e) {
        if (error) {
            throw error(value);
        }
        throw e;
    }
}
//# sourceMappingURL=undefinable.js.map