import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/ambiguous";
export default class NotUndefined<MessageType> implements ValidatorAbstract<unknown, undefined, true, false, Readonly<Instance<unknown, MessageType>>>, Message<(result: Readonly<Value> & Readonly<Validatable>) => MessageType> {
    message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType;
    constructor(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType);
    validate<Argument extends undefined>(value: Argument): Readonly<Instance<undefined, MessageType, false>>;
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, undefined, true, false, Readonly<Instance<Argument, MessageType>>>;
}
