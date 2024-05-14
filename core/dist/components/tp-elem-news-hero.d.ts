import type { Components, JSX } from "../types/components";

interface TpElemNewsHero extends Components.TpElemNewsHero, HTMLElement {}
export const TpElemNewsHero: {
    prototype: TpElemNewsHero;
    new (): TpElemNewsHero;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
