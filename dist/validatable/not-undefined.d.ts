import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export declare type Return<MessageType, Argument> = Readonly<Validatable<false> & Message<MessageType> & Value<undefined>> | Readonly<Validatable<true> & Message<MessageType> & Value<Argument>>;
export default function NotUndefined<MessageType, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageType): Return<MessageType, Argument>;
