import { addDecorator, addParameters } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);

addParameters({
	jsx: {
		onBeforeRender: /** @param {string} domString */ domString =>
			domString.replace(/\s+\w+=\{undefined\}\n*/gu, '')
	},
	layout: 'centered'
});

/** @type {import("@storybook/react").Parameters} */
export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
