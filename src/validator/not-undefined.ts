import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotUndefinedValidatable from "../validatable/not-undefined";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/ambiguous";

export default class NotUndefined<MessageType>
    implements
        ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, MessageType>>>,
        Message<(result:Readonly<Value> & Readonly<Validatable>)=>MessageType>
{

    constructor(
       public message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
    ) {
    }

    validate<Argument extends undefined>(value: Argument) : Readonly<Instance<undefined, MessageType, false>>
    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, undefined, true, false, Readonly<Instance<Argument, MessageType>>>
    validate<Argument extends unknown>(value: Argument) {

        return <Return<unknown, Argument, undefined, true, false, Readonly<Instance<Argument, MessageType>>> | Readonly<Instance<undefined, MessageType, true>>> NotUndefinedValidatable(value, this.message);
    }
}

