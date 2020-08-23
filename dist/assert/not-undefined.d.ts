import Fn from "@dikac/t-function/function";
import { Union } from "ts-toolbelt";
export default function Undefined<Type>(value: Type, error?: Fn<[unknown], Error>): asserts value is Union.Exclude<Type, undefined>;
