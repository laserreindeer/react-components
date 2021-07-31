import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ResetButton } from "../../src/components/ResetButton/ResetButton";

export const Base: ComponentStory<typeof ResetButton> = properties => (
	<ResetButton {...properties} />
);

export default {
	args: {
		children: "reset"
	},
	argTypes: {
		onClick: { action: "click" }
	},
	title: "Components/ResetButton",
	component: ResetButton
} as ComponentMeta<typeof ResetButton>;
