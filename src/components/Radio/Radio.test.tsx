import { render } from "@testing-library/react";
import { Radio } from "./Radio";

it("matches snapshot", () => {
	const { asFragment } = render(<Radio />);
	expect(asFragment()).toMatchSnapshot();
});
