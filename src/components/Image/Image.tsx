import { useMemo } from "react";
import { wrap } from "../../utils/wrap/wrap";
import type { ImageProperties } from "./ImageProperties";

/**
 * Image component using the wrap util.
 */
export const Image = wrap("img")<ImageProperties>(
	({ srcMap, ...properties }) => {
		const srcMapEntries = useMemo(
			() => (srcMap ? Object.entries(srcMap) : undefined),
			[srcMap]
		);

		return (
			<img
				src={
					srcMapEntries?.sort(
						// eslint-disable-next-line max-params
						([previous], [current]) =>
							parseFloat(current) - parseFloat(previous)
					)[0]?.[1]
				}
				srcSet={srcMapEntries
					?.map(([size, url]) => `${url} ${size}w`)
					.join(",")}
				{...properties}
			/>
		);
	}
);
