import Undefinable from "../../../dist/ensure/undefinable";
import Boolean from "@dikac/t-boolean/ensure/boolean";

it(`undefined `, () => {

    let value = undefined;
    expect(Undefinable(value, Boolean)).toBeUndefined();
    expect(value).toBeUndefined();
});
