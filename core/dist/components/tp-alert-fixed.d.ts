import type { Components, JSX } from "../types/components";

interface TpAlertFixed extends Components.TpAlertFixed, HTMLElement {}
export const TpAlertFixed: {
    prototype: TpAlertFixed;
    new (): TpAlertFixed;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
