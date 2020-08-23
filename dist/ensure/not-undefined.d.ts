import Function from "@dikac/t-function/function";
import { Union } from "ts-toolbelt";
export default function NotUndefined<Type>(value: Type, error?: Function<[unknown], Error>): Union.Exclude<Type, undefined>;
