import type { Components, JSX } from "../types/components";

interface TpAddCard extends Components.TpAddCard, HTMLElement {}
export const TpAddCard: {
    prototype: TpAddCard;
    new (): TpAddCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
