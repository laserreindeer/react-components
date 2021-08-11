import { wrapInput } from "../../utils/wrap/wrapInput";
import { Input } from "../Input/Input";

/**
 * Input of type "password".
 */
export const Password = wrapInput(properties => (
	<Input type="password" {...properties} />
));
