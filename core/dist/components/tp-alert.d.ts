import type { Components, JSX } from "../types/components";

interface TpAlert extends Components.TpAlert, HTMLElement {}
export const TpAlert: {
    prototype: TpAlert;
    new (): TpAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
