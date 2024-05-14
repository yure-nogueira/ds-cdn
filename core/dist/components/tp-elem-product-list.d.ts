import type { Components, JSX } from "../types/components";

interface TpElemProductList extends Components.TpElemProductList, HTMLElement {}
export const TpElemProductList: {
    prototype: TpElemProductList;
    new (): TpElemProductList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
