import { Union } from "ts-toolbelt";
export default function NotUndefined<Type>(value: Type, error?: (value: unknown) => Error): Union.Exclude<Type, undefined>;
