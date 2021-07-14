import { validateAny } from "./validateAny";

it("is a valid function", () => {
	expect(validateAny).toBeInstanceOf(Function);
});

const isTruthy = (value: unknown) => Boolean(value);
const isNumber = (value: unknown): value is number => typeof value === "number";
const isTruthyNumber = validateAny([isTruthy, isNumber]);

it("returns true when all validations pass, and false when all do not", () => {
	expect(isTruthyNumber(1)).toBe(true);
	expect(isTruthyNumber("1")).toBe(true);
	expect(isTruthyNumber("")).toBe(false);
});
