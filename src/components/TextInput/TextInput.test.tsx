import { render } from "@testing-library/react";
import { TextInput } from "./TextInput";

it("matches snapshot", () => {
	const { asFragment } = render(<TextInput />);
	expect(asFragment()).toMatchSnapshot();
});
