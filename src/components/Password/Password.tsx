import { wrap } from "../../utils/wrap/wrap";
import { Input } from "../Input/Input";

/**
 * Input of type "password".
 */
export const Password = wrap("input")(properties => (
	<Input type="`password`" {...properties} />
));
