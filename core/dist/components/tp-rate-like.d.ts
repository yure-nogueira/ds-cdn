import type { Components, JSX } from "../types/components";

interface TpRateLike extends Components.TpRateLike, HTMLElement {}
export const TpRateLike: {
    prototype: TpRateLike;
    new (): TpRateLike;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
