import { render } from "@testing-library/react";
import { Email } from "./Email";

it("matches snapshot", () => {
	const { asFragment } = render(<Email />);
	expect(asFragment()).toMatchSnapshot();
});
