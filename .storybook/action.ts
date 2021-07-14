import { action as storybookAction } from "@storybook/addon-actions";

/**
 * Storybook action with `toString` to be used by `storybook-addon-jsx`.
 * @param name Name of the action.
 */
export const action = (name: string) =>
	Object.assign(storybookAction(name), {
		toString: () => `action('${name}')`
	});
