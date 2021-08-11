import { wrapInput } from "../../utils/wrap/wrapInput";
import { Input } from "../Input/Input";

/**
 * Input of type "email".
 */
export const Email = wrapInput(properties => (
	<Input type="email" {...properties} />
));
