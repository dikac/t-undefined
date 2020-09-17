import UndefinedValidatable from "../validatable/undefined";
export default class Undefined {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return UndefinedValidatable(value, this.message);
    }
}
//# sourceMappingURL=undefined.js.map