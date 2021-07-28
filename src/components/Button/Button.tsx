import { wrap } from "../../utils/wrap/wrap";

/**
 * Button component using the wrap util.
 */
export const Button = wrap("button")(props => (
	<button type="button" {...props} />
));
