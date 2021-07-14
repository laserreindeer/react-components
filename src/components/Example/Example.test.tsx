import { render } from "@testing-library/react";
import { Example } from "./Example";

it("matches snapshot loading", () => {
	const { asFragment } = render(<Example loading>Test</Example>);
	expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot loaded", () => {
	const { asFragment } = render(<Example>Test</Example>);
	expect(asFragment()).toMatchSnapshot();
});
