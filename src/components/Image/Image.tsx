import { wrap } from "../../utils/wrap/wrap";
import type { ImageProperties } from "./ImageProperties";

/**
 * Image component using the wrap util.
 */
export const Image = wrap("img")<ImageProperties>(
	({ srcMap, ...properties }) => {
		const srcMapSortedEntries =
			srcMap !== undefined
				? Object.entries(srcMap)
						.map(([size, url]) => [parseFloat(size), url] as const)
						// eslint-disable-next-line max-params
						.sort(([current], [next]) => next - current)
				: undefined;

		return (
			<img
				src={srcMapSortedEntries?.[0]?.[1]}
				srcSet={srcMapSortedEntries
					?.map(([size, url]) => `${url} ${size}w`)
					.join(",")}
				{...properties}
			/>
		);
	}
);
