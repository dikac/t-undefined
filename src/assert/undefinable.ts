import Guard from "../boolean/undefined";
import Fn from "@dikac/t-function/function";
import Assert from "@dikac/t-function/assert/assert";

export default function Undefinable<Alternative>(
    value : unknown,
    assert : Assert<unknown, Alternative, []>,
    error ?: Fn<[unknown], Error>
) : asserts value is undefined|Alternative {

    try {

        if(!Guard(value)) {

            assert(value)
        }

    } catch (e) {

        if(error) {

            throw error(value)
        }

        throw e;
    }

}
