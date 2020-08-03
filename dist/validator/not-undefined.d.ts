import ValidatorAbstract from "@dikac/t-validator/validator-abstract";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
export default class NotUndefined<Msg> implements ValidatorAbstract<unknown, Readonly<Instance<unknown, Msg, true>>, Readonly<Instance<undefined, Msg, false>>>, Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value> & Readonly<Validatable>], Msg>);
    validate<Argument extends unknown>(value: Argument): Readonly<Instance<Argument, Msg, true> | Instance<undefined, Msg, false>>;
}
