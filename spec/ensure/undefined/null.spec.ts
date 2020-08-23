import Undefined from "../../../dist/ensure/undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {
    try {
        Undefined(null);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





