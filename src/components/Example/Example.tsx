import { wrapDiv } from "../../utils/wrap/wrapDiv";
import type { ExampleProperties } from "./ExampleProperties";

/**
 * Example component using the wrap util.
 */
export const Example = wrapDiv<ExampleProperties>(
	({ children, loading = false, ...properties }) => (
		<div {...properties}>{loading ? "Loading..." : children}</div>
	)
);
