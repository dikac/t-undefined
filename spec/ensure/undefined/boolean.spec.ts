import Undefined from "../../../dist/ensure/undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

    try {

        Undefined(true);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

it(`false`, () => {

    try {

        Undefined(false);
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});

