import Callback from "@dikac/t-validator/validatable/callback-function";
import UndefinedGuard from "../boolean/undefined";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export type Return<Msg, Argument> = Readonly<Validatable<false> & Message<Msg> & Value<Argument>> | Readonly<Validatable<true> & Message<Msg> & Value<undefined>>;

export default function Undefined<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<MessageType, Argument> {

    return <Return<MessageType, Argument>> Callback(value, UndefinedGuard, message);
}
