import type { FunctionComponent, RefAttributes } from "react";
import { forwardRef, memo } from "react";
import type { JSXElement } from "../../types/JSXElement";
import type { JSXProperties } from "../../types/JSXProperties";

/**
 * Wraps a native element with `memo` and `forwardRef`.
 *
 * @param tagName TagName of element to be wrapped.
 */
export const wrap =
	<TagName extends keyof JSX.IntrinsicElements = "div">(tagName: TagName) =>
	/** @param component React component. */
	<Properties = Record<PropertyKey, unknown>>(
		// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
		component: FunctionComponent<
			JSXProperties<TagName> &
				Readonly<Partial<Properties>> &
				RefAttributes<JSXElement<TagName>>
		>
	) =>
		// eslint-disable-next-line ban/ban
		Object.assign(
			memo(
				// eslint-disable-next-line ban/ban
				Object.assign(
					// eslint-disable-next-line react/display-name
					forwardRef<
						JSXElement<TagName>,
						JSXProperties<TagName> & Readonly<Partial<Properties>>
						// eslint-disable-next-line max-params
					>((properties, ref) => component({ ...properties, ref })),
					{ displayName: tagName }
				)
			),
			{ displayName: tagName }
		);
