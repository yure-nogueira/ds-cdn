import type { Components, JSX } from "../types/components";

interface DialogExample extends Components.DialogExample, HTMLElement {}
export const DialogExample: {
    prototype: DialogExample;
    new (): DialogExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
