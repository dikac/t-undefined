import { Union } from "ts-toolbelt";
export default function Undefined<Type>(value: Type, error?: (vaule: unknown) => Error): asserts value is Union.Exclude<Type, undefined>;
