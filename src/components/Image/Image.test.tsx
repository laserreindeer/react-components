import { render } from "@testing-library/react";
import { Image } from "./Image";

it("matches snapshot", () => {
	const { asFragment } = render(<Image />);
	expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot srcMap", () => {
	const { asFragment } = render(
		<Image
			srcMap={{
				200: "https://placekitten.com/200/200",
				300: "https://placekitten.com/300/300",
				500: "https://placekitten.com/500/500"
			}}
		/>
	);
	expect(asFragment()).toMatchSnapshot();
});
