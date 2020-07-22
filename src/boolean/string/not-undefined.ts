export default function NotUndefined(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is not undefined`;

    } else {

        return `value must not undefined`;
    }
}
