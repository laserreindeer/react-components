import { wrap } from "../../utils/wrap/wrap";
import type { ImageProperties } from "./ImageProperties";

/**
 * Image component using the wrap util.
 */
export const Image = wrap("img")<ImageProperties>(
	({ srcMap, ...properties }) => {
		const srcMapEntries =
			srcMap !== undefined ? Object.entries(srcMap) : undefined;

		return (
			<img
				src={
					srcMapEntries
						?.map(([size, url]) => [parseFloat(size), url] as const)
						// eslint-disable-next-line max-params
						.sort(([current], [next]) => current - next)[0]?.[1]
				}
				srcSet={srcMapEntries
					?.map(([size, url]) => `${url} ${size}w`)
					.join(",")}
				{...properties}
			/>
		);
	}
);
