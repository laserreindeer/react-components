import { render } from "@testing-library/react";
import { Anchor } from "./Anchor";

it("matches snapshot", () => {
	const { asFragment } = render(<Anchor>Test</Anchor>);
	expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot aside", () => {
	const { asFragment } = render(<Anchor aside>Test</Anchor>);
	expect(asFragment()).toMatchSnapshot();
});
