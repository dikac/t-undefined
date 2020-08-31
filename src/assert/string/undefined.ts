import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not',
        valid:'is',
    }, 'undefined'
);

/**
 * string intended for undefined message
 *
 * @param valid
 * @param subject
 */
export default function Undefined(
    valid : boolean,
    subject : string = ''
) : string {

    sentence.valid = valid;
    sentence.subject = subject;
    return sentence.message;
}
