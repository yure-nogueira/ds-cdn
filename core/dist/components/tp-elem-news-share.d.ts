import type { Components, JSX } from "../types/components";

interface TpElemNewsShare extends Components.TpElemNewsShare, HTMLElement {}
export const TpElemNewsShare: {
    prototype: TpElemNewsShare;
    new (): TpElemNewsShare;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
