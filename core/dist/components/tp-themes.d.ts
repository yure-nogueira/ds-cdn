import type { Components, JSX } from "../types/components";

interface TpThemes extends Components.TpThemes, HTMLElement {}
export const TpThemes: {
    prototype: TpThemes;
    new (): TpThemes;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
