import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import UndefinedValidatable from "../validatable/undefined";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";

export default class Undefined<MessageT>
    implements
        Validator<unknown, undefined, Readonly<ValidatorValidatable<unknown, MessageT>>>,
        Message<(result:Readonly<Value & Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends undefined>(value: Argument): Readonly<ValidatorValidatable<undefined, MessageT, true>>
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, undefined, Readonly<ValidatorValidatable<unknown, MessageT>>>
    validate<Argument extends unknown>(value: Argument) {

        return  UndefinedValidatable(value, this.message);
    }
}
