import type { Components, JSX } from "../types/components";

interface TpGroupAnimation extends Components.TpGroupAnimation, HTMLElement {}
export const TpGroupAnimation: {
    prototype: TpGroupAnimation;
    new (): TpGroupAnimation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
