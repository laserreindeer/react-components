import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Anchor } from "../../src/components/Anchor/Anchor";

export const Base: ComponentStory<typeof Anchor> = properties => (
	<Anchor {...properties} />
);

export default {
	args: {
		children: "Anchor content",
		href: "https://laserreindeer.com"
	},
	argTypes: {
		href: {
			description: "Anchor URL",
			type: "string"
		}
	},
	title: "Components/Anchor",
	component: Anchor
} as ComponentMeta<typeof Anchor>;
