import { wrap } from "../../utils/wrap/wrap";

/**
 * SubmitButton component using the wrap util.
 */
export const SubmitButton = wrap("button")(props => (
	<button type="submit" {...props} />
));
