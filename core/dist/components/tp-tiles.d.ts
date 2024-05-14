import type { Components, JSX } from "../types/components";

interface TpTiles extends Components.TpTiles, HTMLElement {}
export const TpTiles: {
    prototype: TpTiles;
    new (): TpTiles;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
