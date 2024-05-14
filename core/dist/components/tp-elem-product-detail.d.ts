import type { Components, JSX } from "../types/components";

interface TpElemProductDetail extends Components.TpElemProductDetail, HTMLElement {}
export const TpElemProductDetail: {
    prototype: TpElemProductDetail;
    new (): TpElemProductDetail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
