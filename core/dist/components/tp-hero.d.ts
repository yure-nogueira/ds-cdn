import type { Components, JSX } from "../types/components";

interface TpHero extends Components.TpHero, HTMLElement {}
export const TpHero: {
    prototype: TpHero;
    new (): TpHero;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
