import type { Components, JSX } from "../types/components";

interface TpCheckCard extends Components.TpCheckCard, HTMLElement {}
export const TpCheckCard: {
    prototype: TpCheckCard;
    new (): TpCheckCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
