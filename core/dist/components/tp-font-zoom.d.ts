import type { Components, JSX } from "../types/components";

interface TpFontZoom extends Components.TpFontZoom, HTMLElement {}
export const TpFontZoom: {
    prototype: TpFontZoom;
    new (): TpFontZoom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
