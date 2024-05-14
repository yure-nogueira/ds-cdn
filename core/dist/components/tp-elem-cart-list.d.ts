import type { Components, JSX } from "../types/components";

interface TpElemCartList extends Components.TpElemCartList, HTMLElement {}
export const TpElemCartList: {
    prototype: TpElemCartList;
    new (): TpElemCartList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
