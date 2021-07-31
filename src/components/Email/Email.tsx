import { wrap } from "../../utils/wrap/wrap";
import { Input } from "../Input/Input";

/**
 * Input of type "email".
 */
export const Email = wrap("input")(properties => (
	<Input type="email" {...properties} />
));
