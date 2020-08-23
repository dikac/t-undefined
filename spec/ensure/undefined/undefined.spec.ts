import Undefined from "../../../dist/ensure/undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    Undefined(value);
    expect(value).toBeUndefined();
});





