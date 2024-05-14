import type { Components, JSX } from "../types/components";

interface ModalExample extends Components.ModalExample, HTMLElement {}
export const ModalExample: {
    prototype: ModalExample;
    new (): ModalExample;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
