import type { Parameters } from "@storybook/react";
import { addParameters } from "@storybook/react";

addParameters({ layout: "centered" });

export const parameters: Parameters = {
	actions: {
		argTypesRegex: "^on.*"
	},
	args: {
		children: "Children"
	},
	argTypes: {
		children: {
			description: "Children of the element",
			type: "string"
		}
	},
	controls: {
		matchers: {
			color: /(background|color)$/iu,
			date: /Date$/u
		}
	}
};
