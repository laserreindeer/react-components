import { wrapInput } from "../../utils/wrap/wrapInput";

/**
 * Input component (with type "text" by default).
 */
export const Input = wrapInput(({ children, ...properties }) => (
	<input type="text" value={children?.toString()} {...properties} />
));
