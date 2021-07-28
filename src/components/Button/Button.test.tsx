import { render } from "@testing-library/react";
import { Button } from "./Button";

it("matches snapshot", () => {
	const { asFragment } = render(<Button>Test</Button>);
	expect(asFragment()).toMatchSnapshot();
});
