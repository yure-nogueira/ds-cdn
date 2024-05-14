import type { Components, JSX } from "../types/components";

interface TpElemNewsSearch extends Components.TpElemNewsSearch, HTMLElement {}
export const TpElemNewsSearch: {
    prototype: TpElemNewsSearch;
    new (): TpElemNewsSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
