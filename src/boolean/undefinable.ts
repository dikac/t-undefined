import TypeUndefined from './undefined';

export default function Undefinable<Type>(
    value : unknown,
    notUndefined : (value : unknown) => value is Type
) : value is Type|undefined {

    return TypeUndefined(value) || notUndefined(value);
}

