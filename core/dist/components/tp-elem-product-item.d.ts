import type { Components, JSX } from "../types/components";

interface TpElemProductItem extends Components.TpElemProductItem, HTMLElement {}
export const TpElemProductItem: {
    prototype: TpElemProductItem;
    new (): TpElemProductItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
