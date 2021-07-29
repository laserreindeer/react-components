import { render } from "@testing-library/react";
import { Password } from "./Password";

it("matches snapshot", () => {
	const { asFragment } = render(<Password />);
	expect(asFragment()).toMatchSnapshot();
});
