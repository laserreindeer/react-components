import { wrap } from "../../utils/wrap/wrap";
import { Input } from "../Input/Input";

/**
 * Input of type "radio".
 */
export const Radio = wrap("input")(properties => (
	<Input type="radio" {...properties} />
));
