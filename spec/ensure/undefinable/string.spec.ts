import Undefinable from "../../../dist/ensure/undefinable";
import Boolean from "@dikac/t-boolean/ensure/boolean";

it(`primitive`, () => {
    try {
        Undefinable('str', Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`object`, () => {
    try {
        Undefinable(new String('str'), Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
