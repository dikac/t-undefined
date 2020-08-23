import Undefinable from "../../../dist/ensure/undefinable";
import Boolean from "@dikac/t-boolean/ensure/boolean";

it(`plain`, () => {
    try {
        Undefinable({}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`instance`, () => {
    try {
        Undefinable(new Map(), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
