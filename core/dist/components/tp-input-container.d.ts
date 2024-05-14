import type { Components, JSX } from "../types/components";

interface TpInputContainer extends Components.TpInputContainer, HTMLElement {}
export const TpInputContainer: {
    prototype: TpInputContainer;
    new (): TpInputContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
