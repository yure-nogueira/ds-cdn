import type { Components, JSX } from "../types/components";

interface TpBanner extends Components.TpBanner, HTMLElement {}
export const TpBanner: {
    prototype: TpBanner;
    new (): TpBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
