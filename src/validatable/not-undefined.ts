import Callback from "@dikac/t-value/message/callback";
import NotUndefinedGuard from "../boolean/not-undefined";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export type Return<Msg, Argument> =
    Readonly<Validatable<false> & Message<Msg> & Value<undefined>> |
    Readonly<Validatable<true> & Message<Msg> & Value<Argument>>;

export default function NotUndefined<Msg, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], Msg>
) : Return<Msg, Argument> {

    return <Return<Msg, Argument>> Callback(value, NotUndefinedGuard, message);
}


