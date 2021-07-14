/**
 * Takes an array of validator functions and a value and
 * returns the result of validating every validator.
 *
 * @param validator Validator function.
 * @returns Curried function with `validators` in context.
 */
export const validateAll =
	<
		Value = unknown,
		Validator extends (value: Value) => boolean = (value: Value) => boolean
	>(
		validators: ReadonlyArray<Validator>
	) =>
	/**
	 * @param value Value to validate.
	 * @returns Boolean (`true` for valid, `false` for invalid).
	 */
	(value: Value) =>
		validators.every(validator => validator(value));
