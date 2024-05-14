import type { Components, JSX } from "../types/components";

interface TpTooltip extends Components.TpTooltip, HTMLElement {}
export const TpTooltip: {
    prototype: TpTooltip;
    new (): TpTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
