import NotUndefinedValidatable from "../validatable/not-undefined";
export default class NotUndefined {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NotUndefinedValidatable(value, this.message);
    }
}
//# sourceMappingURL=not-undefined.js.map