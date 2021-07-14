import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { Example } from "../../src/components/Example/Example";
import { ExampleProperties } from "../../src/components/Example/ExampleProperties";
import { action } from "../action";

export const Base: Story<ExampleProperties> = properties => (
	<Example onClick={action("onClick")} {...properties} />
);

export default {
	title: "Components/Example",
	component: Example,
	args: {
		children: "Content",
		loading: false
	}
} as ComponentMeta<typeof Example>;
