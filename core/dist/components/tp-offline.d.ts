import type { Components, JSX } from "../types/components";

interface TpOffline extends Components.TpOffline, HTMLElement {}
export const TpOffline: {
    prototype: TpOffline;
    new (): TpOffline;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
