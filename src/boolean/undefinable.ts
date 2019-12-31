import TypeUndefined from './type';

export default function Undefinable<Type>(value : any, notUndefined : (value : any) => value is Type) : value is Type|null {
    
    return TypeUndefined(value) || notUndefined(value);
}

