import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

it("matches snapshot", () => {
	const { asFragment } = render(<Checkbox />);
	expect(asFragment()).toMatchSnapshot();
});
