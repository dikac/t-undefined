import Undefined_ from "../../../dist/assert/string/undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'undefined'], 'type is undefined');
data.set([true, 'undefined', 'value'], 'value is undefined');
data.set([true, []], 'type is undefined');
data.set([true, {}], 'type is undefined');

data.set([false, 'undefined'], 'type string is not undefined');
data.set([false, 'undefined', 'value'], 'value string is not undefined');
data.set([false, []], 'type object is not undefined');
data.set([false, {}], 'type object is not undefined');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(Undefined_(...args)).toBe(message);

    });

    i++;
}
