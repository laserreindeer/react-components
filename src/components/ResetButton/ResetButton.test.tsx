import { ResetButton } from "./ResetButton";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
	const { asFragment } = render(<ResetButton>Test</ResetButton>);
	expect(asFragment()).toMatchSnapshot();
});
