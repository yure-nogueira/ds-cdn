import type { Components, JSX } from "../types/components";

interface SnackbarExample extends Components.SnackbarExample, HTMLElement {}
export const SnackbarExample: {
    prototype: SnackbarExample;
    new (): SnackbarExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
