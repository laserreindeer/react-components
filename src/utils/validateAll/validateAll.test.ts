import { validateAll } from "./validateAll";

it("is a valid function", () => {
	expect(validateAll).toBeInstanceOf(Function);
});

const isTruthy = (value: unknown) => Boolean(value);
const isNumber = (value: unknown): value is number => typeof value === "number";
const isTruthyNumber = validateAll([isTruthy, isNumber]);

it("returns true when all validations pass, and false when some do not", () => {
	expect(isTruthyNumber(1)).toBe(true);
	expect(isTruthyNumber("1")).toBe(false);
	expect(isTruthyNumber("")).toBe(false);
});
