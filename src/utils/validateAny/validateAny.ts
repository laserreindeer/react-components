/**
 * Takes an array of validator functions and a value and
 * returns the result of validating some validator.
 *
 * @param validator Validator function.
 * @returns Curried function with `validators` in context.
 */
export const validateAny =
	<Value>(validators: ReadonlyArray<(value: Value) => boolean>) =>
	/**
	 * @param value Value to validate.
	 * @returns Boolean (`true` for valid, `false` for invalid).
	 */
	(value: Value) =>
		validators.some(validator => validator(value));
