import { wrap } from "../../utils/wrap/wrap";

/**
 * Input component (with type "text" by default).
 */
export const Input = wrap("input")(({ children, ...properties }) => (
	<input type="text" value={children?.toString()} {...properties} />
));
