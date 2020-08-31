import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid : 'must not',
        valid : 'is not',
    }, 'undefined'
);

/**
 * string intended for not undefined message
 *
 * @param valid
 * @param subject
 */
export default function NotUndefined(
    valid : boolean,
    subject : string = ''
) : string {

    sentence.valid = valid;
    sentence.subject = subject;
    return sentence.message;
}
