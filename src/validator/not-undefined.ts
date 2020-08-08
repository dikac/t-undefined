import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotUndefinedValidatable from "../validatable/not-undefined";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/instance";
import Return from "@dikac/t-validator/validatable/validatable";

export default class NotUndefined<Msg>
    implements
        ValidatorAbstract<unknown, undefined, Readonly<Instance<unknown, Msg, true>>, Readonly<Instance<undefined, Msg, false>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, undefined, Readonly<Instance<Argument, Msg, true>>, Readonly<Instance<undefined, Msg, false>>> {

        return <Return<unknown, Argument, undefined, Readonly<Instance<Argument, Msg, true>>, Readonly<Instance<undefined, Msg, false>>>>
            NotUndefinedValidatable(value, this.message);
    }
}

