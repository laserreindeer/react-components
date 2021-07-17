import { wrap } from "../../utils/wrap/wrap";
import type { AnchorProperties } from "./AnchorProperties";

/**
 * Anchor component safe by default and with aside functionality.
 */
export const Anchor = wrap("a")<AnchorProperties>(
	({ aside = false, ...properties }) => (
		<a
			rel="noopener noreferrer"
			target={aside ? "_blank" : undefined}
			{...properties}
		/>
	)
);
