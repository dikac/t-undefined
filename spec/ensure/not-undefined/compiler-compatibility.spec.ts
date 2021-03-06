import NotUndefined from "../../../dist/ensure/not-undefined";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : undefined|number = <any>1;

    let result = NotUndefined(target);

    let number : number = result;

    // @ts-expect-error
    let undefined : undefined = result;
});

describe('unknown', () => {

    let target : any = 1;

    NotUndefined(target);

    let undefined : undefined = target;

});
