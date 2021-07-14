import type { DetailedHTMLProps } from "react";
import type { TagName } from "./TagName";

/**
 * Get element from TagName.
 */
export type JSXElement<Tag extends TagName = "div"> =
	JSX.IntrinsicElements[Tag] extends DetailedHTMLProps<
		infer _Attributes,
		infer Element
	>
		? Element
		: never;
