import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "../../src/components/Checkbox/Checkbox";

export const Base: ComponentStory<typeof Checkbox> = properties => (
	<Checkbox readOnly {...properties} />
);

export default {
	args: {
		checked: true
	},
	title: "Components/Checkbox",
	component: Checkbox
} as ComponentMeta<typeof Checkbox>;
