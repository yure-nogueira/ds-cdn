import type { Components, JSX } from "../types/components";

interface TpAnimation extends Components.TpAnimation, HTMLElement {}
export const TpAnimation: {
    prototype: TpAnimation;
    new (): TpAnimation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
