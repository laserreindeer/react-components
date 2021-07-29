import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "../../src/components/TextInput/TextInput";

export const Base: ComponentStory<typeof TextInput> = properties => (
	<TextInput {...properties} />
);

export default {
	args: {
		value: "TextInput content"
	},
	title: "Components/Input",
	component: TextInput
} as ComponentMeta<typeof TextInput>;
