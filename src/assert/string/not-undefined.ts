import SentencesIs from "@dikac/t-string/message/sentences-is";

/**
 * string intended for not undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotUndefined(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = new SentencesIs(valid);
    sentence.expectation =  {
        invalid : ['must not'],
        valid : ['is not'],
    };
    sentence.type.push('undefined');
    sentence.value.push(subject);

    if(!valid) {

        sentence.value.push(conversion(value));
    }

    return sentence.message;
}
