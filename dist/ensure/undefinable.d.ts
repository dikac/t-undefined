export default function Undefinable<Alternative>(value: unknown, ensure: (value: unknown) => Alternative, error?: (value: unknown) => Error): Alternative | undefined;
