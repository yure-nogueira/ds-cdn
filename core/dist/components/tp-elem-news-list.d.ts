import type { Components, JSX } from "../types/components";

interface TpElemNewsList extends Components.TpElemNewsList, HTMLElement {}
export const TpElemNewsList: {
    prototype: TpElemNewsList;
    new (): TpElemNewsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
