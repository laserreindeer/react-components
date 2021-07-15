import type { Parameters } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

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
	backgrounds: {
		default: "light",
		values: [
			{ name: "light", value: "#FFF" },
			{ name: "dark", value: "#000" }
		]
	},
	controls: {
		matchers: {
			color: /(background|color)$/iu,
			date: /Date$/u
		}
	},
	docs: {
		theme: themes.dark
	}
};
