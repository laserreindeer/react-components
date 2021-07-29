import { wrap } from "../../utils/wrap/wrap";

/**
 * Input component type text by default.
 */
export const TextInput = wrap("input")(({ ...properties }) => (
	<input type="text" {...properties} />
));
