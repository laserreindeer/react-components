import { wrap } from "../../utils/wrap/wrap";

/**
 * ResetButton component using the wrap util.
 */
export const ResetButton = wrap("button")(props => (
	<button type="reset" {...props} />
));
