import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Example } from "../../src/components/Example/Example";

export const Base: ComponentStory<typeof Example> = properties => (
	<Example {...properties} />
);

export default {
	args: {
		children: "Example content"
	},
	title: "Components/Example",
	component: Example
} as ComponentMeta<typeof Example>;
