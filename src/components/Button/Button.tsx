import { wrapButton } from "../../utils/wrap/wrapButton";

/**
 * Button component using the wrap util.
 */
export const Button = wrapButton(props => <button type="button" {...props} />);
