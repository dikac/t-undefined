import Undefinable from "../../../dist/assert/undefinable";
import Boolean from "@dikac/t-boolean/assert/boolean";

it(`null`, () => {
    try {
        Undefinable(null, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
