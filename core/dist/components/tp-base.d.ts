import type { Components, JSX } from "../types/components";

interface TpBase extends Components.TpBase, HTMLElement {}
export const TpBase: {
    prototype: TpBase;
    new (): TpBase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
