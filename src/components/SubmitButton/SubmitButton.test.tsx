import { SubmitButton } from "./SubmitButton";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
	const { asFragment } = render(<SubmitButton>Test</SubmitButton>);
	expect(asFragment()).toMatchSnapshot();
});
