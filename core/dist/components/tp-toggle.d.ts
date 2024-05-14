import type { Components, JSX } from "../types/components";

interface TpToggle extends Components.TpToggle, HTMLElement {}
export const TpToggle: {
    prototype: TpToggle;
    new (): TpToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
