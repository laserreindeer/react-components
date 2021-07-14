import type { PropsWithChildren, PropsWithoutRef, RefAttributes } from "react";
import type { JSXElement } from "./JSXElement";

export type JSXProperties<TagName extends keyof JSX.IntrinsicElements = "div"> =
	PropsWithoutRef<PropsWithChildren<JSX.IntrinsicElements[TagName]>> &
		RefAttributes<JSXElement<TagName>>;
