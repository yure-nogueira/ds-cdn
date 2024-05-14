import type { Components, JSX } from "../types/components";

interface TpLoader extends Components.TpLoader, HTMLElement {}
export const TpLoader: {
    prototype: TpLoader;
    new (): TpLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
