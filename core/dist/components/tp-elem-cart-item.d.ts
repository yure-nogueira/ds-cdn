import type { Components, JSX } from "../types/components";

interface TpElemCartItem extends Components.TpElemCartItem, HTMLElement {}
export const TpElemCartItem: {
    prototype: TpElemCartItem;
    new (): TpElemCartItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
