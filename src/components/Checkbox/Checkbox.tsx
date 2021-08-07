import { wrapInput } from "../../utils/wrap/wrapInput";
import { Input } from "../Input/Input";

/**
 * Input of type "checkbox".
 */
export const Checkbox = wrapInput(properties => (
	<Input type="checkbox" {...properties} />
));
