import Guard from "../boolean/undefined";

export default function Undefinable<Alternative>(
    value : unknown,
    ensure : (value:unknown)=>Alternative,
    error ?: (value:unknown)=>Error
) : Alternative|undefined {

    if(Guard(value)) {

        return value;
    }

    try {

        return ensure(value);

    } catch (e) {

        if(error) {

            throw error(value);
        }

        throw e;
    }
}
