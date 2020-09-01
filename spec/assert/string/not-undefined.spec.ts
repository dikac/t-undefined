import NotUndefined from "../../../dist/assert/string/not-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'undefined'], 'type is not undefined');
data.set([true, 'undefined', 'value'], 'value is not undefined');
data.set([true, []], 'type is not undefined');
data.set([true, {}], 'type is not undefined');

data.set([false, 'undefined'], 'type string must not undefined');
data.set([false, 'undefined', 'value'], 'value string must not undefined');
data.set([false, []], 'type object must not undefined');
data.set([false, {}], 'type object must not undefined');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(NotUndefined(...args)).toBe(message);

    });

    i++;
}
