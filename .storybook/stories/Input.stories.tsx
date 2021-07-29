import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../src/components/Input/Input";

export const Base: ComponentStory<typeof Input> = properties => (
	<Input {...properties} />
);

export default {
	args: {
		value: "Input content"
	},
	title: "Components/Input",
	component: Input
} as ComponentMeta<typeof Input>;
