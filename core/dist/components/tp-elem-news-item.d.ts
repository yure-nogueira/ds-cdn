import type { Components, JSX } from "../types/components";

interface TpElemNewsItem extends Components.TpElemNewsItem, HTMLElement {}
export const TpElemNewsItem: {
    prototype: TpElemNewsItem;
    new (): TpElemNewsItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
