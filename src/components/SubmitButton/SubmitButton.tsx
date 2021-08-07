import { wrapButton } from "../../utils/wrap/wrapButton";

/**
 * SubmitButton component using the wrap util.
 */
export const SubmitButton = wrapButton(props => (
	<button type="submit" {...props} />
));
