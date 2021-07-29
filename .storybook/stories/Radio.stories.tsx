import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Radio } from "../../src/components/Radio/Radio";

export const Base: ComponentStory<typeof Radio> = properties => (
	<Radio readOnly {...properties} />
);

export default {
	args: {
		checked: true
	},
	title: "Components/Radio",
	component: Radio
} as ComponentMeta<typeof Radio>;
