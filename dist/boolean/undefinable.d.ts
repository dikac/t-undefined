export default function Undefinable<Type>(value: unknown, notUndefined: (value: unknown) => value is Type): value is Type | undefined;
