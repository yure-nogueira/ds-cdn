import type { Components, JSX } from "../types/components";

interface TpElemProductSearch extends Components.TpElemProductSearch, HTMLElement {}
export const TpElemProductSearch: {
    prototype: TpElemProductSearch;
    new (): TpElemProductSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
