import type { Components, JSX } from "../types/components";

interface TpButtonCluster extends Components.TpButtonCluster, HTMLElement {}
export const TpButtonCluster: {
    prototype: TpButtonCluster;
    new (): TpButtonCluster;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
