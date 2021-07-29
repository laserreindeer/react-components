import { wrap } from "../../utils/wrap/wrap";
import { Input } from "../Input/Input";

/**
 * Input of type "checkbox".
 */
export const Checkbox = wrap("input")(properties => (
	<Input type="checkbox" {...properties} />
));
