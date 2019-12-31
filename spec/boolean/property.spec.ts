import Undefinable from "../../dist/boolean/undefinable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('valid', () => {


    it("value", () => {

        expect(Undefinable<Array<any>>([], Array.isArray )).toBe(true);
    });

    it("undefined", () => {

        expect(Undefinable<Array<any>>(undefined, Array.isArray )).toBe(true);
    });

});

describe('invalid', () => {

    it("value", () => {

        expect(Undefinable<Array<any>>(1, Array.isArray )).toBe(false);
    });

});


