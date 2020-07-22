export default function Undefined(
    valid : boolean,
    value : unknown,
) : string {


    if(valid) {

        return `value is undefined`;

    } else {

        return `value is not undefined`;
    }
}
