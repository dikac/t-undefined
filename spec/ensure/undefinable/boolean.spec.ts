import Undefinable from "../../../dist/ensure/undefinable";
import Boolean from "@dikac/t-boolean/ensure/boolean";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    let value = true;
    expect(Undefinable(value, Boolean)).toBe(value);
    expect(value).toBeTrue();
});

it(`false`, () => {

    let value = false;
    expect(Undefinable(value, Boolean)).toBe(value);
    expect(value).toBeFalse();
});

