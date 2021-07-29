import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Password } from "../../src/components/Password/Password";

export const Base: ComponentStory<typeof Password> = properties => (
	<Password readOnly {...properties} />
);

export default {
	args: {
		value: "LarryTheReindeer"
	},
	title: "Components/Password",
	component: Password
} as ComponentMeta<typeof Password>;
