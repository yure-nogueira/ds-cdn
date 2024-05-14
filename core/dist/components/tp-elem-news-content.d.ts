import type { Components, JSX } from "../types/components";

interface TpElemNewsContent extends Components.TpElemNewsContent, HTMLElement {}
export const TpElemNewsContent: {
    prototype: TpElemNewsContent;
    new (): TpElemNewsContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
