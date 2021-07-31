import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { SubmitButton } from "../../src/components/SubmitButton/SubmitButton";

export const Base: ComponentStory<typeof SubmitButton> = properties => (
	<SubmitButton {...properties} />
);

export default {
	args: {
		children: "submit"
	},
	argTypes: {
		onClick: { action: "click" }
	},
	title: "Components/SubmitButton",
	component: SubmitButton
} as ComponentMeta<typeof SubmitButton>;
