import Undefinable from "../../../dist/assert/undefinable";
import Boolean from "@dikac/t-boolean/assert/boolean";

it(`anonymous `, () => {
    try {
        Undefinable(function () {}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`anonymous arrow`, () => {
    try {
        Undefinable(()=>{}, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

it(`named`, () => {
    try {
        Undefinable(isNaN, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});
