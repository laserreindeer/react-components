import { wrapInput } from "../../utils/wrap/wrapInput";
import { Input } from "../Input/Input";

/**
 * Input of type "radio".
 */
export const Radio = wrapInput(properties => (
	<Input type="radio" {...properties} />
));
