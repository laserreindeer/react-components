import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
	theme: create({
		base: "dark",
		brandTitle: "React Components",
		brandUrl: "https://react-components.laserreindeer.com"
	})
});
