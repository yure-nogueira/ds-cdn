import type { Components, JSX } from "../types/components";

interface TpHeader extends Components.TpHeader, HTMLElement {}
export const TpHeader: {
    prototype: TpHeader;
    new (): TpHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
