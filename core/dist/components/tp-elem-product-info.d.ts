import type { Components, JSX } from "../types/components";

interface TpElemProductInfo extends Components.TpElemProductInfo, HTMLElement {}
export const TpElemProductInfo: {
    prototype: TpElemProductInfo;
    new (): TpElemProductInfo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
