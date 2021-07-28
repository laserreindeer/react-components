import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../src/components/Button/Button";

export const Base: ComponentStory<typeof Button> = properties => (
	<Button {...properties} />
);

export default {
	args: {
		children: "Button content"
	},
	argTypes: {
		onClick: { action: "click" }
	},
	title: "Components/Button",
	component: Button
} as ComponentMeta<typeof Button>;
