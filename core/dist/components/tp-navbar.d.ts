import type { Components, JSX } from "../types/components";

interface TpNavbar extends Components.TpNavbar, HTMLElement {}
export const TpNavbar: {
    prototype: TpNavbar;
    new (): TpNavbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
