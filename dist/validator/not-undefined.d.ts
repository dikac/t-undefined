import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/ambiguous";
export default class NotUndefined<Msg> implements ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, Msg>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>);
    validate<Argument extends undefined>(value: Argument): Readonly<Instance<undefined, Msg, false>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, undefined, true, false, Readonly<Instance<Argument, Msg>>>;
}
