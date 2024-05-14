import type { Components, JSX } from "../types/components";

interface TpToolbar extends Components.TpToolbar, HTMLElement {}
export const TpToolbar: {
    prototype: TpToolbar;
    new (): TpToolbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
