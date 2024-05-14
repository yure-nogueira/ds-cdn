import type { Components, JSX } from "../types/components";

interface TpPagination extends Components.TpPagination, HTMLElement {}
export const TpPagination: {
    prototype: TpPagination;
    new (): TpPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
