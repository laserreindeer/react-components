import { wrapButton } from "../../utils/wrap/wrapButton";

/**
 * ResetButton component using the wrap util.
 */
export const ResetButton = wrapButton(props => (
	<button type="reset" {...props} />
));
