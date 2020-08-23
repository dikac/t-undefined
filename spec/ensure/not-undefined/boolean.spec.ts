import NotUndefined from "../../../dist/ensure/not-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotUndefined(true);
});

it(`false`, () => {

     NotUndefined(false);
});

