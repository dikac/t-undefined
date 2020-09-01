/**
 * string intended for not undefined message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotUndefined(valid: boolean, value: unknown, subject?: string, conversion?: (value: unknown) => string): string;
