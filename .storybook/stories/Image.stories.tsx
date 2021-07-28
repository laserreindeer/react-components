import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Image } from "../../src/components/Image/Image";

export const Base: ComponentStory<typeof Image> = properties => (
	<Image {...properties} />
);

export default {
	args: {
		srcMap: {
			200: "https://placekitten.com/200/200",
			300: "https://placekitten.com/300/300",
			500: "https://placekitten.com/500/500"
		}
	},
	title: "Components/Image",
	component: Image
} as ComponentMeta<typeof Image>;
