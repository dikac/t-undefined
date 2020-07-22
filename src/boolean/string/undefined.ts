export default function String(
    valid : boolean,
    value : unknown,
) : string {


    if(valid) {

        return `value is undefined`;

    } else {

        return `value is not undefined`;
    }
}
