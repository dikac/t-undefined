import Undefinable from "../../../dist/assert/undefinable";
import Boolean from "@dikac/t-boolean/assert/boolean";

it(`undefined `, () => {

    let value = undefined;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
