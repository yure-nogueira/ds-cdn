import type { Components, JSX } from "../types/components";

interface TpElemCartButton extends Components.TpElemCartButton, HTMLElement {}
export const TpElemCartButton: {
    prototype: TpElemCartButton;
    new (): TpElemCartButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
