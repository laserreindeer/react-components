import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Email } from "../../src/components/Email/Email";

export const Base: ComponentStory<typeof Email> = properties => (
	<Email readOnly {...properties} />
);

export default {
	args: {
		value: "larry@laserreinder.com"
	},
	title: "Components/Email",
	component: Email
} as ComponentMeta<typeof Email>;
